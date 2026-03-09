(() => {
  //EL PROBLEMA
  //
  //Cuando una interfaz tiene niveles muy anidados entonces es recomedable crear
  //nuevas interfaces

  //   interface Client {
  //     name: string;
  //     age?: number;
  //     address: {
  //         id: number,
  //         zip: string,
  //         city: string
  //     }
  //   }

  //LA SOLUCION
  //
  //Interfaces separadas y específicas

  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress: (zip: string, city: string) => string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
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
