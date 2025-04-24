let angulo1 = parseFloat(prompt('Ingrese ángulo 1:'));
let angulo2 = parseFloat(prompt('Ingrese ángulo 2:'));
let angulo3 = parseFloat(prompt('Ingrese ángulo 3:'));

if (angulo1 + angulo2 + angulo3 === 180) {
    alert("El triángulo es válido");
} else {
    alert("El triángulo no es válido");
}
