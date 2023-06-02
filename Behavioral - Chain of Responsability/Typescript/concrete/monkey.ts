import { Abstract } from "../abstract/abstract.ts";


export class Monkey extends Abstract {
  public handle(request: string): string| null {
    if (request === 'Banana') {
      return `Monkey: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}