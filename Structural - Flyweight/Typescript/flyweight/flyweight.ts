export class Flyweight {
  private sharedState: any;

  constructor(sharedState: any) {
      this.sharedState = sharedState;
  }

  public operation(uniqueState): void {
      const s = JSON.stringify(this.sharedState);
      const u = JSON.stringify(uniqueState);
      console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
  }
}