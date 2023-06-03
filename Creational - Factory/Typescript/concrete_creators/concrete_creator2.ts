import { Creator } from '../creator/creator.ts'
import { Product } from '../product/product.ts'
import { ConcreteProduct2 } from '../concrete_product/concrete_product2.ts'


export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}