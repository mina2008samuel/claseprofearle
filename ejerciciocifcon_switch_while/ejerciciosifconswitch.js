let repetir = true;

while (repetir) {
    let opcion = parseInt(prompt("Seleccione un ejercicio (1-14) o 0 para salir:"));

    switch (opcion) {
        case 1:
            let nombre = prompt('Ingrese nombre:');
            let horas = parseInt(prompt('Ingrese horas:'));
            let tarifa = horas <= 10 ? 30000 : 33000;
            let salario = horas * tarifa;
            alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);
            break;

        case 2:
            let numero = parseInt(prompt('Ingrese número:'));
            alert(numero % 2 === 0 ? "El número es par" : "El número es impar");
            break;

        case 3:
            let tipoLavadora = parseInt(prompt('Ingrese tipo de lavadora (1.lavadora grande o 2.lavadora pequeña):'));
            let cantidad = parseInt(prompt('Ingrese cantidad:'));
            let horasAlquiler = parseInt(prompt('Ingrese horas de alquiler:'));
            let tarifaLavadora = tipoLavadora === 1 ? 4000 : 3000;
            let total = cantidad * horasAlquiler * tarifaLavadora;
            if (cantidad > 3) total *= 0.97;
            alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horasAlquiler} horas: $${total}`);
            break;

        case 4:
            let numero4 = parseInt(prompt('Ingrese número:'));
            alert(numero4 % 2 === 0 ? "El número es par" : "El número es impar");
            break;

        case 5:
            let fisica = parseFloat(prompt('Ingrese Física:'));
            let quimica = parseFloat(prompt('Ingrese Química:'));
            let biologia = parseFloat(prompt('Ingrese Biología:'));
            let matematicas = parseFloat(prompt('Ingrese Matemáticas:'));
            let informatica = parseFloat(prompt('Ingrese Informática:'));
            let totalNotas = fisica + quimica + biologia + matematicas + informatica;
            let porcentaje = (totalNotas / 50) * 100;
            let calificacion = porcentaje > 80 ? "Excelente" : porcentaje >= 60 ? "Buena" : "Mala";
            alert(`Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`);
            break;

        case 6:
            let a = parseInt(prompt('Ingrese número 1:'));
            let b = parseInt(prompt('Ingrese número 2:'));
            let c = parseInt(prompt('Ingrese número 3:'));
            alert(`El número mayor es ${Math.max(a, b, c)}`);
            break;

        case 7:
            let genero = prompt('Ingrese género (femenino/masculino):').toLowerCase();
            let edad = parseInt(prompt('Ingrese edad:'));
            let ayuda = genero === "femenino" ? (edad > 50 ? 120000 : edad >= 30 ? 100000 : 0) : genero === "masculino" ? 40000 : "Dato inválido";
            alert(`El valor de ayuda mensual es: $${ayuda}.`);
            break;

        case 8:
            let dias = parseInt(prompt('Ingrese la cantidad de días (15, 30 o 90):'));
            let costo = dias === 15 ? 18000 : dias === 30 ? 35000 : dias === 90 ? 86000 : "Dato inválido";
            alert(`El costo por ${dias} días es: $${costo}`);
            break;

        case 9:
            let angulo1 = parseFloat(prompt('Ingrese ángulo 1:'));
            let angulo2 = parseFloat(prompt('Ingrese ángulo 2:'));
            let angulo3 = parseFloat(prompt('Ingrese ángulo 3:'));
            alert(angulo1 + angulo2 + angulo3 === 180 ? "El triángulo es válido" : "El triángulo no es válido");
            break;

        case 10:
            let copias = parseInt(prompt('Ingrese copias:'));
            let precio = copias >= 1000 ? 50 : copias >= 750 ? 80 : copias >= 500 ? 100 : 120;
            alert(`Precio por copia: $${precio}, Precio total: $${precio * copias}`);
            break;

        case 11:
            let pitido = prompt('¿Escucha un pitido? (si/no):').toLowerCase();
            let discoGira = prompt('¿El disco gira? (si/no):').toLowerCase();
            alert(pitido === "si" && discoGira === "si" ? "Póngase en contacto con el técnico de apoyo" :
                  pitido === "si" && discoGira === "no" ? "Verificar contactos de la unidad" :
                  pitido === "no" && discoGira === "no" ? "Traiga la computadora para repararla en la central" :
                  "Compruebe las conexiones de altavoces");
            break;

        case 12:
            let modelo = parseInt(prompt('Ingrese modelo:'));
            let defectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
            alert(defectuosos.includes(modelo) ? "El automóvil está defectuoso, llevar a garantía" : "Su automóvil no está defectuoso");
            break;

        case 13:
            let operador = prompt('Ingrese operador (Claro, Tigo o Movistar):').trim();
            let minutosInternacionales = parseInt(prompt('Ingrese minutos internacionales consumidos:'));
            let tarifas = {
                Tigo: { cargoFijo: 45000, valorMinuto: 200, paqueteDatos: 12000 },
                Claro: { cargoFijo: 30000, valorMinuto: 100, paqueteDatos: 18000 },
                Movistar: { cargoFijo: 40000, valorMinuto: 250, paqueteDatos: 8000 }
            };
            if (tarifas[operador]) {
                let { cargoFijo, valorMinuto, paqueteDatos } = tarifas[operador];
                let totalCosto = cargoFijo + (valorMinuto * minutosInternacionales) + paqueteDatos;
                alert(`Costo total para ${operador} con ${minutosInternacionales} minutos internacionales: $${totalCosto}`);
            } else {
                alert('Operador no válido.');
            }
            break;

        case 14:
            let tamano = prompt('Ingrese tamaño (pequeño/grande):');
            let costoBase = tamano === "pequeño" ? 6000 : 12000;
            alert(`Costo total del sándwich: $${costoBase}`);
            break;

        case 0:
            repetir = false;
            break;

        default:
            alert("Opción no válida.");
    }
}