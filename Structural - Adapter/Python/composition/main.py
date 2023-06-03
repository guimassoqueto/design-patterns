from adaptee import Adaptee
from adapter import Adapter
from target import Target


def main(target: Target) -> None:
  print(target.request(), end="")


if __name__ == "__main__":
  print("Client: I can work just fine with the Target objects:")
  target = Target()
  main(target)
  print("\n")

  adaptee = Adaptee()
  print("Client: The Adaptee class has a weird interface. "
        "See, I don't understand it:")
  print(f"Adaptee: {adaptee.specific_request()}", end="\n\n")

  print("Client: But I can work with it via the Adapter:")
  adapter = Adapter(adaptee)
  main(adapter)
  