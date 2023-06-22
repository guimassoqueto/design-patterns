from __future__ import annotations
from abstract_factory.abstract_factory import AbstractFactory
from concrete_factory.concrete_factory_1 import ConcreteFactory1
from concrete_factory.concrete_factory_2 import ConcreteFactory2


def main(factory: AbstractFactory) -> None:
    product_a = factory.create_product_a()
    product_b = factory.create_product_b()

    print(f"{product_b.useful_function_b()}")
    print(f"{product_b.another_useful_function_b(product_a)}", end="")


if __name__ == "__main__":
    print("Client: Testing client code with the first factory type:")
    main(ConcreteFactory1())

    print("\n")

    print("Client: Testing the same client code with the second factory type:")
    main(ConcreteFactory2())