#pragma once

#include <Arduino.h>
#include "Roles.h"
#include "../hal/Storage.h"

class TrackerConfig {
public:
    TrackerConfig();
    bool begin();

    // Getters
    String getSSID() const;
    String getPassword() const;
    String getServerHost() const;
    uint16_t getServerPort() const;
    String getDeviceToken() const;
    TrackerRole getRole() const;
    bool isConfigured() const;

    // Setters
    void setSSID(const String& val);
    void setPassword(const String& val);
    void setServerHost(const String& val);
    void setServerPort(uint16_t val);
    void setDeviceToken(const String& val);
    void setRole(TrackerRole val);

    void printSettings() const;

private:
    String ssid;
    String password;
    String serverHost;
    uint16_t serverPort;
    String deviceToken;
    TrackerRole role;
};

extern TrackerConfig config;
