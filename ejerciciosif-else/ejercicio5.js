let fisica = parseFloat(prompt('Ingrese Física:'));
let quimica = parseFloat(prompt('Ingrese Química:'));
let biologia = parseFloat(prompt('Ingrese Biología:'));
let matematicas = parseFloat(prompt('Ingrese Matemáticas:'));
let informatica = parseFloat(prompt('Ingrese Informática:'));

let total = fisica + quimica + biologia + matematicas + informatica;
let porcentaje = (total / 50) * 100;
let calificacion;

if (porcentaje > 80) {
    calificacion = "Excelente";
} else if (porcentaje >= 60) {
    calificacion = "Buena";
} else {
    calificacion = "Mala";
}

alert(`Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`);
