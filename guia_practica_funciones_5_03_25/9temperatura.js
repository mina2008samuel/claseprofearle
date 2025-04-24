// 9. Convertir una temperatura de Celsius a Fahrenheit
const celsiusAFahrenheit = (celsius) => {
    if (typeof celsius !== "number") return "Debe ingresar un número.";
    
    return (celsius * 9/5) + 32;
};

console.log(celsiusAFahrenheit(0));   // Output: 32
console.log(celsiusAFahrenheit(25));  // Output: 77
console.log(celsiusAFahrenheit(-10)); // Output: 14