(() => {
  //Los argumentos por defecto son argumentos obligatorios y no pueden ir despues de
  //argumentos opcionales
  //Los argumentos opcionales siempre van al final
  const fullName = (
    upper: boolean = false,
    firstName: string,
    lastName?: string,
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || '----'}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || '----'}`;
    }
  };

  const name = fullName(true, 'Carlos');
  console.log({ name });
})();
