#pragma once

#include <Arduino.h>
#include <Adafruit_BNO08x.h>
#include "../boards/board.h"
#include "../core/Protocol.h"

#ifndef PAIR_MOUNT_CORRECTION
#if defined(EIDON_MOUNT_CORRECTION)
#define PAIR_MOUNT_CORRECTION EIDON_MOUNT_CORRECTION
#else
#define PAIR_MOUNT_CORRECTION 1
#endif
#endif

class HalIMUBus {
public:
    HalIMUBus();
    bool begin();
    bool update();
    bool isAvailable() const;
    void reset();

    void getQuaternion(float& w, float& x, float& y, float& z) const;
    void getRawData(SampleRaw& raw) const;

private:
    void enableReports();

    Adafruit_BNO08x bno08x;
    sh2_SensorValue_t sensorValue;
    bool available;

    float current_qw;
    float current_qx;
    float current_qy;
    float current_qz;

    SampleRaw current_raw;
};

extern HalIMUBus imuBus;
