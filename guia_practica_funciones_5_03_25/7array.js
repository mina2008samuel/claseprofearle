// 7. Encontrar el número más grande en un array
const numeroMasGrande = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return "Debe ingresar un array con números.";
    
    return Math.max(...arr);
};

console.log(numeroMasGrande([3, 10, 5, 8])); // Output: 10
console.log(numeroMasGrande([-5, -2, -8, -1])); // Output: -1
console.log(numeroMasGrande([100, 200, 50, 300])); // Output: 300