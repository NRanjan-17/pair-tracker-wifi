#include "Network.h"
#include "ClockSync.h"
#include "CommandParser.h"
#include "Config.h"
#include "Roles.h"
#include "SerialCLI.h"
#include "Version.h"
#include "../hal/Battery.h"
#include "../hal/IMUBus.h"
#include "../hal/LED.h"
#include "../hal/OTA.h"

#if defined(ESP32)
#include <WiFi.h>
#include <ESPmDNS.h>
#include <HTTPClient.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#include <ESP8266mDNS.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#endif

TrackerNetwork trackerNetwork;
SafeRingBuffer<Batch2QuatFrame, RING_BUFFER_CAPACITY> disconnectBuffer;
ClockSync clockSync;

TrackerNetwork::TrackerNetwork()
    : resolvedPort(8000),
      wifiConnected(false),
      wsConnected(false),
      recording(false),
      otaInProgress(false),
      rebootPending(false),
      rebootScheduledMs(0),
      reconnectBackoffMs(1000),
      lastReconnectAttemptMs(0),
      lastHeartbeatMs(0) {}

void TrackerNetwork::begin() {
    deviceMac = WiFi.macAddress();
    deviceMac.replace(":", "");
    deviceMac.toUpperCase();

    resolvedHost = config.getServerHost();
    resolvedPort = config.getServerPort();

    wsClient.onEvent([this](WStype_t type, uint8_t* payload, size_t length) {
        this->handleWSEvent(type, payload, length);
    });
}

bool TrackerNetwork::isWiFiConnected() const { return wifiConnected; }
bool TrackerNetwork::isWSConnected() const { return wsConnected; }
bool TrackerNetwork::isRecording() const { return recording; }
bool TrackerNetwork::isOTAInProgress() const { return otaInProgress; }

bool TrackerNetwork::connectWiFi() {
    String ssid = config.getSSID();
    String pass = config.getPassword();

    if (ssid.length() == 0) {
        Serial.println("WiFi: No SSID configured. Tracker in unconfigured state.");
        return false;
    }

    Serial.printf("WiFi: Connecting to SSID '%s'...\n", ssid.c_str());
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid.c_str(), pass.c_str());

    uint32_t startAttempt = millis();
    while (WiFi.status() != WL_CONNECTED && millis() - startAttempt < 12000) {
        delay(250);
        Serial.print(".");
        serialCLI.process();
        yield();
    }
    Serial.println();

    if (WiFi.status() == WL_CONNECTED) {
        wifiConnected = true;
        Serial.printf("WiFi: Connected! IP: %s, MAC: %s\n",
                      WiFi.localIP().toString().c_str(), deviceMac.c_str());
        return true;
    } else {
        wifiConnected = false;
        Serial.println("WiFi: Connection failed / timed out.");
        return false;
    }
}

bool TrackerNetwork::discoverServer() {
    String targetHost = config.getServerHost();
    if (!targetHost.endsWith(".local")) {
        resolvedHost = targetHost;
        resolvedPort = config.getServerPort();
        return true;
    }

    String serviceName = targetHost.substring(0, targetHost.length() - 6);
    Serial.printf("mDNS: Resolving service '%s'...\n", serviceName.c_str());

#if defined(ESP32)
    if (!MDNS.begin("pair-tracker-client")) {
        Serial.println("mDNS: Init failed, using fallback host.");
        resolvedHost = config.getServerHost();
        return false;
    }
    IPAddress serverIP = MDNS.queryHost(serviceName);
    if (serverIP != IPAddress()) {
        resolvedHost = serverIP.toString();
        Serial.printf("mDNS: Resolved '%s.local' to %s\n", serviceName.c_str(), resolvedHost.c_str());
        return true;
    }
#elif defined(ESP8266)
    IPAddress serverIP;
    if (WiFi.hostByName(targetHost.c_str(), serverIP)) {
        resolvedHost = serverIP.toString();
        Serial.printf("mDNS: Resolved '%s' to %s\n", targetHost.c_str(), resolvedHost.c_str());
        return true;
    }
#endif

    Serial.println("mDNS: Resolution failed, using configured hostname.");
    resolvedHost = config.getServerHost();
    resolvedPort = config.getServerPort();
    return false;
}

