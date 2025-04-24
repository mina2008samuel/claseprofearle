function verificarClimaYRopa() {
    let clima = "soleado";
    let ropa = "camiseta y gafas de sol";

    if (clima === "soleado") {
        console.log(`El clima está ${clima}, puedes usar ${ropa}.`);
    } else {
        console.log(`El clima no es soleado, elige otra ropa adecuada.`);
    }
}

verificarClimaYRopa();