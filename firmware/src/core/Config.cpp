#include "Config.h"

TrackerConfig config;

TrackerConfig::TrackerConfig()
    : serverPort(8000), role(TrackerRole::UNASSIGNED) {}

bool TrackerConfig::begin() {
    halStorage.begin();
    ssid = halStorage.getString("ssid", "");
    password = halStorage.getString("pass", "");
    serverHost = halStorage.getString("server", "pair.local");
    serverPort = halStorage.getUShort("port", 8000);
    deviceToken = halStorage.getString("token", "");
    role = static_cast<TrackerRole>(halStorage.getUChar("role", 0));
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
    halStorage.putString("ssid", val);
}

void TrackerConfig::setPassword(const String& val) {
    password = val;
    halStorage.putString("pass", val);
}

void TrackerConfig::setServerHost(const String& val) {
    serverHost = val;
    halStorage.putString("server", val);
}

void TrackerConfig::setServerPort(uint16_t val) {
    serverPort = val;
    halStorage.putUShort("port", val);
}

void TrackerConfig::setDeviceToken(const String& val) {
    deviceToken = val;
    halStorage.putString("token", val);
}

void TrackerConfig::setRole(TrackerRole val) {
    role = val;
    halStorage.putUChar("role", static_cast<uint8_t>(val));
}

void TrackerConfig::printSettings() const {
    Serial.println("\n--- Tracker Configuration ---");
    Serial.printf("SSID:        %s\n", ssid.c_str());
    Serial.printf("Password:    %s\n", password.length() > 0 ? "********" : "[NOT SET]");
    Serial.printf("Server Host: %s\n", serverHost.c_str());
    Serial.printf("Server Port: %u\n", serverPort);
    Serial.printf("Device Token: %s\n", deviceToken.length() > 0 ? deviceToken.c_str() : "[NONE]");
    Serial.printf("Role:        %s (%u)\n", roleToString(role), static_cast<uint8_t>(role));
    Serial.printf("Configured:  %s\n", isConfigured() ? "YES" : "NO (Run Serial Provisioning)");
    Serial.println("-------------------------------\n");
}
