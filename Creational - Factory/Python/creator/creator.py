from __future__ import annotations
from abc import ABC, abstractmethod


class Creator(ABC):
  @abstractmethod
  def factory_method(self):
    pass

  def some_operation(self) -> str:
    product = self.factory_method()
    result = f"Creator: The same creator's code has just worked with {product.operation()}"
    return result