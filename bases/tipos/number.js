"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('200a'); //Esto devuelve NaN el cual es considerado un valor numerico
    console.log(avengers);
})();
