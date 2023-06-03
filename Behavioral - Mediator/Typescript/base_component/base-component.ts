import { Mediator } from '../interface/interface.ts'


export class BaseComponent {
  protected mediator: Mediator;

  constructor(mediator?: Mediator) {
      this.mediator = mediator!;
  }

  public setMediator(mediator: Mediator): void {
      this.mediator = mediator;
  }
}