from typing import Any
from abstract.abstract import AbstractInterface


class Monkey(AbstractInterface):
  def handle(self, request: Any) -> str:
    if request == "Banana":
      return f"Monkey: I'll eat the {request}"
    else:
      return super().handle(request)