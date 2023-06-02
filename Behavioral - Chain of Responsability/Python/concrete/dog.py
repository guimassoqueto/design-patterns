from typing import Any
from abstract.abstract import AbstractInterface

class Dog(AbstractInterface):
  def handle(self, request: Any) -> str:
    if request == "MeatBall":
      return f"Dog: I'll eat the {request}"
    else:
      return super().handle(request)