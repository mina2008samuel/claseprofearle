const sumaDigitos = num => {
    const numString = Math.abs(num).toString();
    let suma = 0;
    for (let i = 0; i < numString.length; i++) {
        const digito = parseInt(numString[i]);
        suma += digito;
    }
    return suma;
}

console.log(sumaDigitos(12345)); // Output: 15
console.log(sumaDigitos(-67));   // Output: 13
console.log(sumaDigitos(0));     // Output: 0
