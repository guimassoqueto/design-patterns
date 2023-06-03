import { Subject } from "../subject/subject.ts";


export interface Observer {
  update(subject: Subject): void;
}