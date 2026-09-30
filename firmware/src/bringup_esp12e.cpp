#include <Arduino.h>
#include <Wire.h>
#include <Adafruit_BNO08x.h>

/**
 * ESP-12E (ESP8266) Minimal Bring-Up Sketch for BNO085 IMU
 *
 * Configured Pins:
 *   SDA: GPIO4 (NodeMCU D2)
 *   SCL: GPIO5 (NodeMCU D1)
 *   RST: GPIO12 (NodeMCU D6, optional hardware reset, -1 if unused)
 *   ADR: GPIO13 (NodeMCU D7, optional address select, -1 if unused)
 *
 * Note on Pins Avoided:
 *   GPIO0  (D3) - Boot mode pin / Flash button (must be HIGH for normal boot)
 *   GPIO2  (D4) - Boot mode pin / Onboard TX1 / Blue LED (must be HIGH for normal boot)
 *   GPIO15 (D8) - Boot mode pin (must be LOW for normal boot)
 *   GPIO16 (D0) - Deep-sleep wake pin, lacks open-drain / interrupt capabilities
 */

#ifndef BNO_SDA_PIN
#define BNO_SDA_PIN 4  // D2
#endif

#ifndef BNO_SCL_PIN
#define BNO_SCL_PIN 5  // D1
#endif

#ifndef BNO_RST_PIN
#define BNO_RST_PIN -1 // Unused / handled externally
#endif

#ifndef BNO_ADR_PIN
#define BNO_ADR_PIN -1 // Unused / handled externally
#endif

#ifndef BNO_DEFAULT_ADDR
#define BNO_DEFAULT_ADDR 0x4B
#endif

#define TARGET_SAMPLE_RATE_HZ 48.0
#define SAMPLE_INTERVAL_US    20833   // ~48 Hz (1 / 48 = 0.020833 s)
#define TEST_DURATION_MS      600000  // 10 minutes (600 seconds)

static Adafruit_BNO08x bno08x(BNO_RST_PIN);
static sh2_SensorValue_t sensorValue;

static uint8_t activeI2cAddr = BNO_DEFAULT_ADDR;
static bool imuReady = false;

static uint32_t totalSamples = 0;
static uint32_t i2cErrors = 0;
static uint32_t resetsNeeded = 0;
static uint32_t startTimeMs = 0;
static uint32_t initialFreeHeap = 0;
static uint32_t lastPrintMs = 0;
static uint32_t lastSampleTimeMs = 0;
static uint32_t samplesSinceLastPrint = 0;
static bool tenMinuteReportPrinted = false;

static float lastQw = 1.0f, lastQx = 0.0f, lastQy = 0.0f, lastQz = 0.0f;

// Scan specific SDA/SCL pin pair
uint8_t scanPinPair(int sda, int scl) {
    Wire.begin(sda, scl);
    Wire.setClock(100000);
    Wire.setClockStretchLimit(230000);
    uint8_t found = 0;
    for (uint8_t addr = 1; addr < 127; addr++) {
        Wire.beginTransmission(addr);
        if (Wire.endTransmission() == 0) {
            Serial.printf("  -> [I2C FOUND] Device at 0x%02X on SDA=GPIO%d, SCL=GPIO%d\n", addr, sda, scl);
            found = addr;
        }
        yield();
    }
    return found;
}

// Scan I2C bus and return detected address (0x4B, 0x4A, or 0 if none)
uint8_t scanI2C() {
    Serial.printf("\n[I2C] Scanning primary bus: SDA=GPIO%d, SCL=GPIO%d (100 kHz)...\n", BNO_SDA_PIN, BNO_SCL_PIN);
    uint8_t foundAddr = scanPinPair(BNO_SDA_PIN, BNO_SCL_PIN);

    if (!foundAddr) {
        Serial.println("[I2C] Nothing found on default pins. Scanning alternative GPIO pin pairs...");
        int testPairs[][2] = {
            {5, 4},   // Swapped D1/D2
            {12, 14}, // D6/D5
            {14, 12}, // D5/D6
            {13, 14}, // D7/D5
            {14, 13}, // D5/D7
            {4, 14},  // D2/D5
            {12, 13}, // D6/D7
        };
        for (auto& pair : testPairs) {
            uint8_t a = scanPinPair(pair[0], pair[1]);
            if (a) {
                foundAddr = a;
                Serial.printf("[I2C] NOTE: Detected device on SDA=GPIO%d, SCL=GPIO%d!\n", pair[0], pair[1]);
            }
        }
        // Restore configured pins
        Wire.begin(BNO_SDA_PIN, BNO_SCL_PIN);
        Wire.setClock(100000);
        Wire.setClockStretchLimit(230000);
    }

    if (!foundAddr) {
        Serial.println("[I2C] No devices detected on any tested GPIO pin pairs.");
    }
    return foundAddr;
}

