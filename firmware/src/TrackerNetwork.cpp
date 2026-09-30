#include "TrackerNetwork.h"
#include <ESPmDNS.h>
#include <HTTPClient.h>
#include "Hardware.h"
#include "IMUManager.h"
#include "Version.h"

TrackerNetwork trackerNetwork;
ThreadSafeRingBuffer<Batch2QuatFrame, 120> disconnectBuffer;

TrackerNetwork::TrackerNetwork()
    : resolvedPort(8000),
      wifiConnected(false),
      wsConnected(false),
      recording(false),
      reconnectBackoffMs(1000),
      lastReconnectAttemptMs(0),
      lastHeartbeatMs(0),
      serverTimeOffsetMs(0),
      identifying(false),
      identifyUntilMs(0),
      lastBlinkToggleMs(0),
      ledState(false) {}

void TrackerNetwork::begin() {
    pinMode(LED_PIN, OUTPUT);
    digitalWrite(LED_PIN, LOW);

    deviceMac = WiFi.macAddress();
    resolvedHost = config.getServerHost();
    resolvedPort = config.getServerPort();

    // WiFi Station mode only
    WiFi.mode(WIFI_STA);
    WiFi.disconnect(true);
    delay(100);

    wsClient.onEvent([this](WStype_t type, uint8_t* payload, size_t length) {
        this->handleWSEvent(type, payload, length);
    });
}

bool TrackerNetwork::isWiFiConnected() const { return wifiConnected; }
bool TrackerNetwork::isWSConnected() const { return wsConnected; }
bool TrackerNetwork::isRecording() const { return recording; }

bool TrackerNetwork::connectWiFi() {
    String ssid = config.getSSID();
    String pass = config.getPassword();

    if (ssid.length() == 0) {
        Serial.println("WiFi: SSID not configured. Use USB serial to configure: set ssid <val>");
        return false;
    }

    Serial.printf("WiFi: Connecting to '%s'...\n", ssid.c_str());
    WiFi.begin(ssid.c_str(), pass.length() > 0 ? pass.c_str() : nullptr);

    uint32_t startMs = millis();
    while (WiFi.status() != WL_CONNECTED && millis() - startMs < 10000) {
        delay(250);
        Serial.print(".");
    }
    Serial.println();

    if (WiFi.status() == WL_CONNECTED) {
        wifiConnected = true;
        reconnectBackoffMs = 1000;
        Serial.printf("WiFi: Connected! IP: %s, MAC: %s, RSSI: %d dBm\n",
                      WiFi.localIP().toString().c_str(), deviceMac.c_str(), WiFi.RSSI());
        return true;
    } else {
        wifiConnected = false;
        Serial.println("WiFi: Connection failed");
        return false;
    }
}

bool TrackerNetwork::discoverServer() {
    Serial.println("mDNS: Resolving 'eidon.local'...");
    if (MDNS.begin("eidon-node")) {
        IPAddress serverIp = MDNS.queryHost("eidon", 2000);
        if (serverIp != INADDR_NONE) {
            resolvedHost = serverIp.toString();
            Serial.printf("mDNS: Discovered 'eidon.local' at %s\n", resolvedHost.c_str());
            return true;
        }
    }

    // Fallback to configured host
    resolvedHost = config.getServerHost();
    resolvedPort = config.getServerPort();
    Serial.printf("mDNS: Fallback to configured server %s:%u\n", resolvedHost.c_str(), resolvedPort);
    return true;
}

bool TrackerNetwork::announceDevice() {
    if (!wifiConnected) return false;

    HTTPClient http;
    String announceUrl = "http://" + resolvedHost + ":" + String(resolvedPort) + "/v1/devices/announce";
    Serial.printf("Announce: POST %s\n", announceUrl.c_str());

    http.begin(announceUrl);
    http.addHeader("Content-Type", "application/json");
    if (config.getDeviceToken().length() > 0) {
        http.addHeader("Authorization", "Bearer " + config.getDeviceToken());
    }

    uint8_t battPct = 0;
    uint16_t battMv = 0;
    batteryMonitor.read(battPct, battMv);

    JsonDocument doc;
    doc["device_id"] = deviceMac;
    doc["role"] = roleToString(config.getRole());
    doc["firmware_version"] = FIRMWARE_VERSION;
    doc["battery_pct"] = battPct;
    doc["battery_mv"] = battMv;

    String requestBody;
    serializeJson(doc, requestBody);

    int httpCode = http.POST(requestBody);
    if (httpCode == HTTP_CODE_OK) {
        String response = http.getString();
        Serial.printf("Announce: Success! Response: %s\n", response.c_str());

        JsonDocument respDoc;
        DeserializationError err = deserializeJson(respDoc, response);
        if (!err) {
            uint64_t serverTimeMs = respDoc["server_time_ms"] | 0ULL;
            if (serverTimeMs > 0) {
                serverTimeOffsetMs = serverTimeMs - millis();
            }
        }
        http.end();
        return true;
    } else {
        Serial.printf("Announce: Failed with code %d: %s\n", httpCode, http.getString().c_str());
        http.end();
        return false;
    }
}

void TrackerNetwork::connectWebSocket() {
    if (!wifiConnected) return;

    String path = "/v1/devices/" + deviceMac + "/stream";
    if (config.getDeviceToken().length() > 0) {
        path += "?token=" + config.getDeviceToken();
    }

    Serial.printf("WebSocket: Connecting to ws://%s:%u%s\n", resolvedHost.c_str(), resolvedPort, path.c_str());
    wsClient.begin(resolvedHost.c_str(), resolvedPort, path.c_str());
    wsClient.setReconnectInterval(2000);
}

