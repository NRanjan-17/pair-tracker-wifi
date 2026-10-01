#include "CommandParser.h"

bool CommandParser::parse(const char* jsonStr, size_t length, ParsedCommand& cmd) {
    JsonDocument doc;
    DeserializationError err = deserializeJson(doc, jsonStr, length);
    if (err) return false;

    cmd.type = CommandType::UNKNOWN;
    const char* typeStr = doc["type"] | "";

    if (strcmp(typeStr, "time_sync") == 0) {
        cmd.type = CommandType::TIME_SYNC;
        cmd.t0 = doc["t0"] | 0ULL;
        return true;
    } else if (strcmp(typeStr, "time_sync_ack") == 0) {
        cmd.type = CommandType::TIME_SYNC_ACK;
        cmd.offset_ms = doc["offset_ms"] | 0LL;
        cmd.rtt_ms = doc["rtt_ms"] | 0U;
        return true;
    } else if (strcmp(typeStr, "start") == 0) {
        cmd.type = CommandType::START_RECORDING;
        return true;
    } else if (strcmp(typeStr, "stop") == 0) {
        cmd.type = CommandType::STOP_RECORDING;
        return true;
    } else if (strcmp(typeStr, "identify") == 0) {
        cmd.type = CommandType::IDENTIFY;
        cmd.duration_ms = doc["duration_ms"] | 3000;
        return true;
    } else if (strcmp(typeStr, "calibrate") == 0) {
        cmd.type = CommandType::CALIBRATE;
        return true;
    } else if (strcmp(typeStr, "ota") == 0) {
        cmd.type = CommandType::OTA;
        cmd.otaUrl = doc["url"].as<String>();
        cmd.otaSha256 = doc["sha256"].as<String>();
        cmd.otaSize = doc["size"] | 0;
        cmd.otaVersion = doc["version"].as<String>();
        return true;
    } else if (strcmp(typeStr, "set_role") == 0) {
        cmd.type = CommandType::SET_ROLE;
        cmd.role = doc["role"].as<String>();
        return true;
    } else if (strcmp(typeStr, "reboot") == 0) {
        cmd.type = CommandType::REBOOT;
        return true;
    }

    return false;
}
