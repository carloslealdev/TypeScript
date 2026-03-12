function printToConsole(constructor: Function) {
  console.log(constructor);
}

//Los decoradores siempre deben retornar una función
const printToConsoleConditional = (print: boolean = false) => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

//Ejemplo de decorador para bloquear el prototipo de una clase
const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

//Decorador de método
function checkValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 1125) {
        return console.error('El ID del pokemon debe de estar entre 1 y 1125');
      } else {
        return originalMethod(id);
      }
    };
  };
}

//Los decoradores son funciones que se ejecutan al momento de la creación de la clase
@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {
  public publicApi: string = 'https://pokeapi.co';
  constructor(public name: string) {}

  //Los factory decorator llevan parentesis porque retornan una función
  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardo en DB - ID: ${id}`);
  }
}
