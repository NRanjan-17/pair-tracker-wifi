#pragma once

#include <Arduino.h>
#include <ArduinoJson.h>

enum class CommandType {
    UNKNOWN,
    TIME_SYNC,
    TIME_SYNC_ACK,
    START_RECORDING,
    STOP_RECORDING,
    IDENTIFY,
    CALIBRATE,
    OTA,
    SET_ROLE,
    REBOOT
};

struct ParsedCommand {
    CommandType type;
    uint64_t t0;
    int64_t offset_ms;
    uint32_t rtt_ms;
    uint32_t duration_ms;
    String role;
    String otaUrl;
    String otaSha256;
    size_t otaSize;
    String otaVersion;
};

class CommandParser {
public:
    static bool parse(const char* jsonStr, size_t length, ParsedCommand& cmd);
};
