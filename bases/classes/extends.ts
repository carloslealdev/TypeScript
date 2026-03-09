(() => {
  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ) {
      console.log('Constructor Avenger llamado');
    }

    protected getFullName() {
      // protected me permite acceder a éste método desde clases que extiendan de Avengers
      return `${this.name} - ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean,
    ) {
      super(name, realName);
      console.log('Constructor Xmen llamado');
    }

    //Ejemplo llamando a una propiedad protegida de la clase padre
    getFullNameDesdeXmen() {
      console.log(super.getFullName());
    }

    //getters y setters
    get fullName() {
      return `Nombre completo desde getter ${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      this.name = name;
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);
  console.log(wolverine);
  wolverine.getFullNameDesdeXmen();
  console.log(wolverine.fullName);

  //Usando setter
  wolverine.fullName = 'Carlos';
  console.log(wolverine.fullName);
})();
