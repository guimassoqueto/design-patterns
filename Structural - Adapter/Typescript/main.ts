import { Adaptee } from "./adaptee.ts";
import { Adapter } from "./adapter.ts";
import { Target } from "./target.ts";


function main(target: Target) {
  console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
main(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
main(adapter);
