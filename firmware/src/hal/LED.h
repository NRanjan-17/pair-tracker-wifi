#pragma once

#include <Arduino.h>
#include "../boards/board.h"

class HalLED {
public:
    HalLED();
    void begin();
    void set(bool on);
    void toggle();
    void triggerIdentify(uint32_t durationMs = 3000);
    void update(bool wifiConnected = false);
    bool isIdentifying() const;

private:
    bool state;
    bool identifying;
    uint32_t identifyUntilMs;
    uint32_t lastToggleMs;
};

extern HalLED halLED;
