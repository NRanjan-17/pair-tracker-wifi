#pragma once

#include <Arduino.h>

#define PROTOCOL_VERSION 1
#define FLAG_RAW_PRESENT 0x01
#define FLAG_BACKFILL    0x02

#pragma pack(push, 1)

struct FrameHeader {
    uint8_t version;  // 1
    uint8_t role;     // 1..17
    uint8_t flags;    // bit0: raw present, bit1: backfill
    uint8_t count;    // batch count (typically 2)
};

struct SampleQuat {
    uint16_t seq;
    uint32_t t_ms;
    float quat_w;
    float quat_x;
    float quat_y;
    float quat_z;
};

struct SampleRaw {
    float accel_x;
    float accel_y;
    float accel_z;
    float gyro_x;
    float gyro_y;
    float gyro_z;
    float mag_x;
    float mag_y;
    float mag_z;
};

struct FullSample {
    SampleQuat quat;
    SampleRaw raw;
};

// Batch 2 quat-only frame (4 + 2 * 22 = 48 bytes)
struct Batch2QuatFrame {
    FrameHeader header;
    SampleQuat samples[2];
};

// Batch 2 full frame (4 + 2 * 58 = 120 bytes)
struct Batch2FullFrame {
    FrameHeader header;
    FullSample samples[2];
};

#pragma pack(pop)
