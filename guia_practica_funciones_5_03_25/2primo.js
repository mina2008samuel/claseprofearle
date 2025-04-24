const esPrimo = (num) => {
    // Verificar si el número es menor que 2 (los números menores que 2 no son primos)
    if (num < 2) {
        return false;
    }

    // Verificar si el número es 2 (el único número par primo)
    if (num === 2) {
        return true;
    }

    // Verificar si el número es par
    if (num % 2 === 0) {
        return false;
    }

    // Verificar si el número es divisible por cualquier número impar entre 3 y la raíz cuadrada del número
    const limite = Math.sqrt(num);
    for (let i = 3; i <= limite; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    // Si no es divisible por ningún número, entonces es primo
    return true;
};

// Pruebas
console.log(esPrimo(7));  // Output: true
console.log(esPrimo(10)); // Output: false
console.log(esPrimo(11)); // Output: true
console.log(esPrimo(9));  // Output: false
console.log(esPrimo(1));  // Output: false
