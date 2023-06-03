from __future__ import annotations
from abc import ABC, abstractmethod


class Observer(ABC):
  @abstractmethod
  def update(self, subject: Subject) -> None:
    pass