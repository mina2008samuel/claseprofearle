// 8. Generar un número aleatorio en un rango dado
const numeroAleatorio = (min, max) => {
    if (!Number.isInteger(min) || !Number.isInteger(max) || min >= max) {
        return "Los valores deben ser enteros y min debe ser menor que max.";
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(numeroAleatorio(1, 10)); 
console.log(numeroAleatorio(20, 50));
console.log(numeroAleatorio(100, 200));