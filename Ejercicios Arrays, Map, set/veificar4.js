const asistentesConferencia = new Map([[101, "Carlos"], [102, "María"], [103, "José"]]);
const verificarAcceso = codigo => asistentesConferencia.has(codigo);// para comparar un dato si esta bien 
console.log(verificarAcceso(102)); // true
console.log(verificarAcceso(104)); // false
