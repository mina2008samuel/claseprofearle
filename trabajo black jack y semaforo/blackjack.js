let jugadores = ["Jugador 1", "Jugador 2"];
let puntajes = { "Jugador 1": 0, "Jugador 2": 0 };
let turno = 1;
let jugadorActual = 0;

document.getElementById("turno").innerText = `Turno ${turno} - ${jugadores[jugadorActual]}`;

document.getElementById("jugar").addEventListener("click", () => {
    jugarTurno();
});

document.getElementById("retirarse").addEventListener("click", () => {
    document.getElementById("resultado").innerText = `${jugadores[jugadorActual]} se retira con ${puntajes[jugadores[jugadorActual]]} puntos.`;
    siguienteTurno();
});

function jugarTurno() {
    let carta = Math.floor(Math.random() * 11) + 1;
    puntajes[jugadores[jugadorActual]] += carta;
    document.getElementById(`puntos-jugador${jugadorActual + 1}`).innerText = `${jugadores[jugadorActual]}: ${puntajes[jugadores[jugadorActual]]} puntos`;

    if (puntajes[jugadores[jugadorActual]] > 21) {
        document.getElementById("resultado").innerText = `${jugadores[jugadorActual]} se pasó de 21 y queda eliminado.`;
        siguienteTurno();
    } else {
        siguienteTurno();
    }
}

function siguienteTurno() {
    jugadorActual = (jugadorActual + 1) % 2;
    if (jugadorActual === 0) turno++;

    if (turno > 3) {
        determinarGanador();
    } else {
        document.getElementById("turno").innerText = `Turno ${turno} - ${jugadores[jugadorActual]}`;
        document.getElementById("retirarse").classList.remove("hidden"); // Asegúrate de que el botón de retirarse esté visible
    }
}

function determinarGanador() {
    let ganador = Object.entries(puntajes).filter(([_, puntos]) => puntos <= 21).sort((a, b) => b[1] - a[1])[0];
    document.getElementById("resultado").innerText = ganador ? `El ganador es ${ganador[0]} con ${ganador[1]} puntos.` : "No hay ganador.";
    document.getElementById("jugar").disabled = true;
    document.getElementById("retirarse").disabled = true;
}