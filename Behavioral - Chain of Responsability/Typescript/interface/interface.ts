export interface Interface {
  setNext(handler: Interface): Interface;
  handle(request: string): string | null;
}