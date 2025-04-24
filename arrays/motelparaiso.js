let habitaciones = [0, 1, 1, 1, 1];

const ocupaciones = () => {
    let ocupacion = "Habitaciones:\n";
    for (let i = 0; i < habitaciones.length; i++) {
        ocupacion += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "Desocupada" : "Ocupada"}\n`;
    }
    alert(ocupacion);
};

const reservas = (n) => {
    if (n < 1 || n > 5) {
        alert("No poseemos este número de habitación en este hotel, por favor digite un número entre (1-5)");
    } else if (habitaciones[n - 1] === 1) {
        alert(`La habitación ${n} se encuentra Ocupada...`);
    } else {
        alert(`La habitación ${n} se encuentra Desocupada...\nLa reserva se realizó con éxito...`);
        habitaciones[n - 1] = 1;
    }
};

const liberar = (n) => {
    if (n < 1 || n > 5) {
        alert("No poseemos ese valor de habitación en este hotel, por favor digite un número entre (1-5)");
    } else if (habitaciones[n - 1] === 0) {
        alert(`La habitación ${n} ya se encuentra Desocupada...`);
    } else {
        alert(`La habitación ${n} se ha Desocupado...`);
        habitaciones[n - 1] = 0;
    }
};

while (true) {
    let consulta = prompt("Digite:\n(1) para consultar disponibilidad\n(2) para realizar una reserva\n(3) para desocupar una habitación\n(4) para salir");
    
    if (consulta === null || consulta == 4) {
        alert("Gracias por usar el sistema de reservas. ¡Hasta pronto!");
        break;
    }

    consulta = parseInt(consulta);

    if (consulta === 1) {
        ocupaciones();
    } else if (consulta === 2) {
        let n = parseInt(prompt("Bienvenido... Digite cuál es la habitación que desea (1 - 5)"));
        if (!isNaN(n)) reservas(n);
    } else if (consulta === 3) {
        let n = parseInt(prompt("Bienvenido... Digite cuál es la habitación que desea Desocupar (1 - 5)"));
        if (!isNaN(n)) liberar(n);
    } else {
        alert("Opción inválida. Por favor, ingrese un número válido.");
    }
}
