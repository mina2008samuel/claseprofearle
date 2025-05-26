const preciosProductos: number[] = [500, 1200, 300, 1500, 800];
const hayCaros: boolean = preciosProductos.some((precio: number) => precio > 1000);
console.log(hayCaros); // true
