from adaptee import Adaptee
from target import Target


class Adapter(Target):
  def __init__(self, adaptee: Adaptee) -> None:
    self.adaptee = adaptee

  def request(self) -> str:
    return f"Adapter: (TRANSLATED) {self.adaptee.specific_request()[::-1]}"