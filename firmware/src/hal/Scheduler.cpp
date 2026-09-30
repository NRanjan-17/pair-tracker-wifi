#include "Scheduler.h"
#include "../core/ClockSync.h"
#include "../core/Config.h"
#include "../core/Network.h"
#include "../core/Protocol.h"
#include "../core/RingBuffer.h"
#include "../core/Roles.h"
#include "../core/SerialCLI.h"
#include "IMUBus.h"
#include "LED.h"

HalScheduler halScheduler;

#if defined(ESP32)

#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
#include <freertos/queue.h>

static QueueHandle_t frameQueue = nullptr;
static volatile uint32_t totalSamplesGenerated = 0;

static void sensorTask(void* pvParameters) {
    const TickType_t xFrequency = pdMS_TO_TICKS(20.833);
    TickType_t xLastWakeTime = xTaskGetTickCount();

    uint16_t seqCounter = 0;
    Batch2QuatFrame currentBatch;
    uint8_t batchIdx = 0;

    currentBatch.header.version = PROTOCOL_VERSION;
    currentBatch.header.role = static_cast<uint8_t>(config.getRole());
    currentBatch.header.flags = 0;
    currentBatch.header.count = 2;

    while (true) {
        vTaskDelayUntil(&xLastWakeTime, xFrequency);

        if (trackerNetwork.isOTAInProgress()) {
            vTaskDelay(pdMS_TO_TICKS(100));
            continue;
        }

        currentBatch.header.role = static_cast<uint8_t>(config.getRole());

        imuBus.update();

        float qw, qx, qy, qz;
        imuBus.getQuaternion(qw, qx, qy, qz);

        uint32_t syncedTimeMs = clockSync.getSyncedServerTimeMs();
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
            if (frameQueue != nullptr) {
                if (xQueueSend(frameQueue, &currentBatch, 0) != pdTRUE) {
                    disconnectBuffer.push(currentBatch);
                }
            }
        }
    }
}

static void networkTask(void* pvParameters) {
    if (trackerNetwork.connectWiFi()) {
        trackerNetwork.discoverServer();
        trackerNetwork.announceDevice();
        trackerNetwork.connectWebSocket();
    }

    Batch2QuatFrame frame;

    while (true) {
        trackerNetwork.process();

        if (frameQueue != nullptr) {
            while (xQueueReceive(frameQueue, &frame, 0) == pdTRUE) {
                trackerNetwork.sendFrame(frame);
            }
        }

        vTaskDelay(pdMS_TO_TICKS(2));
    }
}

void HalScheduler::begin() {
    frameQueue = xQueueCreate(16, sizeof(Batch2QuatFrame));

    xTaskCreatePinnedToCore(sensorTask, "SensorTask", 4096, nullptr, 2, nullptr, 0);
    xTaskCreatePinnedToCore(networkTask, "NetworkTask", 8192, nullptr, 1, nullptr, 1);
}

void HalScheduler::loop() {
    serialCLI.process();
    halLED.update(trackerNetwork.isWiFiConnected());
    delay(10);
}

#elif defined(ESP8266)

static uint32_t lastSampleUs = 0;
static uint16_t seqCounter = 0;
static Batch2QuatFrame currentBatch;
static uint8_t batchIdx = 0;

void HalScheduler::begin() {
    currentBatch.header.version = PROTOCOL_VERSION;
    currentBatch.header.role = static_cast<uint8_t>(config.getRole());
    currentBatch.header.flags = 0;
    currentBatch.header.count = 2;

    lastSampleUs = micros();

    if (trackerNetwork.connectWiFi()) {
        trackerNetwork.discoverServer();
        trackerNetwork.announceDevice();
        trackerNetwork.connectWebSocket();
    }
}

void HalScheduler::loop() {
    yield();

    // 48 Hz sensor sampling: 20,833 us interval
    uint32_t nowUs = micros();
    if (nowUs - lastSampleUs >= 20833) {
        lastSampleUs += 20833;

        if (!trackerNetwork.isOTAInProgress()) {
            currentBatch.header.role = static_cast<uint8_t>(config.getRole());

            imuBus.update();

            float qw, qx, qy, qz;
            imuBus.getQuaternion(qw, qx, qy, qz);

            uint32_t syncedTimeMs = clockSync.getSyncedServerTimeMs();
            seqCounter = (seqCounter + 1) & 0xFFFF;

            SampleQuat& s = currentBatch.samples[batchIdx];
            s.seq = seqCounter;
            s.t_ms = syncedTimeMs;
            s.quat_w = qw;
            s.quat_x = qx;
            s.quat_y = qy;
            s.quat_z = qz;

            batchIdx++;
            if (batchIdx >= 2) {
                batchIdx = 0;
                trackerNetwork.sendFrame(currentBatch);
            }
        }
    }

    trackerNetwork.process();
    serialCLI.process();
    halLED.update(trackerNetwork.isWiFiConnected());
}

#endif
