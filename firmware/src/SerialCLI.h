#pragma once

#include <Arduino.h>

class SerialCLI {
public:
    void begin();
    void process();

private:
    String inputBuffer;
    void executeCommand(const String& cmdLine);
};

extern SerialCLI serialCLI;
