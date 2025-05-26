const codigosLibros: number[] = [10, 25, 60, 45, 80, 15, 70];
const codigosMayores: number[] = codigosLibros.filter((codigo: number) => codigo > 50);
console.log(codigosMayores); // [60, 80, 70]
