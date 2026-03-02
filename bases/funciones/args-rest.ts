(() => {
  //Los argumentos rest son ideales cuando quiero que el primer argumento
  //sea obligatorio pero también quiero poder tomar todo el resto de argumentos que mande
  //el usuario

  //El parámetro rest siempre va a ser un array, pero debo especificar el tipo
  const fullName = (firsName: string, ...restArgs: string[]) => {
    return `${firsName} ${restArgs.join(' ')}`;
  };

  const superman = fullName('Clark', 'Joseph', 'Kent');
  console.log({ superman });
})();
