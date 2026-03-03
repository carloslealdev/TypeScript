"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    };
    const capAmerica = {
        name: 'Capitan America',
        weapon: 'Shield',
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir',
    };
    const avengers = [ironman, thor, capAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name);
    }
})();
