"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activos: true,
        poder: 1500.1234234,
    };
    const { ironman, poder } = avengers;
    console.log({ ironman });
    const printAvenger = ({ vision }) => {
        console.log(vision);
    };
    printAvenger(avengers);
    const avengersArr = ['Hulk', 'Thor', 'Spiderman'];
    const [, thor] = avengersArr;
    console.log(thor?.toUpperCase());
})();
