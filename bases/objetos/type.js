"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    //Solucion de tipos personalizados cuando queremos crear varios objetos
    //que tienen la misma firma
    //PROBLEMA A RESOLVER
    //
    //   let flash: {
    //     name: string;
    //     age?: number;
    //     powers: string[];
    //     getName?: () => string;
    //   } = {
    //     name: 'Barry Allen',
    //     age: 24,
    //     powers: ['Super velocidad', 'Viajar en el tiempo'],
    //   };
    //   let superman: {
    //     name: string;
    //     age?: number;
    //     powers: string[];
    //     getName?: () => string;
    //   } = {
    //     name: 'Clark Kent',
    //     age: 24,
    //     powers: ['Super fuerza'],
    //   };
    //SOLUCION
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 24,
        powers: ['Super fuerza'],
    };
})();
