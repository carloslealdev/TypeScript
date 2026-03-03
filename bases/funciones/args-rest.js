"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const fullName = (firsName, ...restArgs) => {
        return `${firsName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
