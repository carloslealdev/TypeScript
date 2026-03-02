"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    //El símbolo de interrogación declara que un argumento es opcional
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '----'}`;
    };
    const name = fullName('Carlos');
    console.log({ name });
})();
