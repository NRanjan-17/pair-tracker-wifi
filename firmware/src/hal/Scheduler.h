#pragma once

#include <Arduino.h>

class HalScheduler {
public:
    void begin();
    void loop();
};

extern HalScheduler halScheduler;
