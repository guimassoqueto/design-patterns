from __future__ import annotations
from abc import ABC, abstractmethod
from typing import Optional


class Interface(ABC):
  @abstractmethod
  def set_next(self, handler: Interface) -> Interface:
    pass

  @abstractmethod
  def handle(self, request) -> Optional[str]:
    pass