import { Product, taxCalculate } from "./06-function-destructuring";

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

const [total, totalTax] = taxCalculate({ products: shopingCart, tax: 0.25 });

console.log(`Total: ${total}, totalTax: ${totalTax}`);
