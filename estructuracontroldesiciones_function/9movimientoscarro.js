function verificarMovimientoCarro() {
    let avanzaraladerrecha = true;
    let avanzaralaizquierda = false;
    let darreversa = false;

    if (avanzaraladerrecha) {
        console.log("El carro está avanzando hacia la derecha");
    } else if (avanzaralaizquierda) {
        console.log("El carro está avanzando hacia la izquierda");
    } else if (darreversa) {
        console.log("El carro está dando reversa");
    } else {
        console.log("Movimiento no congruente");
    }
}

verificarMovimientoCarro();