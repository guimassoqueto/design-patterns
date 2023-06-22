import { AbstractFactory } from './abstract-factory/abstract-factory.ts'
import { ConcreteFactory1 } from './concrete-factory/concrete-factory-1.ts'
import { ConcreteFactory2 } from './concrete-factory/concrete-factory-2.ts'


function main(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}


console.log('Client: Testing client code with the first factory type...');
main(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
main(new ConcreteFactory2());