function calcularAyuda() {
    let genero = prompt('Ingrese género (femenino/masculino):').toLowerCase();
    let edad = parseInt(prompt('Ingrese edad:'));
    let ayuda = genero === "femenino" ? (edad > 50 ? 120000 : edad >= 30 ? 100000 : 0) : genero === "masculino" ? 40000 : "Dato inválido";
    alert(`El valor de ayuda mensual es: $${ayuda}.`);
}