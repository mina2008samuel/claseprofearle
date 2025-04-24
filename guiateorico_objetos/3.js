let payroll ={                              //objeto de la 1 a la 6
    id: "1095552147",
    name:"Samuel Mina",
    overtime: 4,
    hourValue:20
}

console.log(`The value of hours is ${payroll.hourValue * payroll.overtima}`); //calculos con propiedades del objeto

let key = "overtime"; //busqueda de propiedades
let check = (key in payroll)? `found` : `No found`;
console.log(check);

for(let x in payroll){  //iterar objetos
    console.log(x, payroll[x]);
}
console.log("---------------");    //2
Object.entries(payroll).forEach (([key, value]) =>  {
    console.log(`la clave es ${key} y su valor ${value}`);
});
