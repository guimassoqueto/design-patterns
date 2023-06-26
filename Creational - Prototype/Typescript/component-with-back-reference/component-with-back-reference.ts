import { Prototype } from '../prototype/prototype.ts'


export class ComponentWithBackReference {
  public prototype: any;

  constructor(prototype: Prototype) {
      this.prototype = prototype;
  }
}