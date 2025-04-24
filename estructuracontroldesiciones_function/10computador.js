function verificarComputadora() {
    let computadoraEncendida = true;
    let horasJugadas = 5;

    if (computadoraEncendida) {
        console.log(`El computador está encendido`);

        if (horasJugadas === 1) {
            console.log(`Llevas solo una hora de juego.`);
        } else if (horasJugadas > 3) {
            console.log(`¡Descanse! Ha excedido las horas de juego.`);
        }
    } else {
        console.log(`Encienda su computador.`);
    }
}

verificarComputadora();