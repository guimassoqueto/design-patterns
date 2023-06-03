from __future__ import annotations
from typing import List
from strategy.strategy import Strategy


class ConcreteStrategyB(Strategy):
  def do_algorithm(self, data: List) -> List:
    return reversed(sorted(data))