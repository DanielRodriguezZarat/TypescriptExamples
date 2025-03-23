//
export class Person {
  // Forma de declarar propiedades en una clase
  //   public name: string;
  //   private curp: string;

  // Así tambien podemos declarar las propiedades de una clase, añadirlas y asignarlas al contructor
  constructor(
    public name: string,
    public apellido: string,
    private curp: string
  ) {
    // Forma de asignarle los parametros del constructor a las propiedades de la clase
    // this.name = name
    // this.curp = curp
  }
}

// Hacemos un extends de la clase Person para obtener información del constructor
export class Escuela {
  constructor(
    public turno: string,
    public grado: string,
    public grupo: string,
    // Para hacer herencia es mejor instanciarla como una propiedad de la escuela
    public estudiante: Person
  ) {
    //Con la palabra super hacemos referencia al constructor a la que se extiende
    //super("Danilos", "ROZD000502HTLDRNA9");
  }
}

// Instanciamos una clase de persona
const estudiante = new Person("Daniel", "Rodriguez", "ROZD000502HTLDRNA9");

// Se la añadirmos como parametros en la instancia de la clase Escuela
const danilos = new Escuela("Matutino", "Primero", "A", estudiante);

console.log(danilos);
