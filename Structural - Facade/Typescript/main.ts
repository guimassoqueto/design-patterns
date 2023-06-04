import { Facade } from "./facade/facade.ts";
import { SubsystemA } from "./subsystem/subsystem-a.ts";
import { SubsystemB } from "./subsystem/subsystem-b.ts";


function clientCode(facade: Facade) {
  // ...
  console.log(facade.operation());
  // ...
}


const subsystemA = new SubsystemA();
const subsystemB = new SubsystemB();
const facade = new Facade(subsystemA, subsystemB);

clientCode(facade);