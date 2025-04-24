function verificarClima() {
    let tipodeclima = "invierno";

    tipodeclima == "verano" ? console.log(`En el ${tipodeclima} hace calor`) :
    tipodeclima == "otoño" ? console.log(`En ${tipodeclima} el clima es cálido`) :
    tipodeclima == "primavera" ? console.log(`En la ${tipodeclima} el clima es neutral`) :
    tipodeclima == "invierno" ? console.log(`En el ${tipodeclima} hace mucho frío`) :
    console.log(`No se reconoce la estación: ${tipodeclima}`);
}

verificarClima();