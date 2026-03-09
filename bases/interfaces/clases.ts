(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: string): string;
  }

  interface Human {
    age: number;
  }

  //La palabra reservada implements se usa para forzar a nuestra clase a que
  // respete la estrutura de las interfaces que le doy
  class Mutant implements Xmen, Human {
    constructor(
      public age: number,
      public name: string,
      public realName: string,
    ) {}

    mutantPower(id: string): string {
      return `${this.name} -  ${this.realName}`;
    }
  }
})();