void TrackerNetwork::handleWSEvent(WStype_t type, uint8_t* payload, size_t length) {
    switch (type) {
        case WStype_CONNECTED: {
            wsConnected = true;
            Serial.println("WebSocket: Connected to server stream!");
            digitalWrite(LED_PIN, HIGH);

            // Flush ring buffer (backfill)
            Batch2QuatFrame backfill;
            size_t flushed = 0;
            while (disconnectBuffer.pop(backfill)) {
                backfill.header.flags |= FLAG_BACKFILL;
                wsClient.sendBIN(reinterpret_cast<uint8_t*>(&backfill), sizeof(backfill));
                flushed++;
                delay(2);
            }
            if (flushed > 0) {
                Serial.printf("WebSocket: Flushed %u buffered frames from ring buffer\n", flushed);
            }
            break;
        }

        case WStype_DISCONNECTED:
            wsConnected = false;
            Serial.println("WebSocket: Disconnected");
            digitalWrite(LED_PIN, LOW);
            break;

        case WStype_TEXT:
            handleTextMessage(reinterpret_cast<const char*>(payload), length);
            break;

        default:
            break;
    }
}

void TrackerNetwork::handleTextMessage(const char* jsonStr, size_t length) {
    JsonDocument doc;
    DeserializationError err = deserializeJson(doc, jsonStr, length);
    if (err) return;

    const char* type = doc["type"] | "";
    if (strcmp(type, "time_sync") == 0) {
        // Echo time_sync_resp with t0, client t1 and t2
        uint64_t t0 = doc["t0"] | 0ULL;
        uint32_t t1 = millis();
        uint32_t t2 = millis();

        JsonDocument respDoc;
        respDoc["type"] = "time_sync_resp";
        respDoc["t0"] = t0;
        respDoc["t1"] = t1;
        respDoc["t2"] = t2;

        String out;
        serializeJson(respDoc, out);
        wsClient.sendTXT(out);
    } else if (strcmp(type, "time_sync_ack") == 0) {
        int64_t offset = doc["offset_ms"] | 0LL;
        serverTimeOffsetMs = offset;
        Serial.printf("ClockSync: Synced with server. Offset = %lld ms, RTT = %u ms\n",
                      serverTimeOffsetMs, doc["rtt_ms"] | 0);
    } else if (strcmp(type, "start") == 0) {
        recording = true;
        Serial.println("Command: START recording received");
    } else if (strcmp(type, "stop") == 0) {
        recording = false;
        Serial.println("Command: STOP recording received");
    } else if (strcmp(type, "identify") == 0) {
        uint32_t dur = doc["duration_ms"] | 3000;
        triggerIdentify(dur);
    } else if (strcmp(type, "calibrate") == 0) {
        Serial.println("Command: CALIBRATE IMU received");
        imuManager.reset();
    } else if (strcmp(type, "reboot") == 0) {
        Serial.println("Command: REBOOT received, restarting...");
        delay(200);
        ESP.restart();
    }
}

void TrackerNetwork::sendFrame(const Batch2QuatFrame& frame) {
    if (wsConnected) {
        wsClient.sendBIN(reinterpret_cast<const uint8_t*>(&frame), sizeof(frame));
    } else {
        disconnectBuffer.push(frame);
    }
}

void TrackerNetwork::sendHeartbeat() {
    if (!wsConnected) return;

    uint8_t battPct = 0;
    uint16_t battMv = 0;
    batteryMonitor.read(battPct, battMv);

    JsonDocument doc;
    doc["type"] = "heartbeat";
    doc["battery_pct"] = battPct;
    doc["battery_mv"] = battMv;
    doc["rssi"] = WiFi.RSSI();
    doc["uptime_s"] = millis() / 1000;
    doc["dropped_samples"] = 0;

    String out;
    serializeJson(doc, out);
    wsClient.sendTXT(out);
}

uint32_t TrackerNetwork::getSyncedServerTimeMs() const {
    return static_cast<uint32_t>(millis() + serverTimeOffsetMs);
}

void TrackerNetwork::triggerIdentify(uint32_t durationMs) {
    Serial.printf("Command: IDENTIFY - blinking LED for %u ms\n", durationMs);
    identifying = true;
    identifyUntilMs = millis() + durationMs;
}

void TrackerNetwork::updateLED() {
    if (identifying) {
        uint32_t now = millis();
        if (now > identifyUntilMs) {
            identifying = false;
            digitalWrite(LED_PIN, wsConnected ? HIGH : LOW);
        } else if (now - lastBlinkToggleMs >= 150) {
            lastBlinkToggleMs = now;
            ledState = !ledState;
            digitalWrite(LED_PIN, ledState ? HIGH : LOW);
        }
    }
}

void TrackerNetwork::process() {
    updateLED();

    // Check WiFi connection
    if (WiFi.status() != WL_CONNECTED) {
        wifiConnected = false;
        wsConnected = false;
        uint32_t now = millis();
        if (now - lastReconnectAttemptMs >= reconnectBackoffMs) {
            lastReconnectAttemptMs = now;
            Serial.printf("WiFi: Reconnecting (backoff: %u ms)...\n", reconnectBackoffMs);
            if (connectWiFi()) {
                discoverServer();
                announceDevice();
                connectWebSocket();
            } else {
                // Exponential backoff up to 30s
                uint32_t nextBackoff = reconnectBackoffMs * 2;
                reconnectBackoffMs = (nextBackoff > 30000) ? 30000 : nextBackoff;
            }
        }
        return;
    }

    // Process WebSocket loop
    wsClient.loop();

    // Send heartbeat every 5s
    uint32_t now = millis();
    if (now - lastHeartbeatMs >= 5000) {
        lastHeartbeatMs = now;
        sendHeartbeat();
    }
}
