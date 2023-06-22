from __future__ import annotations
from abc import ABC, abstractmethod
from abstract_product.abstract_product_a import AbstractProductA
from abstract_product.abstract_product_b import AbstractProductB


class AbstractFactory(ABC):
    @abstractmethod
    def create_product_a(self) -> AbstractProductA:
        pass

    @abstractmethod
    def create_product_b(self) -> AbstractProductB:
        pass