#pragma once

#include <Arduino.h>

class ClockSync {
public:
    ClockSync() : serverTimeOffsetMs(0) {}

    void setOffset(int64_t offset) {
        serverTimeOffsetMs = offset;
    }

    int64_t getOffset() const {
        return serverTimeOffsetMs;
    }

    uint32_t getSyncedServerTimeMs() const {
        return static_cast<uint32_t>(millis() + serverTimeOffsetMs);
    }

    void reset() {
        serverTimeOffsetMs = 0;
    }

private:
    int64_t serverTimeOffsetMs;
};

extern ClockSync clockSync;
