export const printObject = (argument: any) => {
  console.log(argument);
};

// export function genericFunction(argument: any) { //Problema de tipado cuando varía el tipo del argumento
//   return argument;
// }

//Función tradicionale genérica
export function genericFunction<T>(argument: T) {
  //Toma automáticamente el tipo de argumento que se pasa
  return argument;
}

//Arrow function genérica
export const genericFunctionArrow = <T>(argument: T) => argument;
