// (() => {
//   class Avenger {
//     private name: string;
//     public team: string;
//     public realName?: string | undefined;

//     static avgAge: number = 35; //Los métodos y propiedades static son accesibles solamente desde la clase y no desde sus instancias

//     constructor(name: string, team: string, realName?: string) {
//       this.name = name;
//       this.team = team;
//       this.realName = realName;
//     }
//   }

//   const antman: Avenger = new Avenger('Antman', 'Capitan');
//   console.log(antman);

//   console.log(Avenger.avgAge);
// })();

//Forma corta de asignación

(() => {
  class Avenger {
    static avgAge = 35;

    constructor(
      private name: string,
      public team: string,
      public realName?: string,
    ) {}

    public bio() {
      return `${this.name} - (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
  console.log(antman);
  console.log(antman.bio());

  console.log(Avenger.avgAge);
})();
