#include "Battery.h"

HalBattery halBattery;

void HalBattery::begin() {
#if defined(ESP32)
    pinMode(BATTERY_ADC_PIN, INPUT);
#elif defined(ESP8266)
    pinMode(BATTERY_ADC_PIN, INPUT);
#endif
}

void HalBattery::read(uint8_t& percentage, uint16_t& millivolts) {
    uint32_t battMv = 0;

#if defined(ESP32)
    uint32_t totalMv = 0;
    const int samples = 16;
    for (int i = 0; i < samples; i++) {
        totalMv += analogReadMilliVolts(BATTERY_ADC_PIN);
        delayMicroseconds(50);
    }
    // Xiao ESP32-C6 has 1:2 voltage divider
    battMv = (totalMv * 2) / samples;

#elif defined(ESP8266)
    uint32_t totalRaw = 0;
    const int samples = 16;
    for (int i = 0; i < samples; i++) {
        totalRaw += analogRead(BATTERY_ADC_PIN);
        delayMicroseconds(50);
    }
    uint32_t avgRaw = totalRaw / samples;
    // ESP8266 ADC0 is 10-bit (0-1023) representing 0 to 1000 mV.
    // NodeMCU onboard divider (220k/100k) scales 0-1000mV internal to 0-3200mV input.
    // With external LiPo divider (BATTERY_DIVIDER_RATIO), calculate battery mV:
    battMv = static_cast<uint32_t>((avgRaw * 1000.0f * BATTERY_DIVIDER_RATIO) / 1024.0f);
#endif

    millivolts = static_cast<uint16_t>(battMv);

    // LiPo curve: 3000 mV (0%) to 4200 mV (100%)
    if (battMv >= 4200) {
        percentage = 100;
    } else if (battMv <= 3000) {
        percentage = 0;
    } else {
        percentage = static_cast<uint8_t>(((battMv - 3000) * 100) / (4200 - 3000));
    }
}
