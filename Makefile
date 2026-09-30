.PHONY: help setup doctor install test test-e2e test-hw run-server run-fake clean pio-build firmware-bin release build-dashboard verify-dashboard

SERVER ?= http://localhost:8000

help:
	@echo "Available commands:"
	@echo "  make setup           Full zero-to-hero setup (virtualenv, python deps, npm deps, firmware build)"
	@echo "  make doctor          Validate tools, toolchains, ports, and environment prerequisites"
	@echo "  make install         Install Python dependencies in virtualenv"
	@echo "  make test            Run full test suite: pytest + firmware build check + dashboard build"
	@echo "  make test-e2e        Run automated 7-tracker E2E simulation & mocap export verification"
	@echo "  make test-hw         Run live hardware check against real trackers connected to server"
	@echo "  make build-dashboard Build Vite + TypeScript + Three.js dashboard"
	@echo "  make verify-dashboard Run live 3-roles dashboard verification test"
	@echo "  make run-server      Start local FastAPI server on port 8000"
	@echo "  make run-fake        Run fake tracker simulation (required body roles)"
	@echo "  make pio-build       Build PlatformIO firmware"
	@echo "  make firmware-bin    Build firmware and copy binaries into server/firmware_bin"
	@echo "  make release         Build firmware and create versioned release with manifest.json"
	@echo "  make clean           Remove temporary files"

setup:
	python3 -m venv .venv
	. .venv/bin/activate && pip install -r requirements.txt
	cd dashboard && npm install
	cd firmware && . ../.venv/bin/activate && pio run
	@echo "\n========================================================"
	@echo "✓ Setup complete! Run 'make doctor' to verify."
	@echo "========================================================\n"

doctor:
	. .venv/bin/activate && python3 tools/doctor.py

install:
	python3 -m venv .venv
	. .venv/bin/activate && pip install -r requirements.txt

test:
	. .venv/bin/activate && pytest -v
	cd firmware && . ../.venv/bin/activate && pio run
	cd dashboard && npm run build

test-e2e:
	. .venv/bin/activate && python3 tools/test_e2e.py

test-hw:
	. .venv/bin/activate && python3 tools/hw_check.py --server $(SERVER)

build-dashboard:
	cd dashboard && npm run build

verify-dashboard:
	. .venv/bin/activate && python3 tests/verify_live_3_roles.py

run-server:
	. .venv/bin/activate && uvicorn server.main:app --host 0.0.0.0 --port 8000 --reload

run-fake:
	. .venv/bin/activate && python3 tools/fake_tracker.py --server http://localhost:8000 --roles required

pio-build:
	cd firmware && . ../.venv/bin/activate && pio run

firmware-bin: pio-build
	mkdir -p server/firmware_bin/esp32c6 server/firmware_bin/esp12e
	cp firmware/.pio/build/seeed_xiao_esp32c6/bootloader.bin server/firmware_bin/esp32c6/
	cp firmware/.pio/build/seeed_xiao_esp32c6/partitions.bin server/firmware_bin/esp32c6/
	cp firmware/.pio/build/seeed_xiao_esp32c6/firmware.bin server/firmware_bin/esp32c6/
	@if [ -f ~/.platformio/packages/framework-arduinoespressif32/tools/partitions/boot_app0.bin ]; then \
		cp ~/.platformio/packages/framework-arduinoespressif32/tools/partitions/boot_app0.bin server/firmware_bin/esp32c6/ ; \
	fi
	cp firmware/.pio/build/esp12e/firmware.bin server/firmware_bin/esp12e/
	@echo "Firmware binaries for esp32c6 and esp12e copied to server/firmware_bin/"

release: pio-build
	. .venv/bin/activate && python3 tools/release_firmware.py $(VERSION)

clean:
	rm -rf .pytest_cache __pycache__ server/__pycache__ tools/__pycache__ tests/__pycache__
	rm -rf data sessions_data
