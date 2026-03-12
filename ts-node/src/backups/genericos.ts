// import { Hero } from './classes/Hero';
import { Hero, Villain } from '../interfaces';

import {
  genericFunction,
  genericFunctionArrow,
  printObject,
} from '../generics/generics';

// const ironman = new Hero('Tony Stark', 1, 55);
// console.log({ ironman });
// console.log(ironman.power);

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// printObject('Hola Mundo');

// console.log(genericFunction(3.1416168).toFixed(2));
// console.log(genericFunction('Hola Mundo').toUpperCase());
// console.log(genericFunction(new Date()).getDate());

// console.log(genericFunctionArrow(3.1416168).toFixed(2));
// console.log(genericFunctionArrow('Hola Mundo').toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());

//Este objeto podría cumplir cualquiera de las dos interfaces Hero o Villain
const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wison',
  dangerLevel: 130,
};

//Puedo llamar la función genérica especificando el tipo de dato en la llamada
console.log(genericFunctionArrow<Hero>(deadpool).name);
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
