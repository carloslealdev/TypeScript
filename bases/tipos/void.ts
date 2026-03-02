(() => {
  //Void indica que no hay valor de retorno
  function callBatman(): void {
    // return 1 // Esto genera conflicto porque estoy especificando que el valor de retorno de la función es void
  }

  const callSuperman = (): void => {};

  const a = callBatman();
  console.log(a);
})();
