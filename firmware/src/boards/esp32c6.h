#pragma once

#include <Arduino.h>

#define BOARD_HW_NAME            "esp32c6"
#define DEFAULT_SERIAL_BAUD      115200

// LED
#define LED_PIN                  15  // Onboard User LED
#define LED_ACTIVE_LEVEL         HIGH

// I2C Bus Pins
#define I2C_SDA_PIN              20  // D9 on XIAO ESP32-C6
#define I2C_SCL_PIN              19  // D8 on XIAO ESP32-C6
#define I2C_ADR_PIN              18  // D10 on XIAO ESP32-C6 (pull HIGH for 0x4B)
#define I2C_RST_PIN              -1
#define BNO085_I2C_ADDR          0x4B
#define I2C_CLOCK_SPEED          400000

// Battery Monitoring
#define BATTERY_ADC_PIN          0   // A0 on XIAO ESP32-C6 (GPIO0)
#define BATTERY_DIVIDER_RATIO    2.0f

// Ring Buffer & Memory
#define RING_BUFFER_CAPACITY     120  // 5 seconds @ 24 frames/s
#define MIN_SAFE_HEAP            40000
