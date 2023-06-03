import { ConcreteCreator1 } from "./concrete_creators/concrete_creator1.ts";
import { ConcreteCreator2 } from "./concrete_creators/concrete_creator2.ts";
import { Creator } from "./creator/creator.ts";


function main(creator: Creator) {
  console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
  console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
main(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
main(new ConcreteCreator2());