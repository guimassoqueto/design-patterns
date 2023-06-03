from concrete_creators.concrete_creator1 import ConcreteCreator1
from concrete_creators.concrete_creator2 import ConcreteCreator2
from creator.creator import Creator


def main(creator: Creator) -> None:
    print(f"Client: I'm not aware of the creator's class, but it still works.\n"
          f"{creator.some_operation()}", end="")


if __name__ == "__main__":
    print("App: Launched with the ConcreteCreator1.")
    main(ConcreteCreator1())
    print("\n")

    print("App: Launched with the ConcreteCreator2.")
    main(ConcreteCreator2())