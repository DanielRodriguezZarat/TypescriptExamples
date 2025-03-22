// Creamos una interfaz para los productos
export interface Product {
  descripcion: string;
  price: number;
}

// Declaramos los productos
const MacMini: Product = {
  descripcion: "Mac Mini M1 de Apple",
  price: 5000,
};

const XboxSeriesS: Product = {
  descripcion: "Xbox Series S de 1 TB de almacenamiento",
  price: 12000,
};

// Creamos una interfaz para el parametro opciones
interface Options {
  tax: number;
  // products es un arreglo de products
  products: Product[];
}

// Declaramos una función con los aprametros de opciones y retorne un arreglo de numeros
export const taxCalculate = (options: Options): number[] => {
  // Destructuramos options
  const { products, tax } = options;
  let total = 0;

  // forEach para iterar cada elemento de products y destructuramos el price del element
  products.forEach(({ price }) => {
    // Sumamos el valor de total más el precio del producto
    total += price;
  });

  //Retornamos el total y el total más el tax
  return [total, total * tax];
};

// Declaramos los parametros
const shopingCart = [MacMini, XboxSeriesS];
const tax = 0.15;

// Llamamos a la función y destructuramos la respuesta
const [total, totalTax] = taxCalculate({ tax, products: shopingCart });

console.log(
  `El total por los productos es ${total}, más el IVA el total final seria ${totalTax}`
);
