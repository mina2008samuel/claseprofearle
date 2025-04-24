const puntajes = [85, 92, 78, 95, 88];
const mapPuntajes = new Map(puntajes.map((puntaje, indice) => [indice, puntaje]));
mapPuntajes.set(5, 90);
console.log(mapPuntajes); // Map(6) { 0 => 85, 1 => 92, 2 => 78, 3 => 95, 4 => 88, 5 => 90 }
