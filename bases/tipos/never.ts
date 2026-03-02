(() => {
  //never no es undefined

  //never Se utiliza para representar valores que nunca ocurren

  const error = (message: string): never => {
    throw new Error(message);
  };

  error('Erroooor!');
  console.log('No me ejecuto'); //Esta línea no llega a ejecutarse
})();
