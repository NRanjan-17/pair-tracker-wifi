#include "LED.h"

HalLED halLED;

HalLED::HalLED()
    : state(false), identifying(false), identifyUntilMs(0), lastToggleMs(0) {}

void HalLED::begin() {
#ifdef LED_PIN
    pinMode(LED_PIN, OUTPUT);
    set(false);
#endif
}

void HalLED::set(bool on) {
    state = on;
#ifdef LED_PIN
    uint8_t pinVal = on ? LED_ACTIVE_LEVEL : (LED_ACTIVE_LEVEL == HIGH ? LOW : HIGH);
    digitalWrite(LED_PIN, pinVal);
#endif
}

void HalLED::toggle() {
    set(!state);
}

void HalLED::triggerIdentify(uint32_t durationMs) {
    identifying = true;
    identifyUntilMs = millis() + durationMs;
    lastToggleMs = millis();
    set(true);
}

void HalLED::update(bool wifiConnected) {
    uint32_t now = millis();

    // Priority 1: Identify strobe (10 Hz)
    if (identifying) {
        if (now > identifyUntilMs) {
            identifying = false;
            set(false);
            return;
        }
        if (now - lastToggleMs >= 50) {
            lastToggleMs = now;
            toggle();
        }
        return;
    }

    // Priority 2: Disconnected from WiFi -> rapid continuous blink (200 ms ON, 200 ms OFF)
    if (!wifiConnected) {
        if (now - lastToggleMs >= 200) {
            lastToggleMs = now;
            toggle();
        }
        return;
    }

    // Priority 3: Connected to WiFi -> pulse apart in 2 seconds (100 ms ON every 2000 ms)
    uint32_t cycleMs = now % 2000;
    if (cycleMs < 100) {
        set(true);
    } else {
        set(false);
    }
}

bool HalLED::isIdentifying() const {
    return identifying;
}
