"use strict";
function obtenerDatos2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve({ id: 1, nombre: "María" });
            }
            else {
                reject("Error al obtener los datos");
            }
        }, 2000);
    });
}
obtenerDatos2()
    .then(datos => console.log("Datos obtenidos:", datos))
    .catch(error => console.error(error));
console.log("Esperando datos...");
