import { Interface } from "./interface/interface.ts"
import { Dog } from './concrete/dog.ts'
import { Monkey } from './concrete/monkey.ts'
import { Squirrel } from './concrete/squirrel.ts'


function main(Interface: Interface) {
  const foods = ['Nut', 'Banana', 'Cup of coffee'];

  for (const food of foods) {
    console.log(`Client: Who wants a ${food}?`);

    const result = Interface.handle(food);

    if (result) {
      console.log(`\t${result}`);
    } else {
      console.log(`\t${food} was left untouched.`);
    }
  }
}


const monkey = new Monkey();
const squirrel = new Squirrel();
const dog = new Dog();

monkey.setNext(squirrel).setNext(dog);

console.log('Chain: Monkey > Squirrel > Dog\n');
main(monkey);
console.log('');

console.log('Subchain: Squirrel > Dog\n');
main(squirrel);