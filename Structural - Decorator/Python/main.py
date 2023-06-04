from component.component import Component
from concrete_component.concrete_component import ConcreteComponent
from concrete_decorator.concrete_decorator_a import ConcreteDecoratorA
from concrete_decorator.concrete_decorator_b import ConcreteDecoratorB


def main(component: Component) -> None:
    # ...
    print(f"RESULT: {component.operation()}", end="")
    # ...


if __name__ == "__main__":
    simple = ConcreteComponent()
    print("Client: I've got a simple component:")
    main(simple)
    print("\n")

    decorator1 = ConcreteDecoratorA(simple)
    decorator2 = ConcreteDecoratorB(decorator1)
    print("Client: Now I've got a decorated component:")
    main(decorator2)