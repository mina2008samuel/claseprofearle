


//1
let nombre = prompt('Ingrese nombre:');
let horas = prompt('Ingrese horas:');
let tarifa;
if (horas <= 10) {
    tarifa = 30000;
} else {
    tarifa = 33000;
}
let salario = horas * tarifa;
alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);

//2
let numero = prompt('Ingrese numero:');
if (numero % 2 === 0) {
    alert("El número es par");
} else {
    alert("El número es impar");
}

//3
let tipoLavadora = prompt('Ingrese tipoLavadora:');
let cantidad = prompt('Ingrese cantidad:');
let horasAlquiler = prompt('Ingrese horasAlquiler:');
let tarifaLavadora = tipoLavadora === 1 ? 4000 : 3000;
let total = cantidad * horasAlquiler * tarifaLavadora;
if (cantidad > 3) {total *= 0.97;
}
alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horasAlquiler} horas: $${total}`);

//4
let numero = prompt('Ingrese numero:');
if (numero % 2 === 0) {
    alert("El número es par");
} else {
    alert("El número es impar");
}

//5
let fisica = parseFloat(prompt('Ingrese Física:'));
let quimica = parseFloat(prompt('Ingrese Química:'));
let biologia = parseFloat(prompt('Ingrese Biología:'));
let matematicas = parseFloat(prompt('Ingrese Matemáticas:'));
let informatica = parseFloat(prompt('Ingrese Informática:'));

let total = fisica + quimica + biologia + matematicas + informatica;
let porcentaje = (total / 50) * 100;
let calificacion;

if (porcentaje > 80) {
    calificacion = "Excelente";
} else if (porcentaje >= 60) {
    calificacion = "Buena";
} else {
    calificacion = "Mala";
}

alert(`Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`);

//6
let a = prompt('Ingrese numero1:');
let b = prompt(`ingrese numero 2`);
let c = prompt(`ingrese numero 3`)
let mayor  = Math.max(a, b, c);
alert(`El número mayor es ${mayor}`);

//7
let genero = prompt('Ingrese género (femenino/masculino):').toLowerCase();
let edad = parseInt(prompt('Ingrese edad:'));
let ayuda;

if (genero === "femenino") {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30) {
        ayuda = 100000;
    } else {
        ayuda = 0;
    }
} else if (genero === "masculino") {
    ayuda = 40000;
} else {
    ayuda = "Dato inválido"; // Para manejar entradas incorrectas
}

alert(`El valor de ayuda mensual es: $${ayuda}.`);

//8
let dias = parseInt(prompt('Ingrese la cantidad de días (15, 30 o 90):'));
let costo;

if (dias === 15) {
    costo = 18000;
} else if (dias === 30) {
    costo = 35000;
} else if (dias === 90) {
    costo = 86000;
} else {
    costo = "Dato inválido"; // Manejo de entradas incorrectas
}

alert(`El costo por ${dias} días es: $${costo}`);

//9
let angulo1 = parseFloat(prompt('Ingrese ángulo 1:'));
let angulo2 = parseFloat(prompt('Ingrese ángulo 2:'));
let angulo3 = parseFloat(prompt('Ingrese ángulo 3:'));

if (angulo1 + angulo2 + angulo3 === 180) {
    alert("El triángulo es válido");
} else {
    alert("El triángulo no es válido");
}

//10
let copias = prompt('Ingrese copias:');
let precio;
if (copias >= 1000) {
    precio = 50;
} else if (copias >= 750) {
    precio = 80;
} else if (copias >= 500) {
    precio = 100;
} else {
    precio = 120;
}
alert(`Precio por copia: $${precio}, Precio total: $${precio * copias}`);

//11
let pitido = prompt('¿Escucha un pitido? (si/no):').toLowerCase();
let discoGira = prompt('¿El disco gira? (si/no):').toLowerCase();

if (pitido === "si" && discoGira === "si") {
    alert("Póngase en contacto con el técnico de apoyo");
} else if (pitido === "si" && discoGira === "no") {
    alert("Verificar contactos de la unidad");
} else if (pitido === "no" && discoGira === "no") {
    alert("Traiga la computadora para repararla en la central");
} else {
    alert("Compruebe las conexiones de altavoces");
}

//12
let modelo = parseInt(prompt('Ingrese modelo:'));
let defectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

if (defectuosos.includes(modelo)) {
    alert("El automóvil está defectuoso, llevar a garantía");
} else {
    alert("Su automóvil no está defectuoso");
}

//13
let operador = prompt('Ingrese operador (Claro, Tigo o Movistar):').trim();
let minutosInternacionales = Number(prompt('Ingrese minutos internacionales consumidos:'), 10);
let paquetededtos = prompt(`quiere adquirir paquete de datos(si/no):`).trim()
let tarifas = {
    Tigo: { cargoFijo: 45000, valorMinuto: 200, paqueteDatos: 12000 },
    Claro: { cargoFijo: 30000, valorMinuto: 100, paqueteDatos: 18000 },
    Movistar: { cargoFijo: 40000, valorMinuto: 250, paqueteDatos: 8000 }
};

if (tarifas[operador] && !isNaN(minutosInternacionales) && minutosInternacionales >= 0) {
    let { cargoFijo, valorMinuto, paqueteDatos } = tarifas[operador];
    let totalCosto = cargoFijo + (valorMinuto * minutosInternacionales) + paqueteDatos;
    
    alert(`Costo total para ${operador} con ${minutosInternacionales} minutos internacionales: $${totalCosto}`);
} else {
    alert('Operador no válido o minutos ingresados incorrectamente.');
}

//14
let tamano = prompt('Ingrese tamano:');
let ingredientes = prompt('Ingrese ingredientes:');
let costoBase = tamano === "pequeño" ? 6000 : 12000;
let costoIngredientes = 0;
for (let ing of ingredientes) {
    if (ing !== "jalapeño") {
        costoIngredientes += ing === "queso" ? 2500 : 3000;
    }
}
alert(`Costo total del sándwich: $${costoBase + costoIngredientes}`);