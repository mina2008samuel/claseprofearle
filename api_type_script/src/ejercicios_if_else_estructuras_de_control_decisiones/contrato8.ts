let salonBaseDeDatos: string = "2";
let numeroContratoBaseDeDatos: string = "99";
let salonIngresado: string = "2";
let numeroContratoIngresado: string = "99";
let nombreDelTrabajador: string = "Samuel";

if (salonBaseDeDatos === salonIngresado && numeroContratoBaseDeDatos === numeroContratoIngresado) {
    console.log(`${nombreDelTrabajador}, ¡bienvenido! Puede ingresar a su espacio de trabajo.`);
} else {
    console.log(`Acceso denegado, no puede pasar a su espacio de trabajo.`);
}
