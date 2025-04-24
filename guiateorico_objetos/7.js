const PersonProto = {
    describe(){
        return `Person named ` + this.firstName
    },
};
const jane ={
    __proto__: PersonProto,
    firstName: `Jane`
};
const tarzan = {
    __proto__: PersonProto,
    firstName:`Tarzan`
};

console.log(jane.describe()); //person named jane
console.log(tarzan.describe()); // person named tarzan