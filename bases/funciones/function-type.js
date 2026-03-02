"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo está salvado';
    let myFunction; //Aquí myFunction es de tipo any
    //   let myFunction: (x: number, y: number) => number; //la declaración correcta para el caso de addNumbers
    //   let myFunction: (a: string) => string; //la declaración correcta para el caso de greet
    //   let myFunction: () => string; //la declaración correcta para el caso de saveTheWorld
    myFunction = 10;
    console.log(myFunction);
    //Recordemos que JS y por lo tanto en TS los objetos pasan por referencia
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Carlos'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
