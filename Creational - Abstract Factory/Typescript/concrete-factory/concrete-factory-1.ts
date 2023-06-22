import { AbstractFactory } from '../abstract-factory/abstract-factory.ts'
import { AbstractProductA } from '../abstract-product/abstract-product-a.ts';
import { AbstractProductB } from '../abstract-product/abstract-product-b.ts';
import { ConcreteProductA1 } from '../concrete-product/concrete-product-a1.ts';
import { ConcreteProductB1 } from '../concrete-product/concrete-product-b1.ts';

export class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
      return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
      return new ConcreteProductB1();
  }
}