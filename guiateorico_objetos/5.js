let user ={
    name: "John",
    age: 30,

    sayHi() {   //metodo
        return `hola ${this.name} tienes ${this.age}`;
    },
    set val(value){   //metodo set (cargar)
        if(value.length < 4 ){
            console.log("El nombre es demasiado corto, necesita al menosw 4 caracteres");
            return;
        }
        this.name = value;
    },
    get fullData(){   //metodo get (obtener)
        return `${this.name} tiene ${this.age} años`;
    }
};
console.log(user.sayHi());  //llamada a metodo
user.val = "Maria";             //asignacioj de valor y validacion
console.log(user.fullData);
