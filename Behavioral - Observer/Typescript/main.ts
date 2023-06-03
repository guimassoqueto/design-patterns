import { ConcreteSubject } from "./concrete_subject/concrete-subject.ts";
import { ConcreteObserverA } from "./concrete_observer/concrete-observer-a.ts";
import { ConcreteObserverB } from "./concrete_observer/concrete-observer-b.ts";


const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);

const observer2 = new ConcreteObserverB();
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();