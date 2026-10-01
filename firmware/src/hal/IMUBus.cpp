#include "IMUBus.h"
#include <Wire.h>

#if IMU_BUS == IMU_BUS_SPI
#include <SPI.h>
#endif

HalIMUBus imuBus;

HalIMUBus::HalIMUBus()
    : available(false),
      current_qw(1.0f), current_qx(0.0f), current_qy(0.0f), current_qz(0.0f) {
    memset(&current_raw, 0, sizeof(current_raw));
}

bool HalIMUBus::begin() {
#if IMU_BUS == IMU_BUS_SPI
    Serial.println("IMU: Initializing BNO085 via SPI...");
    SPI.begin();

    pinMode(SPI_INT_PIN, INPUT_PULLUP);
    pinMode(SPI_CS_PIN, OUTPUT);
    digitalWrite(SPI_CS_PIN, HIGH);

    if (!bno08x.begin_SPI(SPI_CS_PIN, SPI_INT_PIN, &SPI)) {
        Serial.println("IMU: Failed to find BNO085 over SPI! Verify PS1 solder bridge is tied to 3.3V.");
        available = false;
        return false;
    }
    Serial.println("IMU: BNO085 found successfully via SPI!");

#else // IMU_BUS == IMU_BUS_I2C
    Serial.printf("IMU: Initializing BNO085 via I2C (SDA=%d, SCL=%d, speed=%d)...\n",
                  I2C_SDA_PIN, I2C_SCL_PIN, I2C_CLOCK_SPEED);

#if defined(I2C_ADR_PIN) && (I2C_ADR_PIN >= 0)
    pinMode(I2C_ADR_PIN, OUTPUT);
    digitalWrite(I2C_ADR_PIN, HIGH);
    delay(10);
#endif

#if defined(ESP32)
    Wire.begin(I2C_SDA_PIN, I2C_SCL_PIN, I2C_CLOCK_SPEED);
#elif defined(ESP8266)
    Wire.begin(I2C_SDA_PIN, I2C_SCL_PIN);
    Wire.setClock(I2C_CLOCK_SPEED);
    Wire.setClockStretchLimit(I2C_CLOCK_STRETCH_LIMIT);
#endif
    delay(50);

    // First attempt at primary address (0x4B)
    uint8_t targetAddr = BNO085_I2C_ADDR;
    if (!bno08x.begin_I2C(targetAddr, &Wire)) {
#if defined(BNO085_I2C_ADDR_ALT)
        Serial.printf("IMU: 0x%02X not responding, trying fallback 0x%02X...\n", targetAddr, BNO085_I2C_ADDR_ALT);
        targetAddr = BNO085_I2C_ADDR_ALT;
        if (!bno08x.begin_I2C(targetAddr, &Wire)) {
            Serial.printf("IMU: Failed to find BNO085 chip at 0x%02X or 0x%02X!\n", BNO085_I2C_ADDR, BNO085_I2C_ADDR_ALT);
            available = false;
            return false;
        }
#else
        Serial.printf("IMU: Failed to find BNO085 chip at 0x%02X\n", targetAddr);
        available = false;
        return false;
#endif
    }
    Serial.printf("IMU: BNO085 found successfully at I2C address 0x%02X\n", targetAddr);
#endif

    enableReports();
    available = true;
    return true;
}

void HalIMUBus::enableReports() {
    // Game Rotation Vector at 48 Hz (~20833 us interval)
    if (!bno08x.enableReport(SH2_GAME_ROTATION_VECTOR, 20833)) {
        Serial.println("IMU: Warning - could not enable Game Rotation Vector at 20833 us");
    }

    // Accelerometer at 40 ms (40000 us)
    if (!bno08x.enableReport(SH2_ACCELEROMETER, 40000)) {
        Serial.println("IMU: Warning - could not enable Accelerometer");
    }

    // Calibrated Gyroscope at 40 ms (40000 us)
    if (!bno08x.enableReport(SH2_GYROSCOPE_CALIBRATED, 40000)) {
        Serial.println("IMU: Warning - could not enable Calibrated Gyroscope");
    }

    // Calibrated Magnetometer at 40 ms (40000 us)
    if (!bno08x.enableReport(SH2_MAGNETIC_FIELD_CALIBRATED, 40000)) {
        Serial.println("IMU: Warning - could not enable Calibrated Magnetometer");
    }
}

bool HalIMUBus::update() {
    if (!available) return false;

    if (bno08x.wasReset()) {
        Serial.println("IMU: Sensor reset detected, re-enabling reports");
        enableReports();
    }

    bool hasNewQuat = false;
    while (bno08x.getSensorEvent(&sensorValue)) {
        switch (sensorValue.sensorId) {
            case SH2_GAME_ROTATION_VECTOR: {
                float raw_w = sensorValue.un.gameRotationVector.real;
                float raw_x = sensorValue.un.gameRotationVector.i;
                float raw_y = sensorValue.un.gameRotationVector.j;
                float raw_z = sensorValue.un.gameRotationVector.k;

#if PAIR_MOUNT_CORRECTION
                // 180 deg rotation around Z-axis: (w, -x, -y, z)
                current_qw = raw_w;
                current_qx = -raw_x;
                current_qy = -raw_y;
                current_qz = raw_z;
#else
                current_qw = raw_w;
                current_qx = raw_x;
                current_qy = raw_y;
                current_qz = raw_z;
#endif
                hasNewQuat = true;
                break;
            }

            case SH2_ACCELEROMETER:
                current_raw.accel_x = sensorValue.un.accelerometer.x;
                current_raw.accel_y = sensorValue.un.accelerometer.y;
                current_raw.accel_z = sensorValue.un.accelerometer.z;
                break;

            case SH2_GYROSCOPE_CALIBRATED:
                current_raw.gyro_x = sensorValue.un.gyroscope.x;
                current_raw.gyro_y = sensorValue.un.gyroscope.y;
                current_raw.gyro_z = sensorValue.un.gyroscope.z;
                break;

            case SH2_MAGNETIC_FIELD_CALIBRATED:
                current_raw.mag_x = sensorValue.un.magneticField.x;
                current_raw.mag_y = sensorValue.un.magneticField.y;
                current_raw.mag_z = sensorValue.un.magneticField.z;
                break;

            default:
                break;
        }
    }
    return hasNewQuat;
}

bool HalIMUBus::isAvailable() const {
    return available;
}

void HalIMUBus::reset() {
    if (!available) return;
    bno08x.enableReport(SH2_GAME_ROTATION_VECTOR, 0);
    bno08x.enableReport(SH2_ACCELEROMETER, 0);
    bno08x.enableReport(SH2_GYROSCOPE_CALIBRATED, 0);
    bno08x.enableReport(SH2_MAGNETIC_FIELD_CALIBRATED, 0);
    delay(50);
    enableReports();
}

void HalIMUBus::getQuaternion(float& w, float& x, float& y, float& z) const {
    w = current_qw;
    x = current_qx;
    y = current_qy;
    z = current_qz;
}

void HalIMUBus::getRawData(SampleRaw& raw) const {
    raw = current_raw;
}
