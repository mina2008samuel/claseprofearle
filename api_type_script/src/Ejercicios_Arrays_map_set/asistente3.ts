const asistentes: Map<number, string> = new Map([
  [1, "Ana"],
  [2, "Luis"]
]);

const agregarAsistente = (map: Map<number, string>, codigo: number, nombre: string): void => {
  map.set(codigo, nombre);
};

agregarAsistente(asistentes, 3, "Sofía");

console.log(asistentes); // Map(3) { 1 => 'Ana', 2 => 'Luis', 3 => 'Sofía' }
