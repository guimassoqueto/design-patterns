import { Creator } from '../creator/creator.ts'
import { Product } from '../product/product.ts'
import { ConcreteProduct1 } from '../concrete_product/concrete_product1.ts'


export class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}