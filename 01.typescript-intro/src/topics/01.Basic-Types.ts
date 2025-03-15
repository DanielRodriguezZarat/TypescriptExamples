const nombre: string = "Daniel";

const numberString: number | string = "Esto es 14";

let numberLetter: number | "Rocky" = 0;

numberLetter = "Rocky";

let boleanType: boolean = true;

console.log(
  `Esto es un string ${nombre}. 
  Esto es una constante de tipo number y string ${numberString}.
  Esto es una variable de tipo número pero que acepta la palabra ROCKY ${numberLetter}. 
  Y esto es una variable de tipo Boolean ${boleanType}`
);

export {};
