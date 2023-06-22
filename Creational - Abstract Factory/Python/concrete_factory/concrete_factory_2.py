from abstract_factory.abstract_factory import AbstractFactory
from abstract_product.abstract_product_a import AbstractProductA
from abstract_product.abstract_product_b import AbstractProductB
from concrete_product.concrete_product_a2 import ConcreteProductA2
from concrete_product.concrete_product_b2 import ConcreteProductB2


class ConcreteFactory2(AbstractFactory):
    def create_product_a(self) -> AbstractProductA:
        return ConcreteProductA2()

    def create_product_b(self) -> AbstractProductB:
        return ConcreteProductB2()