import { Pokemon } from './decorators/pokemon';

const charmander = new Pokemon('Charmander');

//Intentamos modificar la clase Pokemon añadiendo una nueva propiedad
//Sin embargo nuestro decorador (./decorators/pokemon.ts) lo evita y lanza un error
// (Pokemon.prototype as any).customName = 'Pikachu';

console.log(charmander);
charmander.savePokemonToDB(1125);
