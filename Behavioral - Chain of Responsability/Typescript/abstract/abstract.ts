import { Interface } from "../interface/interface.ts";


export abstract class Abstract implements Interface {
  private nextInterface: Interface;

  public setNext(Interface: Interface): Interface {
    this.nextInterface = Interface;
    return Interface;
  }

  public handle(request: string): string | null {
    if (this.nextInterface) {
      return this.nextInterface.handle(request);
    }
    return null;
  }
}