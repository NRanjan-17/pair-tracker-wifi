#pragma once

#include <Arduino.h>

enum class TrackerRole : uint8_t {
    UNASSIGNED      = 0,
    CHEST           = 1,
    LEFT_SHOULDER   = 2,
    RIGHT_SHOULDER  = 3,
    LEFT_UPPER_ARM  = 4,
    RIGHT_UPPER_ARM = 5,
    LEFT_ELBOW      = 6,
    RIGHT_ELBOW     = 7,
    LEFT_FOREARM    = 8,
    RIGHT_FOREARM   = 9,
    LEFT_HAND       = 10,
    RIGHT_HAND      = 11,
    LEFT_THIGH      = 12,
    RIGHT_THIGH     = 13,
    LEFT_SHIN       = 14,
    RIGHT_SHIN      = 15,
    LEFT_FOOT       = 16,
    RIGHT_FOOT      = 17
};

inline const char* roleToString(TrackerRole role) {
    switch (role) {
        case TrackerRole::CHEST:           return "chest";
        case TrackerRole::LEFT_SHOULDER:   return "left_shoulder";
        case TrackerRole::RIGHT_SHOULDER:  return "right_shoulder";
        case TrackerRole::LEFT_UPPER_ARM:  return "left_upper_arm";
        case TrackerRole::RIGHT_UPPER_ARM: return "right_upper_arm";
        case TrackerRole::LEFT_ELBOW:      return "left_elbow";
        case TrackerRole::RIGHT_ELBOW:     return "right_elbow";
        case TrackerRole::LEFT_FOREARM:    return "left_forearm";
        case TrackerRole::RIGHT_FOREARM:   return "right_forearm";
        case TrackerRole::LEFT_HAND:       return "left_hand";
        case TrackerRole::RIGHT_HAND:      return "right_hand";
        case TrackerRole::LEFT_THIGH:      return "left_thigh";
        case TrackerRole::RIGHT_THIGH:     return "right_thigh";
        case TrackerRole::LEFT_SHIN:       return "left_shin";
        case TrackerRole::RIGHT_SHIN:      return "right_shin";
        case TrackerRole::LEFT_FOOT:       return "left_foot";
        case TrackerRole::RIGHT_FOOT:      return "right_foot";
        default:                           return "unassigned";
    }
}

inline TrackerRole stringToRole(const String& str) {
    String s = str;
    s.trim();
    s.toLowerCase();
    if (s == "chest") return TrackerRole::CHEST;
    if (s == "left_shoulder") return TrackerRole::LEFT_SHOULDER;
    if (s == "right_shoulder") return TrackerRole::RIGHT_SHOULDER;
    if (s == "left_upper_arm") return TrackerRole::LEFT_UPPER_ARM;
    if (s == "right_upper_arm") return TrackerRole::RIGHT_UPPER_ARM;
    if (s == "left_elbow") return TrackerRole::LEFT_ELBOW;
    if (s == "right_elbow") return TrackerRole::RIGHT_ELBOW;
    if (s == "left_forearm") return TrackerRole::LEFT_FOREARM;
    if (s == "right_forearm") return TrackerRole::RIGHT_FOREARM;
    if (s == "left_hand") return TrackerRole::LEFT_HAND;
    if (s == "right_hand") return TrackerRole::RIGHT_HAND;
    if (s == "left_thigh") return TrackerRole::LEFT_THIGH;
    if (s == "right_thigh") return TrackerRole::RIGHT_THIGH;
    if (s == "left_shin") return TrackerRole::LEFT_SHIN;
    if (s == "right_shin") return TrackerRole::RIGHT_SHIN;
    if (s == "left_foot") return TrackerRole::LEFT_FOOT;
    if (s == "right_foot") return TrackerRole::RIGHT_FOOT;
    return TrackerRole::UNASSIGNED;
}
