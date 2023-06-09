from component.component1 import Component1
from component.component2 import Component2
from mediator.concrete_mediator import ConcreteMediator


if __name__ == "__main__":
    c1 = Component1()
    c2 = Component2()
    mediator = ConcreteMediator(c1, c2)

    print("Client triggers operation A.")
    c1.do_a()

    print("\n", end="\n")

    print("Client triggers operation D.")
    c2.do_d()
    