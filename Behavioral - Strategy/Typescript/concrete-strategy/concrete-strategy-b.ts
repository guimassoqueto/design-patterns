import { Strategy } from "../strategy/strategy.ts";


export class ConcreteStrategyB implements Strategy {
  public doAlgorithm(data: string[]): string[] {
      return data.reverse();
  }
}