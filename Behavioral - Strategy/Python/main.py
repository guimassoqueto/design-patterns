from context.context import Context
from concrete_strategy.concrete_strategy_a import ConcreteStrategyA
from concrete_strategy.concrete_strategy_b import ConcreteStrategyB


if __name__ == "__main__":
  context = Context(ConcreteStrategyA())
  print("Client: Strategy is set to normal sorting.")
  context.do_some_business_logic()
  print()

  print("Client: Strategy is set to reverse sorting.")
  context.strategy = ConcreteStrategyB()
  context.do_some_business_logic()