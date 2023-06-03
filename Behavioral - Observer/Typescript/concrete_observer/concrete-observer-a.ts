import { Observer } from "../observer/observer.ts";
import { Subject } from "../subject/subject.ts";
import { ConcreteSubject } from "../concrete_subject/concrete-subject.ts";


export class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}