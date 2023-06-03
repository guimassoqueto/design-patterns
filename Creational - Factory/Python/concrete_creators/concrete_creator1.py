from concrete_product.concrete_product1 import ConcreteProduct1
from creator.creator import Creator
from product.product import Product


class ConcreteCreator1(Creator):
  def factory_method(self) -> Product:
    return ConcreteProduct1()