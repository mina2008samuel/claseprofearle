class DispensadorCholados {
    constructor() {
        this.ingredientes = {
            hielo: true,
            frutas: ["fresa", "mango", "piña", "maracuyá"],
            lecheCondensada: true,
            jarabe: ["mora", "maracuyá", "fresa"],
            toppings: ["queso rallado", "gomitas", "chocolate"]
        };
    }

    prepararCholado(seleccion) {
        console.log("Preparando cholado con:");
        console.log("Hielo triturado");
        
        if (seleccion.frutas.length > 0) {
            console.log("Frutas: " + seleccion.frutas.join(", "));
        }
        
        if (seleccion.lecheCondensada) {
            console.log("Leche condensada añadida");
        }
        
        if (seleccion.jarabe) {
            console.log("Jarabe de " + seleccion.jarabe);
        }
        
        if (seleccion.toppings.length > 0) {
            console.log("Toppings: " + seleccion.toppings.join(", "));
        }
        
        console.log("¡Cholado listo para servir!");
    }
}

// Ejemplo de uso
const dispensador = new DispensadorCholados();
const pedido = {
    frutas: ["fresa", "mango"],
    lecheCondensada: true,
    jarabe: "mora",
    toppings: ["queso rallado", "chocolate"]
};

dispensador.prepararCholado(pedido);
