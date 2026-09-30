#include <Arduino.h>
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
#include <freertos/queue.h>
#include "Battery.h"
#include "Config.h"
#include "Hardware.h"
#include "IMUManager.h"
#include "TrackerNetwork.h"
#include "Protocol.h"
#include "Roles.h"
#include "SerialCLI.h"
#include "Version.h"

// TODO: OTA (Over-The-Air) firmware update via WiFi is out of scope for current milestone.
// Initial tracker flashing and role/credential provisioning is performed over Web Serial (USB)
// using esptool-js and SerialCLI line protocol. Future milestone will add ArduinoOTA/HTTPUpdate support.

// Queue between Sensor Task and Network Task
static QueueHandle_t frameQueue = nullptr;

// Statistics
static volatile uint32_t totalSamplesGenerated = 0;
static volatile uint32_t lastStatsMs = 0;
static volatile uint32_t lastSampleCount = 0;

// FreeRTOS Task: Sensor Polling at 48 Hz (Never blocked by network)
void sensorTask(void* pvParameters) {
    const TickType_t xFrequency = pdMS_TO_TICKS(20.833);  // 48 Hz (~20.83 ms)
    TickType_t xLastWakeTime = xTaskGetTickCount();

    uint16_t seqCounter = 0;
    Batch2QuatFrame currentBatch;
    uint8_t batchIdx = 0;

    currentBatch.header.version = PROTOCOL_VERSION;
    currentBatch.header.role = static_cast<uint8_t>(config.getRole());
    currentBatch.header.flags = 0;  // Quat-only, live
    currentBatch.header.count = 2;

    while (true) {
        // Wait until next 48 Hz period
        vTaskDelayUntil(&xLastWakeTime, xFrequency);

        // Pause sensor polling and streaming during OTA updates
        if (trackerNetwork.isOTAInProgress()) {
            vTaskDelay(pdMS_TO_TICKS(100));
            continue;
        }

        // Update role if changed
        currentBatch.header.role = static_cast<uint8_t>(config.getRole());

        // Update IMU
        imuManager.update();

        float qw, qx, qy, qz;
        imuManager.getQuaternion(qw, qx, qy, qz);

        uint32_t syncedTimeMs = trackerNetwork.getSyncedServerTimeMs();
        seqCounter = (seqCounter + 1) & 0xFFFF;

        SampleQuat& s = currentBatch.samples[batchIdx];
        s.seq = seqCounter;
        s.t_ms = syncedTimeMs;
        s.quat_w = qw;
        s.quat_x = qx;
        s.quat_y = qy;
        s.quat_z = qz;

        totalSamplesGenerated++;
        batchIdx++;

        if (batchIdx >= 2) {
            batchIdx = 0;
            // Send to queue non-blocking (timeout 0)
            if (frameQueue != nullptr) {
                if (xQueueSend(frameQueue, &currentBatch, 0) != pdTRUE) {
                    // Queue full: push directly to disconnect ring buffer
                    disconnectBuffer.push(currentBatch);
                }
            }
        }
    }
}

// FreeRTOS Task: Network and Communication
void networkTask(void* pvParameters) {
    // Initial connection sequence
    if (trackerNetwork.connectWiFi()) {
        trackerNetwork.discoverServer();
        trackerNetwork.announceDevice();
        trackerNetwork.connectWebSocket();
    }

    Batch2QuatFrame frame;

    while (true) {
        // Process network events & WebSockets
        trackerNetwork.process();

        // Process Serial CLI
        serialCLI.process();

        // Drain incoming frames from queue
        while (xQueueReceive(frameQueue, &frame, 0) == pdTRUE) {
            trackerNetwork.sendFrame(frame);
        }

        // Periodic rate and stats line every 30 seconds
        uint32_t now = millis();
        if (now - lastStatsMs >= 30000) {
            uint32_t samplesDelta = totalSamplesGenerated - lastSampleCount;
            float rateHz = (samplesDelta * 1000.0f) / (now - lastStatsMs);
            lastStatsMs = now;
            lastSampleCount = totalSamplesGenerated;

            uint8_t battPct = 0;
            uint16_t battMv = 0;
            batteryMonitor.read(battPct, battMv);

            Serial.printf("[STATS] Uptime: %lu s | Role: %s | Total: %lu | Rate: %.1f Hz | Batt: %u%% (%u mV) | RSSI: %d dBm | FreeHeap: %lu B\n",
                          now / 1000,
                          roleToString(config.getRole()),
                          totalSamplesGenerated,
                          rateHz,
                          battPct,
                          battMv,
                          WiFi.status() == WL_CONNECTED ? WiFi.RSSI() : 0,
                          esp_get_free_heap_size());
        }

        vTaskDelay(pdMS_TO_TICKS(5));
    }
}

void setup() {
    Serial.begin(115200);
    // Allow USB CDC Serial connection
    delay(1000);

    Serial.println("\n=========================================");
    Serial.printf("  Eidon Tracker WiFi Firmware v%s\n", FIRMWARE_VERSION);
    Serial.println("=========================================");

    // Initialize peripherals
    batteryMonitor.begin();
    config.begin();
    serialCLI.begin();
    config.printSettings();

    // Initialize IMU
    if (!imuManager.begin()) {
        Serial.println("IMU: BNO085 initialization failed or not responding. Will retry in loop.");
    }

    // Initialize Network Subsystem
    trackerNetwork.begin();

    // Create FreeRTOS Queue for 32 batches (~1.3s buffer between tasks)
    frameQueue = xQueueCreate(32, sizeof(Batch2QuatFrame));
    if (frameQueue == nullptr) {
        Serial.println("Error: Failed to create FreeRTOS frameQueue!");
    }

    // Launch FreeRTOS Tasks
    // Sensor Task: Priority 5 (High), Core 0
    xTaskCreatePinnedToCore(
        sensorTask,
        "SensorTask",
        4096,
        nullptr,
        5,
        nullptr,
        0
    );

    // Network Task: Priority 3 (Medium), Core 0 (or Core 1 if available)
    xTaskCreatePinnedToCore(
        networkTask,
        "NetworkTask",
        8192,
        nullptr,
        3,
        nullptr,
        0
    );

    Serial.println("System: Initialization complete. Running FreeRTOS tasks.");
}

void loop() {
    // Empty loop: tasks run in FreeRTOS
    vTaskDelay(pdMS_TO_TICKS(1000));
}
