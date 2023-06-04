import { SubsystemA } from '../subsystem/subsystem-a.ts'
import { SubsystemB } from '../subsystem/subsystem-b.ts'


export class Facade {
  protected subsystemA: SubsystemA;

  protected subsystemB: SubsystemB;

  constructor(subsystemA?: SubsystemA, subsystemB?: SubsystemB) {
    this.subsystemA = subsystemA || new SubsystemA();
    this.subsystemB = subsystemB || new SubsystemB();
  }

  public operation(): string {
    let result = 'Facade initializes subsystems:\n';
    result += this.subsystemA.operation1();
    result += this.subsystemB.operation1();
    result += 'Facade orders subsystems to perform the action:\n';
    result += this.subsystemA.operationN();
    result += this.subsystemB.operationZ();

    return result;
  }
}