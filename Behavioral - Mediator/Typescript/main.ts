import { Component1 } from './components/component1.ts'
import { Component2 } from './components/component2.ts'
import { ConcreteMediator } from './mediator/concrete_mediator.ts'

const c1 = new Component1();
const c2 = new Component2();
const mediator = new ConcreteMediator(c1, c2);

console.log('Client triggers operation A.');
c1.doA();

console.log('');
console.log('Client triggers operation D.');
c2.doD();