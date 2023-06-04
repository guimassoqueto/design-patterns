import { Abstraction } from "./abstraction/abstraction.ts";
import { ConcreteImplementationA } from "./concrete_implementation/concrete_implementation_a.ts";
import { ConcreteImplementationB } from "./concrete_implementation/concrete_implementation_b.ts";
import { ExtendedAbstraction } from "./extended_abstraction/extended_abstraction.ts";


function clientCode(abstraction: Abstraction) {
  // ..
  console.log(abstraction.operation());
  // ..
}


let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);