from typing import Dict, List, Optional
import yaml
from server.config import ROLES_FILE

class RolesRegistry:
    def __init__(self, config_path=ROLES_FILE):
        self.config_path = config_path
        self.id_to_name: Dict[int, str] = {}
        self.name_to_id: Dict[str, int] = {}
        self.descriptions: Dict[str, str] = {}
        self.required_roles: List[str] = []
        self.load()

    def load(self):
        if not self.config_path.exists():
            raise FileNotFoundError(f"Roles file not found at {self.config_path}")
        with open(self.config_path, "r", encoding="utf-8") as f:
            data = yaml.safe_load(f)

        roles_list = data.get("roles", [])
        for r in roles_list:
            rid = int(r["id"])
            name = str(r["name"])
            desc = str(r.get("description", ""))
            self.id_to_name[rid] = name
            self.name_to_id[name] = rid
            self.descriptions[name] = desc

        self.required_roles = [str(r) for r in data.get("required_roles", [])]

    def get_role_id(self, name: str) -> Optional[int]:
        return self.name_to_id.get(name)

    def get_role_name(self, role_id: int) -> Optional[str]:
        return self.id_to_name.get(role_id)

    def is_valid_role(self, name: str) -> bool:
        return name in self.name_to_id

    def is_valid_role_id(self, role_id: int) -> bool:
        return role_id in self.id_to_name

roles_registry = RolesRegistry()
