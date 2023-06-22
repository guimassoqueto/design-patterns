from abstract_factory.abstract_factory import AbstractFactory
from abstract_product.abstract_product_a import AbstractProductA
from abstract_product.abstract_product_b import AbstractProductB
from concrete_product.concrete_product_a1 import ConcreteProductA1
from concrete_product.concrete_product_b1 import ConcreteProductB1


class ConcreteFactory1(AbstractFactory):
    def create_product_a(self) -> AbstractProductA:
        return ConcreteProductA1()

    def create_product_b(self) -> AbstractProductB:
        return ConcreteProductB1()