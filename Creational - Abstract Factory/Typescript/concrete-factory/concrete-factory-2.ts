import { AbstractFactory } from "../abstract-factory/abstract-factory.ts";
import { AbstractProductA } from "../abstract-product/abstract-product-a.ts";
import { AbstractProductB } from "../abstract-product/abstract-product-b.ts";
import { ConcreteProductA2 } from "../concrete-product/concrete-product-a2.ts";
import { ConcreteProductB2 } from "../concrete-product/concrete-product-b2.ts";


export class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
      return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
      return new ConcreteProductB2();
  }
}