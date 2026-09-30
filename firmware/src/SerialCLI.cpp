#include "SerialCLI.h"
#include "Config.h"
#include "Roles.h"

SerialCLI serialCLI;

void SerialCLI::begin() {
    inputBuffer.reserve(128);
}

void SerialCLI::process() {
    while (Serial.available()) {
        char c = static_cast<char>(Serial.read());
        if (c == '\r') continue;
        if (c == '\n') {
            if (inputBuffer.length() > 0) {
                executeCommand(inputBuffer);
                inputBuffer = "";
            }
        } else {
            if (inputBuffer.length() < 127) {
                inputBuffer += c;
            }
        }
    }
}

void SerialCLI::executeCommand(const String& cmdLine) {
    String line = cmdLine;
    line.trim();
    if (line.length() == 0) return;

    if (line.equalsIgnoreCase("show")) {
        config.printSettings();
        return;
    }

    if (line.equalsIgnoreCase("reboot")) {
        Serial.println("Rebooting device...");
        delay(200);
        ESP.restart();
        return;
    }

    if (line.startsWith("set ")) {
        String rest = line.substring(4);
        rest.trim();
        int spaceIdx = rest.indexOf(' ');
        if (spaceIdx == -1) {
            Serial.println("Error: Format is 'set <key> <value>'");
            return;
        }

        String key = rest.substring(0, spaceIdx);
        String val = rest.substring(spaceIdx + 1);
        key.trim();
        val.trim();

        if (key.equalsIgnoreCase("ssid")) {
            config.setSSID(val);
            Serial.printf("OK: ssid set to '%s'\n", val.c_str());
        } else if (key.equalsIgnoreCase("pass")) {
            config.setPassword(val);
            Serial.println("OK: pass set");
        } else if (key.equalsIgnoreCase("server")) {
            config.setServerHost(val);
            Serial.printf("OK: server set to '%s'\n", val.c_str());
        } else if (key.equalsIgnoreCase("port")) {
            uint16_t p = static_cast<uint16_t>(val.toInt());
            config.setServerPort(p);
            Serial.printf("OK: port set to %u\n", p);
        } else if (key.equalsIgnoreCase("token")) {
            config.setDeviceToken(val);
            Serial.println("OK: token set");
        } else if (key.equalsIgnoreCase("role")) {
            TrackerRole r = stringToRole(val);
            if (r == TrackerRole::UNASSIGNED && !val.equalsIgnoreCase("unassigned")) {
                Serial.printf("Error: unknown role '%s'\n", val.c_str());
            } else {
                config.setRole(r);
                Serial.printf("OK: role set to '%s' (%u)\n", roleToString(r), static_cast<uint8_t>(r));
            }
        } else {
            Serial.printf("Error: unknown setting key '%s'\n", key.c_str());
        }
        return;
    }

    Serial.printf("Unknown command: '%s'. Available: set <key> <val>, show, reboot\n", line.c_str());
}
