from decorator.decorator import Decorator


class ConcreteDecoratorB(Decorator):
  def operation(self) -> str:
    return f"ConcreteDecoratorB({self.component.operation()})"