from concrete_product.concrete_product2 import ConcreteProduct2
from creator.creator import Creator
from product.product import Product


class ConcreteCreator2(Creator):
  def factory_method(self) -> Product:
    return ConcreteProduct2()