from __future__ import annotations
from typing import List
from strategy.strategy import Strategy


class ConcreteStrategyA(Strategy):
  def do_algorithm(self, data: List) -> List:
    return sorted(data)