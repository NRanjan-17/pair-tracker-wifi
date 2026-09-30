#include "Config.h"

#define PREFS_NAMESPACE "eidon_cfg"

TrackerConfig config;

TrackerConfig::TrackerConfig() 
    : serverPort(8000), role(TrackerRole::UNASSIGNED) {}

bool TrackerConfig::begin() {
    prefs.begin(PREFS_NAMESPACE, false);
    ssid = prefs.getString("ssid", "");
    password = prefs.getString("pass", "");
    serverHost = prefs.getString("server", "pair.local");
    serverPort = prefs.getUShort("port", 8000);
    deviceToken = prefs.getString("token", "");
    role = static_cast<TrackerRole>(prefs.getUChar("role", 0));
    return true;
}

String TrackerConfig::getSSID() const { return ssid; }
String TrackerConfig::getPassword() const { return password; }
String TrackerConfig::getServerHost() const { return serverHost; }
uint16_t TrackerConfig::getServerPort() const { return serverPort; }
String TrackerConfig::getDeviceToken() const { return deviceToken; }
TrackerRole TrackerConfig::getRole() const { return role; }

bool TrackerConfig::isConfigured() const {
    return ssid.length() > 0 && role != TrackerRole::UNASSIGNED;
}

void TrackerConfig::setSSID(const String& val) {
    ssid = val;
    prefs.putString("ssid", val);
}

void TrackerConfig::setPassword(const String& val) {
    password = val;
    prefs.putString("pass", val);
}

void TrackerConfig::setServerHost(const String& val) {
    serverHost = val;
    prefs.putString("server", val);
}

void TrackerConfig::setServerPort(uint16_t val) {
    serverPort = val;
    prefs.putUShort("port", val);
}

void TrackerConfig::setDeviceToken(const String& val) {
    deviceToken = val;
    prefs.putString("token", val);
}

void TrackerConfig::setRole(TrackerRole val) {
    role = val;
    prefs.putUChar("role", static_cast<uint8_t>(val));
}

void TrackerConfig::printSettings() const {
    Serial.println("--- Current Pair Tracker Settings ---");
    Serial.printf("SSID:        %s\n", ssid.c_str());
    Serial.printf("Password:    %s\n", password.length() > 0 ? "********" : "(empty)");
    Serial.printf("Server Host: %s\n", serverHost.c_str());
    Serial.printf("Server Port: %u\n", serverPort);
    Serial.printf("Token:       %s\n", deviceToken.length() > 0 ? "********" : "(empty)");
    Serial.printf("Role:        %s (ID=%u)\n", roleToString(role), static_cast<uint8_t>(role));
    Serial.println("-------------------------------------");
}
