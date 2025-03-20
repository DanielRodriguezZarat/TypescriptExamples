let data: any = [
  {
    apellidoMaterno: "Zarate",
    apellidoPaterno: "Rodriguez",
    nombre: "Daniel",
    curp: "ROZD000502HTLDRNA9",
    evaluaciones: [
      {
        id_periodo_vigencia: 2,
        vigente: 0,
        calificacion: null,
        observacion: null,
      },
      {
        id_periodo_vigencia: 3,
        vigente: 0,
        calificacion: null,
        observacion: null,
      },
      {
        id_periodo_vigencia: 4,
        vigente: 1,
        calificacion: 10,
        observacion: "prueba",
      },
    ],
  },
  {},
];
let dataCalificacion: number = 0;
let noRegistrado: boolean = false;
let noValidado: boolean = false;
const prueba = () => {
  console.log(
    data[0].evaluaciones[2].vigente == 1,
    data[0].evaluaciones[2].calificacion
  );
};

prueba();
