#pragma once

#include <Arduino.h>
#include <WiFi.h>
#include <WebSocketsClient.h>
#include <ArduinoJson.h>
#include "Battery.h"
#include "Config.h"
#include "Protocol.h"
#include "RingBuffer.h"

class TrackerNetwork {
public:
    TrackerNetwork();
    void begin();
    void process();

    bool isWiFiConnected() const;
    bool isWSConnected() const;
    bool isRecording() const;

    bool connectWiFi();
    bool discoverServer();
    bool announceDevice();
    void connectWebSocket();

    void sendFrame(const Batch2QuatFrame& frame);
    void sendHeartbeat();
    uint32_t getSyncedServerTimeMs() const;

    void triggerIdentify(uint32_t durationMs = 3000);

private:
    void handleWSEvent(WStype_t type, uint8_t* payload, size_t length);
    void handleTextMessage(const char* jsonStr, size_t length);
    void updateLED();

    WebSocketsClient wsClient;
    String resolvedHost;
    uint16_t resolvedPort;
    String deviceMac;

    bool wifiConnected;
    bool wsConnected;
    bool recording;

    uint32_t reconnectBackoffMs;
    uint32_t lastReconnectAttemptMs;
    uint32_t lastHeartbeatMs;

    // Clock sync
    int64_t serverTimeOffsetMs;

    // LED identify
    bool identifying;
    uint32_t identifyUntilMs;
    uint32_t lastBlinkToggleMs;
    bool ledState;
};

extern TrackerNetwork trackerNetwork;
extern ThreadSafeRingBuffer<Batch2QuatFrame, 120> disconnectBuffer;
