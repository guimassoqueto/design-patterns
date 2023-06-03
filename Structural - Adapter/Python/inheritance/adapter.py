from adaptee import Adaptee
from target import Target


class Adapter(Target, Adaptee):
  def request(self) -> str:
    return f"Adapter: (TRANSLATED) {self.specific_request()[::-1]}"