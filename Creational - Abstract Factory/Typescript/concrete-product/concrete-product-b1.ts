import { AbstractProductA } from '../abstract-product/abstract-product-a.ts';
import { AbstractProductB } from '../abstract-product/abstract-product-b.ts'


export class ConcreteProductB1 implements AbstractProductB {

  public usefulFunctionB(): string {
      return 'The result of the product B1.';
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
      const result = collaborator.usefulFunctionA();
      return `The result of the B1 collaborating with the (${result})`;
  }
}