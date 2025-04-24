function calcularPromedio() {
    let fisica = parseFloat(prompt('Ingrese Física:'));
    let quimica = parseFloat(prompt('Ingrese Química:'));
    let biologia = parseFloat(prompt('Ingrese Biología:'));
    let matematicas = parseFloat(prompt('Ingrese Matemáticas:'));
    let informatica = parseFloat(prompt('Ingrese Informática:'));
    let total = fisica + quimica + biologia + matematicas + informatica;
    let porcentaje = (total / 50) * 100;
    let calificacion = porcentaje > 80 ? "Excelente" : porcentaje >= 60 ? "Buena" : "Mala";
    alert(`Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`);
}
