// Esta función no tiene un tipo de dato definido de lo que recibe por lo que
// agregamos generics después del nombre de la función
export function whatsMyType<T>(argument: T): T {
  return argument;
}
// Declaramos el generics al instanciar la función describiendo el dato que recibe en el argumento
const myArgumentString = whatsMyType<string>("Perrillas bonitas");
const myArgumentNumber = whatsMyType<number>(777);
const myArgumentArray = whatsMyType<number[]>([12, 13, 56]);

console.log(myArgumentString);
console.log(myArgumentNumber);
console.log(myArgumentArray);
