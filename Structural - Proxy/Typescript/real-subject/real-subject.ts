import { Subject } from '../interface/subject.ts'


export class RealSubject implements Subject {
  public request(): void {
    console.log('RealSubject: Handling request.');
  }
}