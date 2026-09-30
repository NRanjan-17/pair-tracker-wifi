#include "OTA.h"

#if defined(ESP32)

#include <HTTPClient.h>
#include <Update.h>
#include <esp_ota_ops.h>
#include <mbedtls/sha256.h>

class Esp32OTA : public HalOTA {
public:
    bool performUpdate(const String& fullUrl, const String& token, const String& expectedSha256, size_t expectedSize, OTAProgressCallback onProgress) override {
        HTTPClient http;
        http.begin(fullUrl);
        http.addHeader("Authorization", String("Bearer ") + token);
        http.setTimeout(15000);

        int httpCode = http.GET();
        if (httpCode != HTTP_CODE_OK) {
            String err = "HTTP " + String(httpCode) + " download error";
            onProgress("failed", 0, err.c_str());
            http.end();
            return false;
        }

        int contentLength = http.getSize();
        if (contentLength <= 0 && expectedSize > 0) {
            contentLength = expectedSize;
        }

        if (!Update.begin(contentLength > 0 ? contentLength : UPDATE_SIZE_UNKNOWN)) {
            onProgress("failed", 0, "Update.begin failed (insufficient partition space)");
            http.end();
            return false;
        }

        mbedtls_sha256_context sha_ctx;
        mbedtls_sha256_init(&sha_ctx);
        mbedtls_sha256_starts(&sha_ctx, 0);

        Stream* stream = http.getStreamPtr();
        uint8_t buff[1024];
        size_t totalBytesWritten = 0;
        int lastPct = 0;

        onProgress("downloading", 0, nullptr);

        while (http.connected() && (totalBytesWritten < (size_t)contentLength || contentLength <= 0)) {
            size_t available = stream->available();
            if (available) {
                size_t toRead = available > sizeof(buff) ? sizeof(buff) : available;
                int bytesRead = stream->readBytes(buff, toRead);
                if (bytesRead > 0) {
                    mbedtls_sha256_update(&sha_ctx, buff, bytesRead);
                    Update.write(buff, bytesRead);
                    totalBytesWritten += bytesRead;

                    if (contentLength > 0) {
                        int pct = (totalBytesWritten * 100) / contentLength;
                        if (pct >= lastPct + 10) {
                            lastPct = pct;
                            onProgress("downloading", pct, nullptr);
                        }
                    }
                }
            } else {
                delay(10);
            }
        }

        uint8_t hash[32];
        mbedtls_sha256_finish(&sha_ctx, hash);
        mbedtls_sha256_free(&sha_ctx);

        char calculatedSha[65];
        for (int i = 0; i < 32; i++) {
            sprintf(calculatedSha + (i * 2), "%02x", hash[i]);
        }
        calculatedSha[64] = '\0';

        onProgress("verifying", 100, nullptr);

        if (expectedSha256.length() > 0 && !expectedSha256.equalsIgnoreCase(calculatedSha)) {
            Update.abort();
            http.end();
            onProgress("failed", 0, "SHA-256 verification mismatch");
            return false;
        }

        if (!Update.end()) {
            http.end();
            onProgress("failed", 0, "Update.end() failed");
            return false;
        }

        http.end();
        onProgress("rebooting", 100, nullptr);
        delay(300);
        ESP.restart();
        return true;
    }

    void validateApp() override {
        const esp_partition_t* running = esp_ota_get_running_partition();
        esp_ota_img_states_t ota_state;
        if (esp_ota_get_state_partition(running, &ota_state) == ESP_OK) {
            if (ota_state == ESP_OTA_IMG_PENDING_VERIFY) {
                Serial.println("OTA: Validating new app firmware image");
                esp_ota_mark_app_valid_cancel_rollback();
            }
        }
    }
};

static Esp32OTA s_otaInstance;
HalOTA& halOTA = s_otaInstance;

#elif defined(ESP8266)

#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <Updater.h>
#include <bearssl/bearssl_hash.h>

class Esp8266OTA : public HalOTA {
public:
    bool performUpdate(const String& fullUrl, const String& token, const String& expectedSha256, size_t expectedSize, OTAProgressCallback onProgress) override {
        WiFiClient client;
        HTTPClient http;
        http.begin(client, fullUrl);
        http.addHeader("Authorization", String("Bearer ") + token);
        http.setTimeout(15000);

        int httpCode = http.GET();
        if (httpCode != HTTP_CODE_OK) {
            String err = "HTTP " + String(httpCode) + " download error";
            onProgress("failed", 0, err.c_str());
            http.end();
            return false;
        }

        int contentLength = http.getSize();
        if (contentLength <= 0 && expectedSize > 0) {
            contentLength = expectedSize;
        }

        // Check available sketch space before writing
        uint32_t freeSpace = ESP.getFreeSketchSpace();
        if (contentLength > 0 && (uint32_t)contentLength > freeSpace) {
            onProgress("failed", 0, "Not enough flash space for update");
            http.end();
            return false;
        }

        if (!Update.begin(contentLength > 0 ? contentLength : (size_t)freeSpace)) {
            onProgress("failed", 0, "Update.begin failed");
            http.end();
            return false;
        }

        br_sha256_context sha_ctx;
        br_sha256_init(&sha_ctx);

        WiFiClient* stream = http.getStreamPtr();
        uint8_t buff[512];
        size_t totalBytesWritten = 0;
        int lastPct = 0;

        onProgress("downloading", 0, nullptr);

        while (http.connected() && (totalBytesWritten < (size_t)contentLength || contentLength <= 0)) {
            yield();
            size_t available = stream->available();
            if (available) {
                size_t toRead = available > sizeof(buff) ? sizeof(buff) : available;
                int bytesRead = stream->readBytes(buff, toRead);
                if (bytesRead > 0) {
                    br_sha256_update(&sha_ctx, buff, bytesRead);
                    Update.write(buff, bytesRead);
                    totalBytesWritten += bytesRead;

                    if (contentLength > 0) {
                        int pct = (totalBytesWritten * 100) / contentLength;
                        if (pct >= lastPct + 10) {
                            lastPct = pct;
                            onProgress("downloading", pct, nullptr);
                        }
                    }
                }
            } else {
                delay(10);
            }
        }

        uint8_t hash[32];
        br_sha256_out(&sha_ctx, hash);

        char calculatedSha[65];
        for (int i = 0; i < 32; i++) {
            sprintf(calculatedSha + (i * 2), "%02x", hash[i]);
        }
        calculatedSha[64] = '\0';

        onProgress("verifying", 100, nullptr);

        if (expectedSha256.length() > 0 && !expectedSha256.equalsIgnoreCase(calculatedSha)) {
            // SHA mismatch: abort without updating boot flag
            Update.end(false);
            http.end();
            onProgress("failed", 0, "SHA-256 verification mismatch");
            return false;
        }

        if (!Update.end(true)) {
            http.end();
            onProgress("failed", 0, "Update.end() failed");
            return false;
        }

        http.end();
        onProgress("rebooting", 100, nullptr);
        delay(300);
        ESP.restart();
        return true;
    }

    void validateApp() override {
        // ESP8266 does not have hardware app rollback support.
        // Documented difference: pre-verification of SHA-256 and space check prevents corrupt writes.
    }
};

static Esp8266OTA s_otaInstance;
HalOTA& halOTA = s_otaInstance;

#endif
