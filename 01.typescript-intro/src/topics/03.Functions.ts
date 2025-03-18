//La función sumarNum recibe dos parametros tipo number y devuelve un valor tipo number
function sumarNum(num1: number, num2: number): number {
  return num1 + num2;
}

//Lambda functions(funciones de flecha)
//Esta función puede recibir 3 argumentos, uno es obligatorio, otro es opcional y si el ultimo parametro no se le da un valor sera 2
const sumarElementos = (
  num1: number,
  num2?: number,
  num3: number = 2
): string => {
  return `La suma de ${num1} y ${num3} es ${num1 + num3}`;
};

// const suma = sumarNum(10, 2);
// const suma2 = sumarElementos(1);

// console.log(suma);
// console.log(suma2);

// Dentro de los parametros de una interfaz podemos agregar que esppera una función
// y que esta retorne un valor, como por ejemplo boolean, number o string
interface Personaje {
  name: string;
  heal: number;
  showHeal: () => void;
}

// Declaramos la función que requiere dos parametros
const vida = (personaje: Personaje, vidaExtra: number) => {
  // El personaje se le añade la vida extra
  personaje.heal += vidaExtra;
  personaje.showHeal();
};

// Declaramos nuestro personaje, con un valor de 100 que se incrementara en 10 y
// el showHeal para mostrar la vida del personaje
const personaje1 = {
  name: "Daniel",
  heal: 100,
  showHeal: () => {
    console.log(`La vida total del personaje es de ${personaje1.heal}`);
  },
};

vida(personaje1, 10);
vida(personaje1, 10);
