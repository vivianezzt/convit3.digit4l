export default class Id {
  static novo(): string {
    return `id-${this.hash()}-${this.hash()}-${this.hash()}`;
  }

  private static hash(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
//console.log(Id.novo());
