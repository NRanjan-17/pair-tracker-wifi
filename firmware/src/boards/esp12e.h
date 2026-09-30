#pragma once

#include <Arduino.h>

#define BOARD_HW_NAME            "esp12e"
#define DEFAULT_SERIAL_BAUD      9600

// Onboard LED: NodeMCU onboard blue LED on GPIO2 (active LOW)
#define LED_PIN                  2
#define LED_ACTIVE_LEVEL         LOW

// I2C Bus Pins
// Default: SDA=GPIO4 (NodeMCU D2), SCL=GPIO5 (NodeMCU D1)
#ifndef I2C_SDA_PIN
#define I2C_SDA_PIN              4
#endif

#ifndef I2C_SCL_PIN
#define I2C_SCL_PIN              5
#endif

#define I2C_ADR_PIN              -1
#define I2C_RST_PIN              -1
#define BNO085_I2C_ADDR          0x4B
#define BNO085_I2C_ADDR_ALT      0x4A
#define I2C_CLOCK_SPEED          100000
#define I2C_CLOCK_STRETCH_LIMIT  230000

// SPI Bus Pins (used when IMU_BUS == IMU_BUS_SPI)
// BNO085 requires PS1 solder bridge pulled to 3.3V for SPI mode (PS0=0, PS1=1)
#define SPI_SCK_PIN              14  // NodeMCU D5 (HSPI_CLK)
#define SPI_MISO_PIN             12  // NodeMCU D6 (HSPI_MISO)
#define SPI_MOSI_PIN             13  // NodeMCU D7 (HSPI_MOSI)
#define SPI_CS_PIN               15  // NodeMCU D8 (HSPI_CS - Note: must be LOW at boot)
#define SPI_INT_PIN              5   // NodeMCU D1 (H_INTN)
#define SPI_RST_PIN              -1  // Tied to 3.3V or unmanaged
#define SPI_WAK_PIN              -1

// Battery Monitoring
// ESP8266 has single analog input A0 (0-1.0V internal; NodeMCU has onboard 220k/100k divider scaling up to 3.2V)
#define BATTERY_ADC_PIN          A0
#define BATTERY_DIVIDER_RATIO    3.2f

// Ring Buffer & Memory Safety
// ESP8266 has ~45KB free heap. Ring buffer holds 60 frames (~2.5s backfill, ~2.9KB RAM).
#define RING_BUFFER_CAPACITY     60
#define MIN_SAFE_HEAP            12000  // Drop oldest frame if free heap < 12 KB
