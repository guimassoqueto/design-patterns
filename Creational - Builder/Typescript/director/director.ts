import { Builder } from '../builder/builder.ts'


export class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
      this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
      this.builder.producePartA();
  }

  public buildFullFeaturedProduct(): void {
      this.builder.producePartA();
      this.builder.producePartB();
      this.builder.producePartC();
  }
}