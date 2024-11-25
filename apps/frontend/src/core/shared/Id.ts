export default class Id {
  static novo(): string {
    return `id-${this.hash()}-${this.hash()}-${this.hash()}`;
  }

  private static hash(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
for (let i = 0; i < 100; i++) {
  console.log(Id.novo());
}
