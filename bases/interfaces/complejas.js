"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const client = {
        name: 'Carlos',
        age: 31,
        address: {
            id: 123,
            zip: 'ky2 sud',
            city: 'Ottawa',
        },
        getFullAddress(zip, city) {
            return `${this.address.city} - ${this.address.zip}`;
        },
    };
    console.log(client);
})();
