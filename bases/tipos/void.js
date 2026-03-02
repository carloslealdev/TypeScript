"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    //Void indica que no hay valor de retorno
    function callBatman() {
        // return 1 // Esto genera conflicto porque estoy especificando que el valor de retorno de la función es void
    }
    const callSuperman = () => { };
    const a = callBatman();
    console.log(a);
})();
