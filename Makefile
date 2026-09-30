.PHONY: help install test run-server run-fake clean pio-build firmware-bin build-dashboard verify-dashboard

help:
	@echo "Available commands:"
	@echo "  make install         Install Python dependencies in virtualenv"
	@echo "  make test            Run pytest test suite"
	@echo "  make build-dashboard Build Vite + TypeScript + Three.js dashboard"
	@echo "  make verify-dashboard Run live 3-roles dashboard verification test"
	@echo "  make run-server      Start local FastAPI server on port 8000"
	@echo "  make run-fake        Run fake tracker simulation"
	@echo "  make pio-build       Build PlatformIO firmware"
	@echo "  make firmware-bin    Build firmware and copy binaries into server/firmware_bin"
	@echo "  make clean           Remove temporary files"

install:
	python3 -m venv .venv
	. .venv/bin/activate && pip install -r requirements.txt

test:
	. .venv/bin/activate && pytest -v

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
	mkdir -p server/firmware_bin
	cp firmware/.pio/build/seeed_xiao_esp32c6/bootloader.bin server/firmware_bin/
	cp firmware/.pio/build/seeed_xiao_esp32c6/partitions.bin server/firmware_bin/
	cp firmware/.pio/build/seeed_xiao_esp32c6/firmware.bin server/firmware_bin/
	@if [ -f ~/.platformio/packages/framework-arduinoespressif32/tools/partitions/boot_app0.bin ]; then \
		cp ~/.platformio/packages/framework-arduinoespressif32/tools/partitions/boot_app0.bin server/firmware_bin/ ; \
	fi
	@echo "Firmware binaries copied to server/firmware_bin/"

clean:
	rm -rf .pytest_cache __pycache__ server/__pycache__ tools/__pycache__ tests/__pycache__
	rm -rf data sessions_data
