from __future__ import annotations
from random import randrange
from typing import List
from observer.observer import Observer

from subject.subject import Subject


class ConcreteSubject(Subject):
  _state: int = None
  _observers: List[Observer] = []

  def attach(self, observer: Observer) -> None:
    print("Subject: Attached an observer.")
    self._observers.append(observer)

  def detach(self, observer: Observer) -> None:
    self._observers.remove(observer)

  def notify(self) -> None:
    print("Subject: Notifying observers...")
    for observer in self._observers:
      observer.update(self)

  def some_business_logic(self) -> None:
    print("\nSubject: I'm doing something important.")
    self._state = randrange(0, 10)

    print(f"Subject: My state has just changed to: {self._state}")
    self.notify()