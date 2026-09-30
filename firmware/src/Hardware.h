#pragma once

#include <Arduino.h>

// Board: Seeed Studio XIAO ESP32-C6
#define LED_PIN          15  // Onboard User LED
#define I2C_SDA_PIN      20  // D9 on XIAO ESP32-C6
#define I2C_SCL_PIN      19  // D8 on XIAO ESP32-C6
#define I2C_ADR_PIN      18  // D10 on XIAO ESP32-C6 (pull HIGH for 0x4B)
#define BNO085_I2C_ADDR  0x4B

#define BATTERY_ADC_PIN  0   // A0 on XIAO ESP32-C6 (GPIO0)
