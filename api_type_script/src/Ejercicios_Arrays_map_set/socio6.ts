const socios: Set<number> = new Set([5001, 5002, 5003]);

const agregarSocio = (codigo: number): void => {
  socios.add(codigo);
};

agregarSocio(5004);
console.log(socios); // Set(4) { 5001, 5002, 5003, 5004 }
