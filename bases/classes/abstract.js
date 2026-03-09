"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    class Mutant {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        salvarMundo() {
            return `Mundo salvado`;
        }
    }
    class Villian extends Mutant {
        conquistarMundo() {
            return `Mundo conquistado`;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    console.log(wolverine);
    console.log(magneto);
    const printName = (character) => {
        console.log(character.name);
    };
    printName(wolverine);
})();
