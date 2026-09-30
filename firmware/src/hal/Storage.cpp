#include "Storage.h"

#if defined(ESP32)

#include <Preferences.h>

#define PREFS_NAMESPACE "pair_cfg"
#define PREFS_NAMESPACE_LEGACY "eidon_cfg"

class Esp32Storage : public HalStorage {
public:
    Esp32Storage() {}

    bool begin() override {
        prefs.begin(PREFS_NAMESPACE, false);

        // Check if pair_cfg has ssid; if empty, migrate from eidon_cfg
        String ssid = prefs.getString("ssid", "");
        if (ssid.length() == 0) {
            Preferences legacyPrefs;
            if (legacyPrefs.begin(PREFS_NAMESPACE_LEGACY, true)) {
                String legSsid = legacyPrefs.getString("ssid", "");
                if (legSsid.length() > 0) {
                    prefs.putString("ssid", legSsid);
                    prefs.putString("pass", legacyPrefs.getString("pass", ""));
                    prefs.putString("server", legacyPrefs.getString("server", "pair.local"));
                    prefs.putUShort("port", legacyPrefs.getUShort("port", 8000));
                    prefs.putString("token", legacyPrefs.getString("token", ""));
                    prefs.putUChar("role", legacyPrefs.getUChar("role", 0));
                }
                legacyPrefs.end();
            }
        }
        return true;
    }

    String getString(const char* key, const String& defaultVal = "") override {
        return prefs.getString(key, defaultVal);
    }

    bool putString(const char* key, const String& val) override {
        return prefs.putString(key, val) > 0;
    }

    uint16_t getUShort(const char* key, uint16_t defaultVal = 0) override {
        return prefs.getUShort(key, defaultVal);
    }

    bool putUShort(const char* key, uint16_t val) override {
        return prefs.putUShort(key, val) > 0;
    }

    uint8_t getUChar(const char* key, uint8_t defaultVal = 0) override {
        return prefs.getUChar(key, defaultVal);
    }

    bool putUChar(const char* key, uint8_t val) override {
        return prefs.putUChar(key, val) > 0;
    }

    void commit() override {
        // Preferences auto-commits
    }

private:
    Preferences prefs;
};

static Esp32Storage s_storageInstance;
HalStorage& halStorage = s_storageInstance;

#elif defined(ESP8266)

#include <LittleFS.h>
#include <ArduinoJson.h>

#define CONFIG_PATH "/pair_cfg.json"
#define CONFIG_PATH_LEGACY "/eidon_cfg.json"

class Esp8266Storage : public HalStorage {
public:
    Esp8266Storage() : dirty(false) {}

    bool begin() override {
        if (!LittleFS.begin()) {
            Serial.println("Storage: LittleFS mount failed, formatting...");
            LittleFS.format();
            LittleFS.begin();
        }

        // Try reading /pair_cfg.json
        if (!loadFromFile(CONFIG_PATH)) {
            // Check legacy /eidon_cfg.json
            if (loadFromFile(CONFIG_PATH_LEGACY)) {
                Serial.println("Storage: Migrated settings from legacy eidon_cfg.json to pair_cfg.json");
                saveToFile();
            }
        }
        return true;
    }

    String getString(const char* key, const String& defaultVal = "") override {
        if (!doc[key].isNull()) {
            return doc[key].as<String>();
        }
        return defaultVal;
    }

    bool putString(const char* key, const String& val) override {
        doc[key] = val;
        dirty = true;
        saveToFile();
        return true;
    }

    uint16_t getUShort(const char* key, uint16_t defaultVal = 0) override {
        if (!doc[key].isNull()) {
            return doc[key].as<uint16_t>();
        }
        return defaultVal;
    }

    bool putUShort(const char* key, uint16_t val) override {
        doc[key] = val;
        dirty = true;
        saveToFile();
        return true;
    }

    uint8_t getUChar(const char* key, uint8_t defaultVal = 0) override {
        if (!doc[key].isNull()) {
            return doc[key].as<uint8_t>();
        }
        return defaultVal;
    }

    bool putUChar(const char* key, uint8_t val) override {
        doc[key] = val;
        dirty = true;
        saveToFile();
        return true;
    }

    void commit() override {
        if (dirty) {
            saveToFile();
        }
    }

private:
    JsonDocument doc;
    bool dirty;

    bool loadFromFile(const char* path) {
        if (!LittleFS.exists(path)) return false;
        File f = LittleFS.open(path, "r");
        if (!f) return false;
        DeserializationError err = deserializeJson(doc, f);
        f.close();
        return !err;
    }

    void saveToFile() {
        File f = LittleFS.open(CONFIG_PATH, "w");
        if (f) {
            serializeJson(doc, f);
            f.close();
            dirty = false;
        }
    }
};

static Esp8266Storage s_storageInstance;
HalStorage& halStorage = s_storageInstance;

#endif
