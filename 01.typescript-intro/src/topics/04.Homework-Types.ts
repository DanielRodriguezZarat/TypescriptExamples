/*
    ===== Código de TypeScript =====
*/
//Creamos una interfaz para el objeto superHeore
interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string;
}

// Como en la interfaz SuperHero tiene como argumentos un objeto podemos abstraerlo y
// convertilo en otra interfaz
interface Address {
  street: string;
  country: string;
  city: string;
}

// Declaramos el objeto superHero con el tipado hecho
const superHeroe: SuperHero = {
  name: "Spiderman",
  age: 30,
  address: {
    street: "Main St",
    country: "USA",
    city: "NY",
  },
  showAddress() {
    return this.name + ", " + this.address.city + ", " + this.address.country;
  },
};

const address = superHeroe.showAddress();
console.log(address);
