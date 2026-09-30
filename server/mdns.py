import logging
import socket
from typing import Optional
from zeroconf import IPVersion, ServiceInfo, Zeroconf
from server.config import MDNS_NAME, SERVER_PORT

logger = logging.getLogger("pair.mdns")

class MDNSService:
    def __init__(self, service_name: str = MDNS_NAME, port: int = SERVER_PORT):
        self.service_name = service_name
        self.port = port
        self.zeroconf: Optional[Zeroconf] = None
        self.info: Optional[ServiceInfo] = None

    def start(self):
        try:
            self.zeroconf = Zeroconf(ip_version=IPVersion.V4Only)
            local_ip = "127.0.0.1"
            try:
                # Discover primary outbound IP
                s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
                s.connect(("8.8.8.8", 80))
                local_ip = s.getsockname()[0]
                s.close()
            except Exception:
                pass

            desc = {"version": "1.0.0", "path": "/"}
            self.info = ServiceInfo(
                type_="_http._tcp.local.",
                name=f"{self.service_name}._http._tcp.local.",
                addresses=[socket.inet_aton(local_ip)],
                port=self.port,
                properties=desc,
                server=f"{self.service_name}.local.",
            )
            self.zeroconf.register_service(self.info)
            logger.info(f"mDNS service registered: {self.service_name}.local at {local_ip}:{self.port}")
        except Exception as e:
            logger.warning(f"Failed to register mDNS service: {e}")

    def stop(self):
        if self.zeroconf and self.info:
            try:
                self.zeroconf.unregister_service(self.info)
                self.zeroconf.close()
            except Exception as e:
                logger.warning(f"Error unregistering mDNS service: {e}")
            finally:
                self.zeroconf = None
                self.info = None

mdns_service = MDNSService()
