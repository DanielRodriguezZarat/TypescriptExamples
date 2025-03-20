// Creamos la interfaz AudioPlayer
interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

// Añadimos una interfaz dedicada a details
interface Details {
  author: string;
  year: number;
}

const newSong: AudioPlayer = {
  audioVolume: 9,
  songDuration: 4,
  song: "Problemon",
  details: {
    author: "Rauw Alejandro",
    year: 2018,
  },
};

// Hacemos destructuración de la propiedad audioVolume. A la propiedad song le añadimos un alias
// y hacemos destructuración del objeto dentro de nuestro objeto DETAILS
const { audioVolume, song: cancion, details } = newSong;
// Hacemos destructuración del objeto Details
const { author } = details;

console.log(
  `El volumen de la canción ${cancion} es ${audioVolume} y el autor es ${author}`
);
