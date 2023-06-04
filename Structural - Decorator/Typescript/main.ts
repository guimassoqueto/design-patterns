import { ConcreteComponent } from "./concrete-component/concrete-component.ts";
import { ConcreteDecoratorA } from "./concrete-decorator/concrete-decorator-a.ts";
import { Component } from "./interface/component.ts";


function main(component: Component) {
  // ...
  console.log(`RESULT: ${component.operation()}`);
  // ...
}

const concrete = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
main(concrete);
console.log('');

const decorator1 = new ConcreteDecoratorA(concrete);
const decorator2 = new ConcreteDecoratorA(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
main(decorator2);
