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

let array= ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

let newArray=array.map(arr=>{
    if(arr==' '){
        return 'empty string';
    }else{
        return arr;
    }
})
console.log(array)
console.log(newArray)

//destrucring

let [ fruit1,fruit2 ]=array;
console.log(fruit1);
console.log(fruit2);

let arr=[1,2,3,4];
let [ a,b,c ]=arr;
console.log(a)
console.log(b)
console.log(c)