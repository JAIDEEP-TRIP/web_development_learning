// Vse lgial operatorg to find whether the age of A perion lies betucen 10 and 20, 

let age = 25

if (age >= 10 && age <=20){
    console.log("Age is between 10 and 20");
}

else {
    console.log("not between 10 and 20");
}


let x = 25;
let y = 30;

max =(x > y) ? x : y ;

let obj ={
    name : "john",
    age : 25,
    city :"dallas"
}

for ( let key in obj ){
    console.log(obj[key])
}

let arr =[1,2,3,4,5,6]
for (let i of arr){
    console.log(i);

}


// Wite a brogran to print the marks ofin an oljeet using for loof
// oby = { harry: 98, rohan: 70, akash. 75

obj = {
    harry:98,
    rohan:70,
    akash:75
}

for (let i in obj){
    console.log(i,obj[i]);
}

//Write a function to find mean of 5 numiers

var arr1 = [10, 20, 30, 40, 50];

const mean = (arr) =>{
    let sum =0
    for( let i in arr){
        sum += arr[i];
    }

    return sum /arr.length;


}

console.log(mean(arr1)); // Output: 30

