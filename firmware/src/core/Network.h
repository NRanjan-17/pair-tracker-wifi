#pragma once

#include <Arduino.h>
#include <WebSocketsClient.h>
#include "../boards/board.h"
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
    bool isOTAInProgress() const;

    bool connectWiFi();
    bool discoverServer();
    bool announceDevice();
    void connectWebSocket();

    void sendFrame(const Batch2QuatFrame& frame);
    void sendHeartbeat();

    void triggerIdentify(uint32_t durationMs = 3000);
    void performOTA(const String& urlPath, const String& expectedSha256, size_t expectedSize, const String& version);

private:
    void handleWSEvent(WStype_t type, uint8_t* payload, size_t length);
    void handleTextMessage(const char* jsonStr, size_t length);

    WebSocketsClient wsClient;
    String resolvedHost;
    uint16_t resolvedPort;
    String deviceMac;

    bool wifiConnected;
    bool wsConnected;
    bool recording;
    bool otaInProgress;

    uint32_t reconnectBackoffMs;
    uint32_t lastReconnectAttemptMs;
    uint32_t lastHeartbeatMs;
};

extern TrackerNetwork trackerNetwork;