bool initBNO085(uint8_t addr) {
    Serial.printf("[BNO085] Initializing at 0x%02X (SDA=GPIO%d, SCL=GPIO%d, RST=GPIO%d)...\n",
                  addr, BNO_SDA_PIN, BNO_SCL_PIN, BNO_RST_PIN);

    // Optional ADR pin setup: pull high for 0x4B, low for 0x4A
    if (BNO_ADR_PIN >= 0) {
        pinMode(BNO_ADR_PIN, OUTPUT);
        digitalWrite(BNO_ADR_PIN, (addr == 0x4B) ? HIGH : LOW);
        delay(10);
    }

    if (!bno08x.begin_I2C(addr, &Wire, BNO_RST_PIN)) {
        Serial.printf("[BNO085] Failed to initialize chip at 0x%02X!\n", addr);
        return false;
    }

    Serial.printf("[BNO085] Success! BNO085 identified at 0x%02X\n", addr);

    // Enable Game Rotation Vector at 48 Hz (~20833 us interval)
    if (!bno08x.enableReport(SH2_GAME_ROTATION_VECTOR, SAMPLE_INTERVAL_US)) {
        Serial.println("[BNO085] Warning: Failed to enable SH2_GAME_ROTATION_VECTOR");
        return false;
    }

    Serial.printf("[BNO085] SH2_GAME_ROTATION_VECTOR enabled at %u us (~48 Hz)\n", SAMPLE_INTERVAL_US);
    return true;
}

void printFinalReport() {
    uint32_t durationMs = millis() - startTimeMs;
    float durationSec = durationMs / 1000.0f;
    float avgHz = (durationSec > 0.0f) ? (totalSamples / durationSec) : 0.0f;
    uint32_t finalHeap = ESP.getFreeHeap();
    int32_t heapDelta = (int32_t)finalHeap - (int32_t)initialFreeHeap;
    float expectedSamples = durationSec * TARGET_SAMPLE_RATE_HZ;
    float sampleYieldPct = (expectedSamples > 0.0f) ? ((totalSamples * 100.0f) / expectedSamples) : 0.0f;

    Serial.println("\n========================================================");
    Serial.println("       ESP-12E (ESP8266) BNO085 10-MINUTE BRING-UP REPORT");
    Serial.println("========================================================");
    Serial.printf("  Target Environment : esp12e (NodeMCU / ESP8266EX @ 160 MHz)\n");
    Serial.printf("  IMU Interface      : I2C @ 100 kHz (SDA=GPIO%d, SCL=GPIO%d)\n", BNO_SDA_PIN, BNO_SCL_PIN);
    Serial.printf("  I2C Address        : 0x%02X\n", activeI2cAddr);
    Serial.printf("  Elapsed Duration   : %.2f s (%.1f min)\n", durationSec, durationSec / 60.0f);
    Serial.printf("  Total Samples      : %u\n", totalSamples);
    Serial.printf("  Target Frequency   : %.1f Hz\n", TARGET_SAMPLE_RATE_HZ);
    Serial.printf("  Average Frequency  : %.2f Hz (%.1f%% yield)\n", avgHz, sampleYieldPct);
    Serial.printf("  I2C Errors         : %u\n", i2cErrors);
    Serial.printf("  Resets Needed      : %u\n", resetsNeeded);
    Serial.printf("  Initial Free Heap  : %u bytes\n", initialFreeHeap);
    Serial.printf("  Final Free Heap    : %u bytes\n", finalHeap);
    Serial.printf("  Heap Drift         : %+d bytes (%s)\n", heapDelta, (heapDelta == 0) ? "Perfect" : "Stable");
    Serial.printf("  Last Quat (W,X,Y,Z): (%.4f, %.4f, %.4f, %.4f)\n", lastQw, lastQx, lastQy, lastQz);
    Serial.printf("  Result Verdict     : %s\n", (i2cErrors == 0 && resetsNeeded == 0 && sampleYieldPct >= 95.0f) ? "PASS (I2C Reliable at 100 kHz)" : "CHECK DETAILS");
    Serial.println("========================================================\n");
}

