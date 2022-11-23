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

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
// const { key1, key3}  = { ...obj1}
// console.log(key1, key3)

const arr1 = ['value1', 'value2']
const [ val1, val2 ] = arr1
console.log(val1)

const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
	let { key1, key3}  = obj1
	key1 = 20;
    key3 = 123
	console.log(obj1.key1, obj1.key3)
    console.log(key1)

async function print(){
console.log('a');
console.log('b');
let result=await new Promise(resolve=>{
        setTimeout(() => resolve('c'), 3000)
})
console.log(result);
let result1=await new Promise(resolve=>{
        setTimeout(() => resolve('d'),0)
})
console.log(result1);
console.log('e');
}
print()











