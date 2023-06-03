from __future__ import annotations
from abc import ABC, abstractmethod


class Product(ABC):
  @abstractmethod
  def operation(self) -> str:
    pass