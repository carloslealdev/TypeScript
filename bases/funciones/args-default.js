"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
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
