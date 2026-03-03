"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
    let Roles;
    (function (Roles) {
        Roles["admin"] = "Administrador";
        Roles["worker"] = "Trabajador";
    })(Roles || (Roles = {}));
    const myRole = Roles.admin;
    console.log(myRole);
})();
