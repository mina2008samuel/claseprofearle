function verificarCarroAlquilado() {
    let carroalquilado = true;
    let nombrecarro = "mazda";

    let mensaje = carroalquilado ? `El carro con el nombre ${nombrecarro} está alquilado` : `El carro con el nombre ${nombrecarro} no está alquilado`;
    console.log(mensaje);
}

verificarCarroAlquilado();