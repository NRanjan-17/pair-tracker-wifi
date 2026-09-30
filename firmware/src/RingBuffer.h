#pragma once

#include <Arduino.h>
#include <freertos/FreeRTOS.h>
#include <freertos/semphr.h>
#include "Protocol.h"

template <typename T, size_t CAPACITY = 120>
class ThreadSafeRingBuffer {
public:
    ThreadSafeRingBuffer() : head(0), tail(0), currentSize(0) {
        mutex = xSemaphoreCreateMutex();
    }

    ~ThreadSafeRingBuffer() {
        if (mutex) {
            vSemaphoreDelete(mutex);
        }
    }

    bool push(const T& item) {
        if (!mutex) return false;
        if (xSemaphoreTake(mutex, pdMS_TO_TICKS(10)) != pdTRUE) {
            return false;
        }

        if (currentSize == CAPACITY) {
            // Overwrite oldest item
            tail = (tail + 1) % CAPACITY;
            currentSize--;
        }

        buffer[head] = item;
        head = (head + 1) % CAPACITY;
        currentSize++;

        xSemaphoreGive(mutex);
        return true;
    }

    bool pop(T& item) {
        if (!mutex) return false;
        if (xSemaphoreTake(mutex, pdMS_TO_TICKS(10)) != pdTRUE) {
            return false;
        }

        if (currentSize == 0) {
            xSemaphoreGive(mutex);
            return false;
        }

        item = buffer[tail];
        tail = (tail + 1) % CAPACITY;
        currentSize--;

        xSemaphoreGive(mutex);
        return true;
    }

    size_t size() {
        size_t s = 0;
        if (mutex && xSemaphoreTake(mutex, pdMS_TO_TICKS(10)) == pdTRUE) {
            s = currentSize;
            xSemaphoreGive(mutex);
        }
        return s;
    }

    bool isEmpty() {
        return size() == 0;
    }

private:
    T buffer[CAPACITY];
    size_t head;
    size_t tail;
    size_t currentSize;
    SemaphoreHandle_t mutex;
};

// 120 batches of 2 = 240 samples (~5 seconds of buffer at 48 Hz)
extern ThreadSafeRingBuffer<Batch2QuatFrame, 120> disconnectBuffer;
