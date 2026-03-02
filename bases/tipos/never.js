"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    //never no es undefined
    //never Se utiliza para representar valores que nunca ocurren
    const error = (message) => {
        throw new Error(message);
    };
    error('Erroooor!');
    console.log('No me ejecuto'); //Esta línea no llega a ejecutarse
})();
