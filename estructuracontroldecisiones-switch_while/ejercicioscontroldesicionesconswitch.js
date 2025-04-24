let opcion = parseInt(prompt("Ingrese un número de opción del 1 al 11:"));

while (opcion >= 1 && opcion <= 11) {
    switch (opcion) {
        case 1:
            let altitud = parseInt(prompt("Ingrese la altitud:"));
            alert(altitud >= 0 ? "Está a una altitud mayor a 0" : "Está a una altitud menor a 0");
            break;
        
        case 2:
            let dinero = parseInt(prompt("Ingrese la cantidad de dinero:"));
            alert(dinero > 0 ? "Tiene más de 0 pesos" : "Tiene menos de 0 pesos");
            break;
        
        case 3:
            let nombrecarro = prompt("Ingrese la marca del carro (Mazda, Nissan, Chevrolet):").toLowerCase();
            let carrosAlquilados = ["mazda", "nissan", "chevrolet"];
            alert(carrosAlquilados.includes(nombrecarro) ? `El carro con la marca ${nombrecarro} está alquilado` : `El carro con la marca ${nombrecarro} no está alquilado`);
            break;
        
        case 4:
            const facebook = prompt("Ingrese su usuario de Facebook:");
            const contraseña = prompt("Ingrese su contraseña:");
            alert(facebook === "samuelmina" && contraseña === "9999" ? `Señor usuario de Facebook con el nombre ${facebook}, bienvenido a Facebook` : `El usuario ${facebook} y la contraseña digitada son incorrectos`);
            break;
        
        case 5:
            let tipodeclima = prompt("Ingrese la estación del año:");
            switch (tipodeclima) {
                case "verano":
                    alert(`En el ${tipodeclima} hace calor`);
                    break;
                case "otoño":
                    alert(`En ${tipodeclima} el clima es cálido`);
                    break;
                case "primavera":
                    alert(`En la ${tipodeclima} el clima es neutral`);
                    break;
                case "invierno":
                    alert(`En el ${tipodeclima} hace mucho frío`);
                    break;
                default:
                    alert(`No se reconoce la estación: ${tipodeclima}`);
            }
            break;
        
        case 6:
            let bateriacelular = parseInt(prompt("Ingrese el porcentaje de batería:"));
            if (bateriacelular >= 15) {
                alert(`Usted tiene buena batería, su batería es del ${bateriacelular}%`);
            } else {
                alert(`Advertencia: Su batería es menor a 15%, actualmente está en ${bateriacelular}%`);
            }
            break;
        
        case 7:
            let cliente = prompt("Ingrese el tipo de cliente (niño/adulto):");
            alert(cliente === "niño" ? `Va a abordar los taxis cuyo último dígito sea 1 por ser ${cliente}.` : `Va a abordar los taxis cuyo último dígito sea 2 por ser ${cliente}.`);
            break;
        
        case 8:
            let salonIngresado = prompt("Ingrese el número de salón:");
            let numeroContratoIngresado = prompt("Ingrese el número de contrato:");
            let nombreDelTrabajador = prompt("Ingrese su nombre:");
            alert(salonIngresado === "2" && numeroContratoIngresado === "99" ? `${nombreDelTrabajador}, ¡bienvenido! Puede ingresar a su espacio de trabajo.` : "Acceso denegado, no puede pasar a su espacio de trabajo.");
            break;
        
        case 9:
            let direccion = prompt("Ingrese la dirección (derecha/izquierda/reversa):");
            if (direccion === "derecha") {
                alert("El carro está avanzando hacia la derecha");
            } else if (direccion === "izquierda") {
                alert("El carro está avanzando hacia la izquierda");
            } else if (direccion === "reversa") {
                alert("El carro está dando reversa");
            } else {
                alert("Movimiento no congruente");
            }
            break;
        
        case 10:
            let computadoraEncendida = confirm("¿Está encendida la computadora? (Aceptar para Sí, Cancelar para No)");
            if (computadoraEncendida) {
                let horasJugadas = parseInt(prompt("Ingrese las horas jugadas:"));
                alert(`El computador está encendido y llevas ${horasJugadas} horas de juego.`);
                if (horasJugadas > 3) {
                    alert("¡Descanse! Ha excedido las horas de juego.");
                }
            } else {
                alert("Encienda su computador.");
            }
            break;
        
        case 11:
            let clima = prompt("Ingrese el clima actual (soleado/nublado):");
            let ropaRecomendada = clima === "soleado" ? "ropa fresca" : clima === "nublado" ? "algo abrigado" : "ropa adecuada según la condición";
            alert(`El clima está ${clima}, se recomienda usar ${ropaRecomendada}.`);
            break;
    }
    opcion = parseInt(prompt("Ingrese un número de opción del 1 al 11 o cualquier otro valor para salir:"));
}
