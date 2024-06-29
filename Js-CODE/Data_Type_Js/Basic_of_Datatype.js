// NN BB SS U

// THESE ARE THE PRIMITIVE DATA TYPE.

//Null Data-type
let A=null;
console.log(typeof(A))

//Number Data-type
  // number data type can be possitive , negative and decimal number.
let Age=22;
let Height= 5.6;
let z=-23;
console.log(Age , typeof(Age),"<br>")
console.log(Height , typeof(Age),"<br>")
console.log(z , typeof(Age),"<br><br>")

//Boolen Data-type
let Sun_rises_in_the_East = true;
let Sun_rises_in_the_North = false;
console.log(Sun_rises_in_the_East ,"<br>")
console.log(Sun_rises_in_the_North ,"<br>")

//String Data-type
let Full_Name = "Anurag";
let D = "22";
console.log(Full_Name, typeof(Full_Name)," <br>")
console.log(D, typeof(D),"<br><br>")

//String Data-type
let Sign = Symbol('@');
 let Mark = Symbol("This is a symbole");
console.log(Sign, typeof(Sign))
console.log(Mark,typeof(Mark))

//Undefined  Data-type
let E = undefined;
let F;

// NON-PRIMITIVE DATA TYPE
// Object is a non-primitive data type. object is a collection of data. object store the data in the form of key value pairs 
const item = {
   "Anurag": true,
   "priti" : false,
   "Arun" : 56,
   "aman": undefined
}
// We can access the vale of object in two way

console.log(item["Anurag"]);// First way
console.log(item.Anurag);   // Second way




// When adding a number and a string, JavaScript will treat the number as a string.
let number= 36; 
let Name  = "Anurag";
console.log(number+Name)//36Anurag

//JavaScript evaluates expressions from left to right.
let n = 16 + 4 + "Volvo"
console.log(n) // 20Volvo
// let m = "Anurag" +16 + 4; //since the first operand is a string, all operands are treated as strings. 
// document.write(m , "<br>");// Anurag164

//JavaScript has dynamic types. This means that the same variable can be used to
// hold different data types

let x;        
console.log(typeof(x))  // Now x is undefined
console.log(n)
x = 5;        
console.log(typeof(x))  // Now x is a Number
console.log(n)
x = "John";    
console.log(typeof(x)) // Now x is a String
console.log(n)

