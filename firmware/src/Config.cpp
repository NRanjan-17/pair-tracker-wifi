#include "Config.h"

#define PREFS_NAMESPACE "pair_cfg"
#define PREFS_NAMESPACE_LEGACY "eidon_cfg"

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

    // If pair_cfg has no SSID, check legacy eidon_cfg for automatic migration
    if (ssid.length() == 0) {
        Preferences legacyPrefs;
        if (legacyPrefs.begin(PREFS_NAMESPACE_LEGACY, true)) {
            String legacySsid = legacyPrefs.getString("ssid", "");
            if (legacySsid.length() > 0) {
                ssid = legacySsid;
                password = legacyPrefs.getString("pass", "");
                serverHost = legacyPrefs.getString("server", "pair.local");
                serverPort = legacyPrefs.getUShort("port", 8000);
                deviceToken = legacyPrefs.getString("token", "");
                role = static_cast<TrackerRole>(legacyPrefs.getUChar("role", 0));

                // Save into pair_cfg
                prefs.putString("ssid", ssid);
                prefs.putString("pass", password);
                prefs.putString("server", serverHost);
                prefs.putUShort("port", serverPort);
                prefs.putString("token", deviceToken);
                prefs.putUChar("role", static_cast<uint8_t>(role));
            }
            legacyPrefs.end();
        }
    }
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
