let genero = prompt('Ingrese género (femenino/masculino):').toLowerCase();
let edad = parseInt(prompt('Ingrese edad:'));
let ayuda;

if (genero === "femenino") {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30) {
        ayuda = 100000;
    } else {
        ayuda = 0;
    }
} else if (genero === "masculino") {
    ayuda = 40000;
} else {
    ayuda = "Dato inválido"; // Para manejar entradas incorrectas
}

alert(`El valor de ayuda mensual es: $${ayuda}.`);

