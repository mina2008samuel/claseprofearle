let luces = ["🔴 Rojo", "🟡 Amarillo", "🟢 Verde"];
let mensajes = {"🔴 Rojo": "Detenerse", "🟡 Amarillo": "Prepararse", "🟢 Verde": "Avanzar"};
let index = 0;
let intervalo = null;

function cambiarLuz() {
    console.clear(); // Limpiar la consola en cada cambio
    console.log("SEMAFORO");
    

    // Mostrar el estado del semáforo
    luces.forEach((luz, i) => {
        if (i === index) {
            console.log(`${luz} - ${mensajes[luz]}`);
        } else {
            console.log("⚫ ");
        }
    });

    // Cambiar al siguiente color
    index = (index + 1) % luces.length;
}

function iniciarSemaforo() {
    if (intervalo) return; // Si ya está encendido, no hacer nada
    console.log("Semáforo encendido...");
    cambiarLuz(); // Mostrar la primera luz
    intervalo = setInterval(cambiarLuz, 2000); // Cambiar cada 2 segundos
}

function detenerSemaforo() {
    if (!intervalo) return; // Si ya está apagado, no hacer nada
    clearInterval(intervalo);
    intervalo = null;
    console.clear();
    console.log("Semáforo apagado.");
}

// Interfaz de usuario en consola
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarOpciones() {
    console.log("\nOpciones:");
    console.log("1. Encender semáforo");
    console.log("2. Apagar semáforo");
    console.log("3. Salir");
    readline.question("Elige una opción: ", (opcion) => {
        if (opcion === "1") {
            iniciarSemaforo();
        } else if (opcion === "2") {
            detenerSemaforo();
        } else if (opcion === "3") {
            detenerSemaforo();
            readline.close();
            return;
        }
        mostrarOpciones(); // Volver a mostrar opciones
    });
}

// Iniciar menú en la consola
mostrarOpciones();
