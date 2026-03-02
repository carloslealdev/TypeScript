(() => {
  //Cuando trabajamos con TypeScript debemos evitar todo lo posible utilizar
  //el tipo de dato any

  let avenger: any = 123;
  let exists;
  let power;

  avenger = 'Dr Strange';
  console.log(avenger); //No tenemos autocomplete de métodos porque el tipo de dato es any

  //Los castings en TS me permiten indicar que un dato sea tratado como cierto tipo
  //NO ESTAMOS CAMBIANDO EL TIPO

  //Manera 1
  console.log((avenger as string).charAt(0)); //Tenemos autocomplete de datos string

  avenger = 323.123121;
  //Manera 2
  console.log((<number>avenger).toFixed(2)); //Tenemos autocomplete de datos number
})();
