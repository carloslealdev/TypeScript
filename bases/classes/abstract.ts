(() => {
  //Las clases abstractas no permiten la creación de instancias
  abstract class Mutant {
    constructor(
      public name: string,
      public realName: string,
    ) {}
  }

  //   const wolverine = new Mutant('Wolverine', 'Logan');

  //Sin embargo si puedo crear clases que extiendan de clases abstractas
  class Xmen extends Mutant {
    salvarMundo() {
      return `Mundo salvado`;
    }
  }

  class Villian extends Mutant {
    conquistarMundo() {
      return `Mundo conquistado`;
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan');
  const magneto = new Villian('Magneto', 'Magnus');

  console.log(wolverine);
  console.log(magneto);

  //Puedo usar las clases abstractas para indicar que espero un argumento de ese tipo
  const printName = (character: Mutant) => {
    console.log(character.name);
  };

  printName(wolverine);
})();
