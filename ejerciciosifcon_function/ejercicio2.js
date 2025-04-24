function verificarParidad() {
    let numero = parseInt(prompt('Ingrese número:'));
    alert(numero % 2 === 0 ? "El número es par" : "El número es impar");
}