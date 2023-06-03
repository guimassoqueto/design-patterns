import { Observer } from "../observer/observer.ts";
import { Subject } from "../subject/subject.ts";
import { ConcreteSubject } from "../concrete_subject/concrete-subject.ts";


export class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
      console.log('ConcreteObserverB: Reacted to the event.');
    }
  }
}