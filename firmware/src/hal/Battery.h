#pragma once

#include <Arduino.h>
#include "../boards/board.h"

class HalBattery {
public:
    void begin();
    void read(uint8_t& percentage, uint16_t& millivolts);
};

extern HalBattery halBattery;
