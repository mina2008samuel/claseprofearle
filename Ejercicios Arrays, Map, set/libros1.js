const codigosLibros = [10, 25, 60, 45, 80, 15, 70];   //variable,condiciones o datos
const codigosMayores = codigosLibros.filter(codigo => codigo > 50);    
console.log(codigosMayores); // [60, 80, 70]
