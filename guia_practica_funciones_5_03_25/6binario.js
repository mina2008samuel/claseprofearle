// 6. Convertir un número decimal a binario
const decimalABinario = (num) => {
    if (!Number.isInteger(num) || num < 0) return "Debe ser un número entero positivo.";
    
    return num.toString(2);
};

console.log(decimalABinario(10));  // Output: "1010"
console.log(decimalABinario(25));  // Output: "11001"
console.log(decimalABinario(12));   // Output: "0"
