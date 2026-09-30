#include <Arduino.h>
#include "boards/board.h"
#include "core/Config.h"
#include "core/Network.h"
#include "core/SerialCLI.h"
#include "core/Version.h"
#include "hal/Battery.h"
#include "hal/IMUBus.h"
#include "hal/LED.h"
#include "hal/Scheduler.h"

void setup() {
    Serial.begin(DEFAULT_SERIAL_BAUD);
    delay(500);

    Serial.println("\n\n==========================================");
    Serial.printf("  Pair Tracker - %s (%s)\n", BOARD_HW_NAME, FIRMWARE_VERSION);
    Serial.println("==========================================");

    halLED.begin();
    halBattery.begin();
    config.begin();
    serialCLI.begin();

    if (!imuBus.begin()) {
        Serial.println("WARNING: IMU initialization failed! Tracker will report uncalibrated state.");
    }

    trackerNetwork.begin();
    halScheduler.begin();
}

void loop() {
    halScheduler.loop();
}
