let person = {
    id:2,
    name:"arle",
    salary:"5000"
}
person["whatsapp cell phone"] = "3137082781";

console.log(person.name);  //arle
console.log(person["whatsapp cell phone"]);  //3137082781

let key ="email";  //pasando propiedad por variable
person[key] = "arleth64@cue.edu.co";
console.log(person);

let key2 = "favorite";
person[key2 + `sport`] = "soccer";
console.log(person.favoritesport); //soccer
