const preciosProductos = [500, 1200, 300, 1500, 800];
const hayCaros = preciosProductos.some(precio => precio > 1000);
console.log(hayCaros); // true
