function verificarContraseña() {
    const facebook = "samuelmina";
    const contraseña = "9999";

    facebook == "samuelmina" && contraseña == "9999" ?
        console.log(`Señor usuario de Facebook con el nombre ${facebook}, bienvenido a Facebook`) :
        console.log(`El usuario ${facebook} y la contraseña digitada son incorrectos`);
}

verificarContraseña();