bool TrackerNetwork::announceDevice() {
    uint8_t battPct = 100;
    uint16_t battMv = 4000;
    halBattery.read(battPct, battMv);

    String announceUrl = "http://" + resolvedHost + ":" + String(resolvedPort) + "/v1/devices/announce";
    Serial.printf("Announce: Sending POST to %s\n", announceUrl.c_str());

    JsonDocument doc;
    doc["device_id"] = deviceMac;
    doc["role"] = roleToString(config.getRole());
    doc["hw"] = BOARD_HW_NAME;
#if defined(ESP32)
    doc["flash_size"] = ESP.getFlashChipSize();
#else
    doc["flash_size"] = ESP.getFlashChipRealSize();
#endif
    doc["free_heap"] = ESP.getFreeHeap();
    doc["firmware_version"] = FIRMWARE_VERSION;
    doc["protocol_version"] = PROTOCOL_VERSION;
    doc["battery_pct"] = battPct;
    doc["battery_mv"] = battMv;

    String jsonPayload;
    serializeJson(doc, jsonPayload);

#if defined(ESP32)
    HTTPClient http;
    http.begin(announceUrl);
    http.addHeader("Content-Type", "application/json");
    if (config.getDeviceToken().length() > 0) {
        http.addHeader("Authorization", String("Bearer ") + config.getDeviceToken());
    }

    int httpResponseCode = http.POST(jsonPayload);
    if (httpResponseCode == 200) {
        String response = http.getString();
        Serial.printf("Announce: Success! Server responded: %s\n", response.c_str());
        halOTA.validateApp();
        http.end();
        return true;
    } else {
        Serial.printf("Announce: Failed with code %d\n", httpResponseCode);
        http.end();
        return false;
    }
#elif defined(ESP8266)
    WiFiClient client;
    HTTPClient http;
    http.begin(client, announceUrl);
    http.addHeader("Content-Type", "application/json");
    if (config.getDeviceToken().length() > 0) {
        http.addHeader("Authorization", String("Bearer ") + config.getDeviceToken());
    }

    int httpResponseCode = http.POST(jsonPayload);
    if (httpResponseCode == 200) {
        String response = http.getString();
        Serial.printf("Announce: Success! Server responded: %s\n", response.c_str());
        halOTA.validateApp();
        http.end();
        return true;
    } else {
        Serial.printf("Announce: Failed with code %d\n", httpResponseCode);
        http.end();
        return false;
    }
#endif
}

void TrackerNetwork::connectWebSocket() {
    String streamPath = "/v1/devices/" + deviceMac + "/stream";
    if (config.getDeviceToken().length() > 0) {
        streamPath += "?token=" + config.getDeviceToken();
    }

    Serial.printf("WebSocket: Connecting to ws://%s:%u%s\n",
                  resolvedHost.c_str(), resolvedPort, streamPath.c_str());

    wsClient.begin(resolvedHost.c_str(), resolvedPort, streamPath.c_str());
    wsClient.setReconnectInterval(2000);
}

