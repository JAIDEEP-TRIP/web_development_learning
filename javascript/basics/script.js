var x =10;
console.log(x);
let y = 20
console.log(y);
const z =30;
console.log(z);

var a = x +y;
console.log(a);

var s1 = "jaideep";
var s2 = "aishwarya";

var s3 = s1 + " " +s2;
console.log(s3);

var o1 = {
    name : "jaideep",
    age : 25,
    city : "dallas"
}
console.log(o1);

o1.age = 24;

console.log(o1);

// if else loops 
if (o1.age >25){
    console.log("he is working");
}
else{
        console.log("he is a student");
    }


if(o1.age>30){
    console.log("he is a senior citizen");
}
else if (o1.age>20 && o1.age<=30){
    console.log("he is a young adult");
}

// Quick Quiz: Write s Javascipt program to store nonphone number and 'márks of a student
// using Object

var student = {
    name :"jaideep",
    phone_no : "7675932793",
    address : "dallas"
}

console.log(student);

// Create s variable of type sting and try to add a numter to itvar 
let s = "aishwarya";
let num = 10;
console.log(s+num);

// Use typeof operator to find the datatype of the stung in last question
console.log(typeof(s))

// Create a const objul in javasirift Can you changit to hold a number later

const obj  ={
    name:"jaideep"

}

console.log(obj);

obj.name = "aishwarya";
console.log(obj);

obj.age= 30;
console.log(obj);

