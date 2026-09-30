#pragma once

#include <Arduino.h>
#include <functional>

typedef std::function<void(const char* status, int pct, const char* error)> OTAProgressCallback;

class HalOTA {
public:
    virtual ~HalOTA() {}
    virtual bool performUpdate(const String& fullUrl, const String& token, const String& expectedSha256, size_t expectedSize, OTAProgressCallback onProgress) = 0;
    virtual void validateApp() = 0;
};

extern HalOTA& halOTA;
