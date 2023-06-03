import { Observer } from "../observer/observer.ts";


export interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}