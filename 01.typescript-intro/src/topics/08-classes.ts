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

// Hacemos un extends de la clase Person para obtener información del constructor
export class Escuela extends Person {
  constructor(
    public turno: string,
    public grado: string,
    public grupo: string
  ) {
    //Con la palabra super hacemos referencia al constructor a la que se extiende
    super("Danilos", "ROZD000502HTLDRNA9");
  }
}

const danilos = new Escuela("Matutino", "Primero", "A");

console.log(danilos);
