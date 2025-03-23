// Importación de los modulos de otro archivo
import { Product, taxCalculate } from "./06-function-destructuring";

// Hacemos una constante de un array de la interfaz Product importada
const shopingCart: Product[] = [
  {
    descripcion: "Televisión LG",
    price: 8000,
  },
  {
    descripcion: "iPhone",
    price: 14000,
  },
];

// Destructuramos la respuesta de la función importada
const [total, totalTax] = taxCalculate({ products: shopingCart, tax: 0.25 });

console.log(`Total: ${total}, totalTax: ${totalTax}`);
