from abc import abstractmethod
from typing import Any
from interface.interface import Interface


class AbstractInterface(Interface):
  _next_handler: Interface = None

  def set_next(self, handler: Interface) -> Interface:
    self._next_handler = handler
    return handler

  @abstractmethod
  def handle(self, request: Any) -> str:
    if self._next_handler:
      return self._next_handler.handle(request)

    return None