var myarr = ["hello",[1,2],5.6]
console.log(myarr); // Output: hello
console.log(myarr.length);


myarr.push("aishwarya")
console.log(myarr); // Output: ["hello", [1, 2], 5.6, "aishwarya"]

myarr.pop();
console.log(myarr); // Output: ["hello", [1, 2], 5.6]

myarr.shift()
console.log(myarr); // Output: [[1, 2], 5.6]

myarr.unshift("new element")
console.log(myarr); // Output: ["new element", [1, 2], 5.6]

myarr.slice(0,1)
console.log(myarr); // Output: ["new element", [1, 2]]

var myarray = [1,2,3,4,5]

myarray.forEach(function(element){
    console.log(element)
})
    

var maparray = myarray.map(function(element){
    return element + 2
})

console.log(maparray)

var filterarray = maparray.filter(function(element){
    return element%2 == 0;
})

console.log(filterarray)

var sum = maparray.reduce(function(a,b){
    return a + b
})

console.log(sum)

var currentdate = new Date();
console.log(currentdate)

console.log(currentdate.toLocaleTimeString())

var mydate = new Date();
mydate.setDate(20);
mydate.setFullYear(3025)
console.log(mydate)

console.log("har\"".length);

let jai = "Jaideep&Aishwarya"
console.log(jai.startsWith("i",2))
console.log(jai.endsWith("a"))

console.log(jai.toLowerCase())
console.log(jai.toUpperCase())

let s = "Please give Rs 1000"
console.log(s.split(" "))
console.log(s.slice(15))

s[4] = 'z'
console.log(s)


let fact = [3,5,6,7,8]
let factorial = fact.reduce(function(element){



})