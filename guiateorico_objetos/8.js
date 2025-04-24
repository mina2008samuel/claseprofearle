let user ={
    name:"John",
    surname: "smith",

    set  fullName(value){
        [this.name, this.surname]=value.split("");
    },
    get fullName(){
        return `${this.name} ${this.surname}`;
    }
};

let admin ={
    __proto__:user,
    isAdmin: true
};

console.log(admin.fullName); // John smith(*)
// !Dispara el setter¡
admin.fullName = "Alice Cooper";  // (**)

console.log(admin.fullName); //Alicce Cooper, estado de admin modificado
console.log(user.fullName)