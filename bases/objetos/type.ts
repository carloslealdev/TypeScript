(() => {
  //Solucion de tipos personalizados cuando queremos crear varios objetos
  //que tienen la misma firma

  //Tipo personalizado
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  //PROBLEMA A RESOLVER
  //
  //   let flash: {
  //     name: string;
  //     age?: number;
  //     powers: string[];
  //     getName?: () => string;
  //   } = {
  //     name: 'Barry Allen',
  //     age: 24,
  //     powers: ['Super velocidad', 'Viajar en el tiempo'],
  //   };

  //   let superman: {
  //     name: string;
  //     age?: number;
  //     powers: string[];
  //     getName?: () => string;
  //   } = {
  //     name: 'Clark Kent',
  //     age: 24,
  //     powers: ['Super fuerza'],
  //   };

  //SOLUCION

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo'],
  };

  let superman: Hero = {
    name: 'Clark Kent',
    age: 24,
    powers: ['Super fuerza'],
  };
})();
