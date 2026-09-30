#pragma once

#include <Arduino.h>
#include "Protocol.h"
#include "../boards/board.h"

#if defined(ESP32)
#include <freertos/FreeRTOS.h>
#include <freertos/semphr.h>
#endif

template <typename T, size_t CAPACITY = RING_BUFFER_CAPACITY>
class SafeRingBuffer {
public:
    SafeRingBuffer() : head(0), tail(0), currentSize(0), droppedCount(0) {
#if defined(ESP32)
        mutex = xSemaphoreCreateMutex();
#endif
    }

    ~SafeRingBuffer() {
#if defined(ESP32)
        if (mutex) {
            vSemaphoreDelete(mutex);
        }
#endif
    }

    bool push(const T& item) {
#if defined(ESP32)
        if (!mutex || xSemaphoreTake(mutex, pdMS_TO_TICKS(10)) != pdTRUE) {
            return false;
        }
#endif

        // Check if free heap is below safe threshold
        uint32_t freeH = ESP.getFreeHeap();
        if (freeH < MIN_SAFE_HEAP && currentSize > 0) {
            // Drop oldest item to preserve heap
            tail = (tail + 1) % CAPACITY;
            currentSize--;
            droppedCount += 2; // Each batch frame contains 2 samples
        }

        if (currentSize == CAPACITY) {
            // Overwrite oldest item
            tail = (tail + 1) % CAPACITY;
            currentSize--;
            droppedCount += 2;
        }

        buffer[head] = item;
        head = (head + 1) % CAPACITY;
        currentSize++;

#if defined(ESP32)
        xSemaphoreGive(mutex);
#endif
        return true;
    }

    bool pop(T& item) {
#if defined(ESP32)
        if (!mutex || xSemaphoreTake(mutex, pdMS_TO_TICKS(10)) != pdTRUE) {
            return false;
        }
#endif

        if (currentSize == 0) {
#if defined(ESP32)
            xSemaphoreGive(mutex);
#endif
            return false;
        }

        item = buffer[tail];
        tail = (tail + 1) % CAPACITY;
        currentSize--;

#if defined(ESP32)
        xSemaphoreGive(mutex);
#endif
        return true;
    }

    size_t size() {
        size_t s = 0;
#if defined(ESP32)
        if (mutex && xSemaphoreTake(mutex, pdMS_TO_TICKS(10)) == pdTRUE) {
            s = currentSize;
            xSemaphoreGive(mutex);
        }
#else
        s = currentSize;
#endif
        return s;
    }

    bool isEmpty() {
        return size() == 0;
    }

    void clear() {
#if defined(ESP32)
        if (mutex && xSemaphoreTake(mutex, pdMS_TO_TICKS(10)) == pdTRUE) {
            head = 0;
            tail = 0;
            currentSize = 0;
            xSemaphoreGive(mutex);
        }
#else
        head = 0;
        tail = 0;
        currentSize = 0;
#endif
    }

    uint32_t getDroppedCount() const {
        return droppedCount;
    }

private:
    T buffer[CAPACITY];
    size_t head;
    size_t tail;
    size_t currentSize;
    uint32_t droppedCount;

#if defined(ESP32)
    SemaphoreHandle_t mutex;
#endif
};

extern SafeRingBuffer<Batch2QuatFrame, RING_BUFFER_CAPACITY> disconnectBuffer;
