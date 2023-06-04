import { Component } from '../interface/component.ts'


export class ConcreteComponent implements Component {
  public operation(): string {
    return 'ConcreteComponent';
  }
}