const productosVendidos: Set<number> = new Set([1001, 1002, 1003]);

const productoVendido = (codigo: number): boolean => {
  return productosVendidos.has(codigo);
};

console.log(productoVendido(1002)); // true
console.log(productoVendido(1004)); // false
