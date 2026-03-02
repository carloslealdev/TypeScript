"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    // const numbers:(string | number | boolean)[] = [1,2,3,4,5, '6', 7, true ]
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    //La inferencia de datos de TS sabe que cada villian es un String y me da autocomplete
    //dinámico dependiendo el array
    villians.forEach((villian) => {
        console.log(villian.toUpperCase());
    });
    //Ahora tengo autocomplete e inferencia de tipo Number
    numbers.forEach((number) => {
        console.log(number.toLocaleString());
    });
    console.log(numbers);
})();
