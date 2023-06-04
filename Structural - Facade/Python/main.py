
from facade.facade import Facade
from subsystem.subsystem_a import SubsystemA
from subsystem.subsystem_b import SubsystemB


def main(facade: Facade) -> None:
    print(facade.operation(), end="")

if __name__ == "__main__":
    subsystem1 = SubsystemA()
    subsystem2 = SubsystemB()
    facade = Facade(subsystem1, subsystem2)
    main(facade)