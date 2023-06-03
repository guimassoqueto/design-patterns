import { Strategy } from "../strategy/strategy.ts";


export class ConcreteStrategyA implements Strategy {
  public doAlgorithm(data: string[]): string[] {
      return data.sort();
  }
}