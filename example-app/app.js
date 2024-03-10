console.log("hello world!");
var name ="bahar";
var age =25; // program akışında değişmez
let isMarried = false; //program akışında değişir

console.log(name);
console.log(age);
console.log(isMarried);

isMarried="true";
console.log(isMarried);
//sum operation
const number1=10;
const number2=20;

console.log(number1+number2);
//if else statement
if(age>=18){
    console.log("You are an adult");
}
else{
    console.log("You are  a child");
}

//object
const person = {
    name:"bahar",
    age:25,
    isMarried:false
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

function sayhello(){
    console.log("hello world")
}

//functions
function computeSum(number1,number2){
    console.log("im here");
    return number1+number2;
}
sayhello();
const total =computeSum(10,20);
console.log(total);

