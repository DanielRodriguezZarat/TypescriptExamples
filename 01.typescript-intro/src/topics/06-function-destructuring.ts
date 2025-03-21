interface Product {
  descripcion: string;
  price: number;
}

const MacMini: Product = {
  descripcion: "Mac Mini M1 de Apple",
  price: 5000,
};

const XboxSeriesS: Product = {
  descripcion: "Xbox Series S de 1 TB de almacenamiento",
  price: 12000,
};
interface Options {
  tax: number;
  products: Product[];
}

const taxCalculate = (options: Options): number[] => {
  let total = 0;

  options.products.forEach((element) => {
    total += element.price;
  });
  return [total, total * options.tax];
};

const shopingCart = [MacMini, XboxSeriesS];
const tax = 0.15;

const res = taxCalculate({ tax, products: shopingCart });

console.log(res[0], res[1]);
