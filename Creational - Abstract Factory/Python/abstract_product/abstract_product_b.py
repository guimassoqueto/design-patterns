from __future__ import annotations
from abc import ABC, abstractmethod
from abstract_product.abstract_product_a import AbstractProductA


class AbstractProductB(ABC):
    @abstractmethod
    def useful_function_b(self) -> None:
        pass

    @abstractmethod
    def another_useful_function_b(self, collaborator: AbstractProductA) -> None:
        pass
