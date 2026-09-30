#pragma once

#include <Arduino.h>
#include "Hardware.h"

class BatteryMonitor {
public:
    void begin() {
        pinMode(BATTERY_ADC_PIN, INPUT);
    }

    void read(uint8_t& percentage, uint16_t& millivolts) {
        uint32_t totalMv = 0;
        const int samples = 16;
        for (int i = 0; i < samples; i++) {
            totalMv += analogReadMilliVolts(BATTERY_ADC_PIN);
            delayMicroseconds(50);
        }
        // Xiao ESP32-C6 has 1:2 voltage divider
        uint32_t battMv = (totalMv * 2) / samples;
        millivolts = static_cast<uint16_t>(battMv);

        // LiPo: 3000 mV (0%) to 4200 mV (100%)
        if (battMv >= 4200) {
            percentage = 100;
        } else if (battMv <= 3000) {
            percentage = 0;
        } else {
            percentage = static_cast<uint8_t>(((battMv - 3000) * 100) / (4200 - 3000));
        }
    }
};

extern BatteryMonitor batteryMonitor;
