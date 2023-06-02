
from interface.interface import Interface
from concrete.dog import Dog
from concrete.squirrel import Squirrel
from concrete.monkey import Monkey

def main(handler: Interface) -> None:
    for food in ["Nut", "Banana", "Cup of coffee"]:
        print(f"\nClient: Who wants a {food}?")
        result = handler.handle(food)
        if result:
            print(f"  {result}", end="")
        else:
            print(f"  {food} was left untouched.", end="\n")


if __name__ == "__main__":
    monkey = Monkey()
    squirrel = Squirrel()
    dog = Dog()

    monkey.set_next(squirrel).set_next(dog)

    print("Chain: Monkey > Squirrel > Dog")
    main(monkey)
    print("\n")

    print("Subchain: Squirrel > Dog")
    main(squirrel)