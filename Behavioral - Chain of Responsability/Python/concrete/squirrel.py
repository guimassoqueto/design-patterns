from typing import Any
from abstract.abstract import AbstractInterface


class Squirrel(AbstractInterface):
  def handle(self, request: Any) -> str:
    if request == "Nut":
      return f"Squirrel: I'll eat the {request}"
    else:
      return super().handle(request)