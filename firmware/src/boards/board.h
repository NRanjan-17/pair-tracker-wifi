#pragma once

#if defined(TARGET_ESP12E) || defined(ESP8266)
    #include "esp12e.h"
#elif defined(TARGET_ESP32C6) || defined(ESP32)
    #include "esp32c6.h"
#else
    #error "Unknown target board! Define TARGET_ESP32C6 or TARGET_ESP12E"
#endif

// IMU Bus selection modes
#define IMU_BUS_I2C 1
#define IMU_BUS_SPI 2

#ifndef IMU_BUS
#define IMU_BUS IMU_BUS_I2C
#endif
