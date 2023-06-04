
from abstraction.abstraction import Abstraction
from concrete_implementation.concrete_implementation_a import ConcreteImplementationA
from concrete_implementation.concrete_implementation_b import ConcreteImplementationB
from extended_abstraction.extended_abstraction import ExtendedAbstraction


def main(abstraction: Abstraction) -> None:
    # ...

    print(abstraction.operation(), end="")

    # ...


if __name__ == "__main__":
    implementation = ConcreteImplementationA()
    abstraction = Abstraction(implementation)
    main(abstraction)

    print("\n")

    implementation = ConcreteImplementationB()
    abstraction = ExtendedAbstraction(implementation)
    main(abstraction)
    
    print("\n")