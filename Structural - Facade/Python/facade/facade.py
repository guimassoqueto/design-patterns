from subsystem.subsystem_a import SubsystemA
from subsystem.subsystem_b import SubsystemB


class Facade:
    def __init__(self, subsystem_a: SubsystemA, subsystem_b: SubsystemB) -> None:
        self._subsystem_a = subsystem_a or SubsystemA()
        self._subsystem_b = subsystem_b or SubsystemB()

    def operation(self) -> str:
        results = []
        results.append("Facade initializes subsystems:")
        results.append(self._subsystem_a.operation1())
        results.append(self._subsystem_b.operation1())
        results.append("Facade orders subsystems to perform the action:")
        results.append(self._subsystem_a.operation_n())
        results.append(self._subsystem_b.operation_z())
        return "\n".join(results)