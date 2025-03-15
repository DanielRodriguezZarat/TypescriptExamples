// Solo recibe un array de string, si se le agrega un numero en el array muestra un error
const people: string[] = ["Tyrion", "John Snow", "Cersi", "Jeimy"];

//Crea una interfaz para saber de que tipo tienen que venir los valores en el objeto
interface House {
  name: string;
  sons: number;
  nameSons: string[];
  country?: string;
}

//Respetamos los tipados del objeto, de lo contrario nos mostrara un error
const house: House = {
  name: "Lannister",
  sons: 3,
  nameSons: ["Tyrion", "Cersi", "Jeimy"],
};

console.log(house);

// Debido a que country es un parametro opcional se puede asignar posteriormente un valor
house.country = "Westeros";

console.log(house);
