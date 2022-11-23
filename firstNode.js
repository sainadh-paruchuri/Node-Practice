console.log('hello world')

let person={
    name:'sai',
    age:21,
    hobbies:['reading','writing','watchiing']
 
}
//if you want reference
// let secondPerson=person;
// secondPerson.name='hari';
// console.log(person)
//console.log(secondPerson)

//if you want copy
let secondPerson=Object.assign({},person);
secondPerson.name='hari';
console.log(person)
console.log(secondPerson)

var hobbies=person.hobbies;
var hobbiess=person.hobbies.slice();
console.log(hobbiess)

person.hobbies.push('travelling')

console.log(hobbies)
console.log(hobbiess)