void TrackerNetwork::handleWSEvent(WStype_t type, uint8_t* payload, size_t length) {
    switch (type) {
        case WStype_DISCONNECTED:
            wsConnected = false;
            Serial.println("WebSocket: Disconnected.");
            reconnectBackoffMs = (reconnectBackoffMs * 2 > 8000UL) ? 8000UL : reconnectBackoffMs * 2;
            break;

        case WStype_CONNECTED:
            wsConnected = true;
            reconnectBackoffMs = 1000;
            Serial.println("WebSocket: Connected! Flushing backfill ring buffer...");

            // Send initial heartbeat
            sendHeartbeat();

            // Flush backfill ring buffer
            while (!disconnectBuffer.isEmpty()) {
                Batch2QuatFrame buffered;
                if (disconnectBuffer.pop(buffered)) {
                    buffered.header.flags |= FLAG_BACKFILL;
                    wsClient.sendBIN(reinterpret_cast<uint8_t*>(&buffered), sizeof(buffered));
                    delay(2);
                }
            }
            break;

        case WStype_TEXT:
            handleTextMessage(reinterpret_cast<const char*>(payload), length);
            break;

        default:
            break;
    }
}

void TrackerNetwork::handleTextMessage(const char* jsonStr, size_t length) {
    ParsedCommand cmd;
    if (!CommandParser::parse(jsonStr, length, cmd)) return;

    switch (cmd.type) {
        case CommandType::TIME_SYNC: {
            uint32_t t1 = millis();
            uint32_t t2 = millis();
            JsonDocument resp;
            resp["type"] = "time_sync_resp";
            resp["t0"] = cmd.t0;
            resp["t1"] = t1;
            resp["t2"] = t2;
            String out;
            serializeJson(resp, out);
            wsClient.sendTXT(out);
            break;
        }

        case CommandType::TIME_SYNC_ACK:
            clockSync.setOffset(cmd.offset_ms);
            Serial.printf("ClockSync: Synced with server. Offset = %lld ms, RTT = %u ms\n",
                          clockSync.getOffset(), cmd.rtt_ms);
            break;

        case CommandType::START_RECORDING:
            recording = true;
            Serial.println("Command: START recording received");
            break;

        case CommandType::STOP_RECORDING:
            recording = false;
            Serial.println("Command: STOP recording received");
            break;

        case CommandType::IDENTIFY:
            Serial.printf("Command: IDENTIFY - blinking LED for %u ms\n", cmd.duration_ms);
            halLED.triggerIdentify(cmd.duration_ms);
            break;

        case CommandType::CALIBRATE:
            Serial.println("Command: CALIBRATE IMU received");
            imuBus.reset();
            break;

        case CommandType::OTA:
            Serial.printf("Command: OTA update to %s (size: %u, sha256: %s, force: %d)\n",
                          cmd.otaVersion.c_str(), cmd.otaSize, cmd.otaSha256.c_str(), cmd.otaForce);
            performOTA(cmd.otaUrl, cmd.otaSha256, cmd.otaSize, cmd.otaVersion, cmd.otaForce);
            break;

        case CommandType::SET_ROLE:
            Serial.printf("Command: SET_ROLE - changing role to '%s'\n", cmd.role.c_str());
            config.setRole(stringToRole(cmd.role));
            announceDevice();
            break;

        case CommandType::REBOOT:
            scheduleReboot(150);
            break;

        default:
            break;
    }
}

void TrackerNetwork::scheduleReboot(uint32_t delayMs) {
    Serial.printf("Command: REBOOT requested - scheduling clean restart in %u ms\n", delayMs);
    rebootPending = true;
    rebootScheduledMs = millis() + delayMs;
}

void TrackerNetwork::sendFrame(const Batch2QuatFrame& frame) {
    if (wsConnected) {
        wsClient.sendBIN(reinterpret_cast<const uint8_t*>(&frame), sizeof(frame));
    } else {
        disconnectBuffer.push(frame);
    }
}

void TrackerNetwork::sendHeartbeat() {
    uint8_t battPct = 100;
    uint16_t battMv = 4000;
    halBattery.read(battPct, battMv);

    JsonDocument doc;
    doc["type"] = "heartbeat";
    doc["hw"] = BOARD_HW_NAME;
    doc["battery_pct"] = battPct;
    doc["battery_mv"] = battMv;
    doc["rssi"] = WiFi.RSSI();
    doc["uptime_s"] = millis() / 1000;
    doc["dropped_samples"] = disconnectBuffer.getDroppedCount();
    doc["free_heap"] = ESP.getFreeHeap();
#if defined(ESP32)
    doc["flash_size"] = ESP.getFlashChipSize();
#else
    doc["flash_size"] = ESP.getFlashChipRealSize();
#endif
    doc["firmware_version"] = FIRMWARE_VERSION;
    doc["protocol_version"] = PROTOCOL_VERSION;

    String out;
    serializeJson(doc, out);
    wsClient.sendTXT(out);
}

