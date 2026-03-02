"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    //Los argumentos por defecto son argumentos obligatorios y no pueden ir despues de
    //argumentos opcionales
    //Los argumentos opcionales siempre van al final
    const fullName = (upper = false, firstName, lastName) => {
        if (upper) {
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '----'}`;
        }
    };
    const name = fullName(true, 'Carlos');
    console.log({ name });
})();
