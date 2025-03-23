//
export class Person {
  // Forma de declarar propiedades en una clase
  //   public name: string;
  //   private curp: string;

  // Así tambien podemos declarar las propiedades de una clase, añadirlas y asignarlas al contructor
  constructor(public name: string, private curp: string) {
    // Forma de asignarle los parametros del constructor a las propiedades de la clase
    // this.name = name
    // this.curp = curp
  }
}

const danilos = new Person("Danilos", "ROZD000502HTLDRNA9");

console.log(danilos);
