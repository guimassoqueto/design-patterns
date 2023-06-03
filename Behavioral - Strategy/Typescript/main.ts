import { Context } from "./context/context.ts";
import { ConcreteStrategyA } from "./concrete-strategy/concrete-strategy-a.ts";
import { ConcreteStrategyB } from "./concrete-strategy/concrete-strategy-b.ts";



const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic();

console.log('');

console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();