#include "IMUManager.h"

IMUManager imuManager;

IMUManager::IMUManager()
    : available(false),
      current_qw(1.0f), current_qx(0.0f), current_qy(0.0f), current_qz(0.0f) {
    memset(&current_raw, 0, sizeof(current_raw));
}

bool IMUManager::begin() {
    // Configure address select pin to HIGH (selects 0x4B)
    pinMode(I2C_ADR_PIN, OUTPUT);
    digitalWrite(I2C_ADR_PIN, HIGH);
    delay(10);

    // Initialize I2C bus on GPIO20 (SDA), GPIO19 (SCL) at 400kHz
    Wire.begin(I2C_SDA_PIN, I2C_SCL_PIN, 400000);
    delay(50);

    // Initialize BNO085
    if (!bno08x.begin_I2C(BNO085_I2C_ADDR, &Wire)) {
        Serial.println("IMU: Failed to find BNO085 chip at address 0x4B");
        available = false;
        return false;
    }

    Serial.println("IMU: BNO085 found successfully at 0x4B");
    enableReports();
    available = true;
    return true;
}

void IMUManager::enableReports() {
    // Game Rotation Vector at ~48 Hz (~20833 us interval)
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

bool IMUManager::update() {
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

#if EIDON_MOUNT_CORRECTION
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

bool IMUManager::isAvailable() const {
    return available;
}

void IMUManager::reset() {
    if (!available) return;
    bno08x.enableReport(SH2_GAME_ROTATION_VECTOR, 0);
    bno08x.enableReport(SH2_ACCELEROMETER, 0);
    bno08x.enableReport(SH2_GYROSCOPE_CALIBRATED, 0);
    bno08x.enableReport(SH2_MAGNETIC_FIELD_CALIBRATED, 0);
    delay(50);
    enableReports();
}

void IMUManager::getQuaternion(float& w, float& x, float& y, float& z) const {
    w = current_qw;
    x = current_qx;
    y = current_qy;
    z = current_qz;
}

void IMUManager::getRawData(SampleRaw& raw) const {
    raw = current_raw;
}
