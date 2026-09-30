#pragma once

#include <Arduino.h>

class HalStorage {
public:
    virtual ~HalStorage() {}
    virtual bool begin() = 0;
    virtual String getString(const char* key, const String& defaultVal = "") = 0;
    virtual bool putString(const char* key, const String& val) = 0;
    virtual uint16_t getUShort(const char* key, uint16_t defaultVal = 0) = 0;
    virtual bool putUShort(const char* key, uint16_t val) = 0;
    virtual uint8_t getUChar(const char* key, uint8_t defaultVal = 0) = 0;
    virtual bool putUChar(const char* key, uint8_t val) = 0;
    virtual void commit() = 0;
};

extern HalStorage& halStorage;
