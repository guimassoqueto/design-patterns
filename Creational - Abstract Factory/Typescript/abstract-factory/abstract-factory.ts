import { AbstractProductA } from '../abstract-product/abstract-product-a.ts'
import { AbstractProductB } from '../abstract-product/abstract-product-b.ts'


export interface AbstractFactory {
  createProductA(): AbstractProductA;

  createProductB(): AbstractProductB;
}