console.log("Hello world")
console.log("JS tutorial")

let name='Selma';
console.log(name);

//primitive types
let name1= 'string' //string type
let age1= 25 //number type
let approved = false //boolean type
let firstName = undefined; // if we do not give a value it is undefined typeof(undefined) = undefined
let lastName = null; //when we want specificly to set on value that is not that value typeof(null) = object


// reference types
// object, array, function


//1. object(e. like person who has name,age,gender-> we can put that in one object)

let person = {
    name: 'Name',
    age: 20,
}
console.log(person);

//how we access the data in object
//1. dot notation
person.age = 21;
console.log(person);

//2. bracket notation
person['name'] = 'Selma'
person['age']= 25;
console.log(person.age)

//2. array -> list of objects  , array is an object in JS

let selectedColors = ['red','blue'];
console.log(selectedColors);
selectedColors[2]='green';
console.log(selectedColors);
// we access an array by index 

//array do not need to have the same type 
selectedColors[3]= 3;
console.log(selectedColors);
console.log(selectedColors[1]);
console.log(selectedColors.length) //property on array 


//3. function
 
function messageOnConsole(){
    console.log('Hello world from function');
}
messageOnConsole();


function messageName(name){
    console.log('Hello '+ name);
}
messageName('Selma');

function multiple(number){
    return number*number;
}
console.log(multiple(2))

let result= multiple(2)
console.log(result)