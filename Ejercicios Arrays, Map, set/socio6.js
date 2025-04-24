const socios = new Set([5001, 5002, 5003]);
const agregarSocio = codigo => socios.add(codigo); // añadir un elemento al final
agregarSocio(5004);
console.log(socios); // Set(4) { 5001, 5002, 5003, 5004 }