void TrackerNetwork::performOTA(const String& urlPath, const String& expectedSha256, size_t expectedSize, const String& version, bool force) {
    uint8_t battPct = 0;
    uint16_t battMv = 0;
    halBattery.read(battPct, battMv);

    if (!force && battPct < 30) {
        Serial.printf("OTA: Aborting - battery too low (%u%% < 30%%). Override with force=true\n", battPct);
        JsonDocument failDoc;
        failDoc["type"] = "ota_progress";
        failDoc["status"] = "failed";
        failDoc["error"] = "Battery below 30% (" + String(battPct) + "%)";
        String out;
        serializeJson(failDoc, out);
        wsClient.sendTXT(out);
        return;
    }

    otaInProgress = true;

    String fullUrl;
    if (urlPath.startsWith("http://") || urlPath.startsWith("https://")) {
        fullUrl = urlPath;
    } else {
        fullUrl = "http://" + resolvedHost + ":" + String(resolvedPort) + urlPath;
    }

    Serial.printf("OTA: Starting download from %s\n", fullUrl.c_str());

    auto progressCb = [this](const char* status, int pct, const char* error) {
        JsonDocument pDoc;
        pDoc["type"] = "ota_progress";
        pDoc["status"] = status;
        if (pct >= 0) pDoc["progress_pct"] = pct;
        if (error) pDoc["error"] = error;
        String out;
        serializeJson(pDoc, out);
        this->wsClient.sendTXT(out);
        yield();
    };

    bool ok = halOTA.performUpdate(fullUrl, config.getDeviceToken(), expectedSha256, expectedSize, progressCb);
    if (!ok) {
        Serial.println("OTA: Update failed! Resuming normal operation.");
        otaInProgress = false;
    }
}

void TrackerNetwork::process() {
    wsClient.loop();
    yield();

    // Handle deferred clean reboot
    if (rebootPending && millis() >= rebootScheduledMs) {
        rebootPending = false;
        Serial.println("Reboot: Executing clean system restart...");
        Serial.flush();
        wsClient.disconnect();
        WiFi.disconnect(true);
        WiFi.mode(WIFI_OFF);
        delay(150);

#if defined(ESP8266)
        // Ensure boot strapping pins are configured for SPI Flash Boot (mode 3):
        // GPIO0: HIGH (Flash boot)
        // GPIO2: HIGH (Flash boot; release onboard LED on GPIO2 which is active LOW)
        // GPIO15: LOW (Flash boot)
        pinMode(0, INPUT_PULLUP);
        pinMode(2, INPUT_PULLUP);
        digitalWrite(2, HIGH);
        pinMode(15, INPUT_PULLDOWN);
        delay(50);
        ESP.reset(); // Hardware reset (watchdog trigger)
#elif defined(ESP32)
        esp_restart();
#endif
    }

    // Periodic heartbeat every 5 seconds
    uint32_t now = millis();
    if (wsConnected && (now - lastHeartbeatMs >= 5000)) {
        lastHeartbeatMs = now;
        sendHeartbeat();
    }

    // Auto-reconnect if WiFi lost
    if (WiFi.status() != WL_CONNECTED) {
        wifiConnected = false;
        wsConnected = false;
        if (now - lastReconnectAttemptMs >= reconnectBackoffMs) {
            lastReconnectAttemptMs = now;
            if (connectWiFi()) {
                discoverServer();
                announceDevice();
                connectWebSocket();
            }
        }
    }
}
