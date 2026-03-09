"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    class Avenger {
        name;
        team;
        realName;
        static avgAge = 35;
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} - (${this.team})`;
        }
    }
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman);
    console.log(antman.bio());
    console.log(Avenger.avgAge);
})();
