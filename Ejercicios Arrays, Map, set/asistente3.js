const asistentes = new Map([[1, "Ana"], [2, "Luis"]]);
const agregarAsistente = (map, codigo, nombre) => map.set(codigo, nombre); //para setiar un mapa, intercanbiar un dato, agregar un dato en una posicion
agregarAsistente(asistentes, 3, "Sofía");
console.log(asistentes); // Map(3) { 1 => 'Ana', 2 => 'Luis', 3 => 'Sofía' }
