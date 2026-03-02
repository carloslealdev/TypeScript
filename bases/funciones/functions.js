"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName(); //La inferencia de TS arroja que heroName es un string
})();
