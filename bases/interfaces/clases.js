"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    class Mutant {
        age;
        name;
        realName;
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${this.name} -  ${this.realName}`;
        }
    }
})();
