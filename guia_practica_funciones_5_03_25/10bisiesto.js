// 10. Verificar si un año es bisiesto
const esBisiesto = (year) => {
    if (!Number.isInteger(year) || year <= 0) return "Ingrese un año válido.";
    
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

console.log(esBisiesto(2024)); // Output: true
console.log(esBisiesto(2023)); // Output: false
console.log(esBisiesto(2000)); // Output: true
console.log(esBisiesto(1900)); // Output: false