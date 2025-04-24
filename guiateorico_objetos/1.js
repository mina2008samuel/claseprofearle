let user1 = new Object(); //sintaxis de "constructor de objetos"

let user2 = {} //esa declaracion se llama objeto literal.

let user3 = { //un objeto
    name: "John", //en la clave "name" se almacena el valor "John"
    age: 30 //En la clave "age" se alamcena el valor 30
}

user3.isAdmin = true  //agregar una nueva propiedad
delete user3.age  //borrar una propiedad

console.log(user3);
