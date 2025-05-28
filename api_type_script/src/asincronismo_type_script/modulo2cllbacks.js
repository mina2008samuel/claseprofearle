"use strict";
function obtenerDatos1(callback) {
    setTimeout(() => {
        const datos = { id: 1, nombre: "Juan" };
        callback(datos);
    }, 2000);
}
function procesarDatos(datos) {
    console.log("Datos procesados:", datos);
}
obtenerDatos1(procesarDatos);
console.log("Esperando datos...");
