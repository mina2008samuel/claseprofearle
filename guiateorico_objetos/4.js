let animal ={
    name:"cat",
    color:"black"
}

let animal2 = animal;  //crear copia
console.log(animal2.name);

let dataAnimal = {
    eyes: "green"
}

let newAnimal ={

    ...animal,      //concatena objetos
    ...dataAnimal
}
console.log(newAnimal);