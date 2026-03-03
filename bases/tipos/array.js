"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach((villian) => {
        console.log(villian.toUpperCase());
    });
    numbers.forEach((number) => {
        console.log(number.toLocaleString());
    });
    console.log(numbers);
})();
