function validarTriangulo() {
    let angulo1 = parseFloat(prompt('Ingrese ángulo 1:'));
    let angulo2 = parseFloat(prompt('Ingrese ángulo 2:'));
    let angulo3 = parseFloat(prompt('Ingrese ángulo 3:'));
    alert(angulo1 + angulo2 + angulo3 === 180 ? "El triángulo es válido" : "El triángulo no es válido");
}