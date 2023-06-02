import { Abstract } from "../abstract/abstract.ts";


export class Squirrel extends Abstract {
  public handle(request: string): string | null{
    if (request === 'Nut') {
      return `Squirrel: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}