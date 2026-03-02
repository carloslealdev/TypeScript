"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    //Nótese que la definicion de tupla para TS es un poco distinta
    //a cuando queremos definir un array que reciba string o number =>>> (string | number)[]
    const hero = ['Dr Strange', 100];
    //Estas asignaciones no las permite TS porque en la definición le estamos indicando que
    //el primer valor es un string y el segundo es un número SIEMPRE
    // hero[0] = 123
    // hero[1] = 'Ironman'
    //Las "tuplas" en TS aceptan más de 2 valores
    const hero2 = ['Ironman', 210, true];
    console.log({ hero, hero2 });
})();
