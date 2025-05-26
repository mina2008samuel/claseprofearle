let repetir = true;

while (repetir) {
  const opcion = parseInt(prompt("Seleccione un ejercicio (1-14) o 0 para salir:") || "0");

  switch (opcion) {
    case 1: {
      const nombre = prompt('Ingrese nombre:') || "";
      const horas = parseInt(prompt('Ingrese horas:') || "0");
      const tarifa = horas <= 10 ? 30000 : 33000;
      const salario = horas * tarifa;
      alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);
      break;
    }

    case 2: {
      const numero = parseInt(prompt('Ingrese número:') || "0");
      alert(numero % 2 === 0 ? "El número es par" : "El número es impar");
      break;
    }

    case 3: {
      const tipoLavadora = parseInt(prompt('Ingrese tipo de lavadora (1.lavadora grande o 2.lavadora pequeña):') || "0");
      const cantidad = parseInt(prompt('Ingrese cantidad:') || "0");
      const horasAlquiler = parseInt(prompt('Ingrese horas de alquiler:') || "0");
      const tarifaLavadora = tipoLavadora === 1 ? 4000 : 3000;
      let total = cantidad * horasAlquiler * tarifaLavadora;
      if (cantidad > 3) total *= 0.97;
      alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horasAlquiler} horas: $${total}`);
      break;
    }

    case 4: {
      const numero4 = parseInt(prompt('Ingrese número:') || "0");
      alert(numero4 % 2 === 0 ? "El número es par" : "El número es impar");
      break;
    }

    case 5: {
      const fisica = parseFloat(prompt('Ingrese Física:') || "0");
      const quimica = parseFloat(prompt('Ingrese Química:') || "0");
      const biologia = parseFloat(prompt('Ingrese Biología:') || "0");
      const matematicas = parseFloat(prompt('Ingrese Matemáticas:') || "0");
      const informatica = parseFloat(prompt('Ingrese Informática:') || "0");
      const totalNotas = fisica + quimica + biologia + matematicas + informatica;
      const porcentaje = (totalNotas / 50) * 100;
      const calificacion = porcentaje > 80 ? "Excelente" : porcentaje >= 60 ? "Buena" : "Mala";
      alert(`Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`);
      break;
    }

    case 6: {
      const a = parseInt(prompt('Ingrese número 1:') || "0");
      const b = parseInt(prompt('Ingrese número 2:') || "0");
      const c = parseInt(prompt('Ingrese número 3:') || "0");
      alert(`El número mayor es ${Math.max(a, b, c)}`);
      break;
    }

    case 7: {
      const genero = prompt('Ingrese género (femenino/masculino):')?.toLowerCase() || "";
      const edad = parseInt(prompt('Ingrese edad:') || "0");
      let ayuda: number | string = 0;
      if (genero === "femenino") {
        ayuda = edad > 50 ? 120000 : edad >= 30 ? 100000 : 0;
      } else if (genero === "masculino") {
        ayuda = 40000;
      } else {
        ayuda = "Dato inválido";
      }
      alert(`El valor de ayuda mensual es: $${ayuda}.`);
      break;
    }

    case 8: {
      const dias = parseInt(prompt('Ingrese la cantidad de días (15, 30 o 90):') || "0");
      let costo: number | string;
      if (dias === 15) costo = 18000;
      else if (dias === 30) costo = 35000;
      else if (dias === 90) costo = 86000;
      else costo = "Dato inválido";
      alert(`El costo por ${dias} días es: $${costo}`);
      break;
    }

    case 9: {
      const angulo1 = parseFloat(prompt('Ingrese ángulo 1:') || "0");
      const angulo2 = parseFloat(prompt('Ingrese ángulo 2:') || "0");
      const angulo3 = parseFloat(prompt('Ingrese ángulo 3:') || "0");
      alert(angulo1 + angulo2 + angulo3 === 180 ? "El triángulo es válido" : "El triángulo no es válido");
      break;
    }

    case 10: {
      const copias = parseInt(prompt('Ingrese copias:') || "0");
      const precio = copias >= 1000 ? 50 : copias >= 750 ? 80 : copias >= 500 ? 100 : 120;
      alert(`Precio por copia: $${precio}, Precio total: $${precio * copias}`);
      break;
    }

    case 11: {
      const pitido = prompt('¿Escucha un pitido? (si/no):')?.toLowerCase();
      const discoGira = prompt('¿El disco gira? (si/no):')?.toLowerCase();
      const mensaje = pitido === "si" && discoGira === "si" ? "Póngase en contacto con el técnico de apoyo"
        : pitido === "si" && discoGira === "no" ? "Verificar contactos de la unidad"
          : pitido === "no" && discoGira === "no" ? "Traiga la computadora para repararla en la central"
            : "Compruebe las conexiones de altavoces";
      alert(mensaje);
      break;
    }

    case 12: {
      const modelo = parseInt(prompt('Ingrese modelo:') || "0");
      const defectuosos: number[] = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
      alert(defectuosos.includes(modelo)
        ? "El automóvil está defectuoso, llevar a garantía"
        : "Su automóvil no está defectuoso");
      break;
    }

    case 13: {
      const operador = prompt('Ingrese operador (Claro, Tigo o Movistar):')?.trim() || "";
      const minutosInternacionales = parseInt(prompt('Ingrese minutos internacionales consumidos:') || "0");
      const tarifas: Record<string, { cargoFijo: number, valorMinuto: number, paqueteDatos: number }> = {
        Tigo: { cargoFijo: 45000, valorMinuto: 200, paqueteDatos: 12000 },
        Claro: { cargoFijo: 30000, valorMinuto: 100, paqueteDatos: 18000 },
        Movistar: { cargoFijo: 40000, valorMinuto: 250, paqueteDatos: 8000 }
      };
      const plan = tarifas[operador];
      if (plan) {
        const totalCosto = plan.cargoFijo + (plan.valorMinuto * minutosInternacionales) + plan.paqueteDatos;
        alert(`Costo total para ${operador} con ${minutosInternacionales} minutos internacionales: $${totalCosto}`);
      } else {
        alert('Operador no válido.');
      }
      break;
    }

    case 14: {
      const tamano = prompt('Ingrese tamaño (pequeño/grande):') || "";
      const costoBase = tamano === "pequeño" ? 6000 : 12000;
      alert(`Costo total del sándwich: $${costoBase}`);
      break;
    }

    case 0:
      repetir = false;
      break;

    default:
      alert("Opción no válida.");
  }
}