void setup() {
    Serial.begin(9600);
    delay(500);

    Serial.println("\n\n========================================================");
    Serial.println("  Pair Tracker - ESP-12E (ESP8266) BNO085 Bring-Up Test");
    Serial.println("========================================================");
    Serial.printf("CPU Frequency : %u MHz\n", ESP.getCpuFreqMHz());
    Serial.printf("Flash Size    : %u bytes (%u MB)\n", ESP.getFlashChipRealSize(), ESP.getFlashChipRealSize() / (1024 * 1024));
    Serial.printf("Initial Heap  : %u bytes\n", ESP.getFreeHeap());
    Serial.printf("Configured I2C: SDA=GPIO%d, SCL=GPIO%d, RST=GPIO%d, ADR=GPIO%d\n",
                  BNO_SDA_PIN, BNO_SCL_PIN, BNO_RST_PIN, BNO_ADR_PIN);

    initialFreeHeap = ESP.getFreeHeap();

    // Initialize I2C bus at 100 kHz
    Wire.begin(BNO_SDA_PIN, BNO_SCL_PIN);
    Wire.setClock(100000);                // 100 kHz
    Wire.setClockStretchLimit(230000);    // 230 us clock stretch limit for BNO085

    // Scan I2C
    uint8_t detected = scanI2C();
    if (detected == 0x4B || detected == 0x4A) {
        activeI2cAddr = detected;
    } else {
        activeI2cAddr = BNO_DEFAULT_ADDR;
    }

    imuReady = initBNO085(activeI2cAddr);
    if (!imuReady && activeI2cAddr == 0x4B) {
        Serial.println("[BNO085] 0x4B failed, attempting fallback to 0x4A...");
        activeI2cAddr = 0x4A;
        imuReady = initBNO085(activeI2cAddr);
    }

    if (!imuReady) {
        Serial.println("[BNO085] ERROR: Sensor could not be initialized. Entering diagnostic loop.");
        i2cErrors++;
    }

    startTimeMs = millis();
    lastPrintMs = millis();
    lastSampleTimeMs = millis();
}

void loop() {
    yield();  // Feed ESP8266 watchdog

    uint32_t nowMs = millis();

    if (imuReady) {
        if (bno08x.wasReset()) {
            Serial.println("\n[BNO085] Sensor reset event reported by SH2! Re-enabling reports...");
            resetsNeeded++;
            bno08x.enableReport(SH2_GAME_ROTATION_VECTOR, SAMPLE_INTERVAL_US);
        }

        while (bno08x.getSensorEvent(&sensorValue)) {
            if (sensorValue.sensorId == SH2_GAME_ROTATION_VECTOR) {
                totalSamples++;
                samplesSinceLastPrint++;
                lastSampleTimeMs = nowMs;

                lastQw = sensorValue.un.gameRotationVector.real;
                lastQx = sensorValue.un.gameRotationVector.i;
                lastQy = sensorValue.un.gameRotationVector.j;
                lastQz = sensorValue.un.gameRotationVector.k;
            }
            yield();
        }

        // Sensor stall check: no sample received for > 1500 ms while initialized
        if (nowMs - lastSampleTimeMs > 1500) {
            i2cErrors++;
            Serial.printf("[BNO085] Warning: Sensor stall detected (%u ms without samples)\n", nowMs - lastSampleTimeMs);
            lastSampleTimeMs = nowMs;

            // Attempt soft reset / re-enable if stalled for over 4000 ms
            if (nowMs - lastSampleTimeMs > 4000) {
                resetsNeeded++;
                Serial.println("[BNO085] Re-initializing sensor after stall...");
                imuReady = initBNO085(activeI2cAddr);
            }
        }
    } else {
        // If not ready, retry every 5 seconds
        if (nowMs - lastSampleTimeMs > 5000) {
            lastSampleTimeMs = nowMs;
            i2cErrors++;
            scanI2C();
            imuReady = initBNO085(activeI2cAddr);
        }
    }

    // Periodic statistics print every 5 seconds
    if (nowMs - lastPrintMs >= 5000) {
        float elapsedSec = (nowMs - startTimeMs) / 1000.0f;
        float windowHz = samplesSinceLastPrint / ((nowMs - lastPrintMs) / 1000.0f);
        uint32_t currentHeap = ESP.getFreeHeap();

        Serial.printf("[T+%03.0fs] Samples: %-6u (Rate: %4.1f Hz) | I2C Errs: %-2u | Resets: %-2u | Heap: %5u B | Quat: (%+.3f, %+.3f, %+.3f, %+.3f)\n",
                      elapsedSec, totalSamples, windowHz, i2cErrors, resetsNeeded, currentHeap,
                      lastQw, lastQx, lastQy, lastQz);

        samplesSinceLastPrint = 0;
        lastPrintMs = nowMs;
    }

    // Check if 10 minutes reached
    if (!tenMinuteReportPrinted && (nowMs - startTimeMs >= TEST_DURATION_MS)) {
        tenMinuteReportPrinted = true;
        printFinalReport();
    }
}
