
from observer.observer import Observer
from subject.subject import Subject


class ConcreteObserverA(Observer):
  def update(self, subject: Subject) -> None:
    if subject._state < 3:
      print("ConcreteObserverA: Reacted to the event")