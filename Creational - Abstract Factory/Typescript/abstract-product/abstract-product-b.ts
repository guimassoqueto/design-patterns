import { AbstractProductA } from "./abstract-product-a.ts";

export interface AbstractProductB {
  usefulFunctionB(): string;

  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}