const calcularFactorial = (num) => {
    // Verificar si el número es positivo
    if (num < 0) {
        return "El número debe ser positivo.";
    }
    // Verificar si el número es 0
    else if (num === 0) {
        return 1;
    }
    // Calcular el factorial
    else {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
};

console.log(calcularFactorial(5)); // 120
