let x= 40;
let y= 3;
const z=32;

 /*1 JavaScript Unary operator
    Operator require operands to perform its operation. Unary operators are those, 
    which takes one operand to perform its task.
      + , - , ++, --, typeof()
Working of 
Pre-increment (++x) :-  first increase the value of x then  assign.
Post-increment(x++) :-  first assign in x then increase  the value of x*/
console.log("x= :",x);   // 40
console.log("x= :",++x); // 41
console.log("x= :",x++); // 41
console.log("x= :",--x); // 41
console.log("x= :",x--); // 41
console.log("x= :",x);   // 40
/*Unary typeof() operator is used to evaluate the size of data type, variable or constant.*/

console.log(typeof(let));
console.log(typeof(x));
console.log(typeof(32));
console.log(x.length);

console.log("\n\n");
// JavaScript Arithmetic Operators
console.log("Sum of x + y       :",x+y);
console.log("Subtract of x - y  :",x-y);
console.log("Multiplay of x * y :",x*y);
console.log("Division x / y     :",x/y);
console.log("Reminder of x % y  :",x%y);
console.log("Exponent of x** y  :",x**y);// Exponent opertor use to find  x to the power y.

console.log("\n\n");
// JavaScript Assignment Operators.
console.log("x=y  :",x=y);  // x= 3  //  x=y => x=y;
console.log("x+=y :",x+=y); // x= 6  // x+=y => x=x+y;
console.log("x-=y :",x-=y); // x= 3  // x-=y => x=x-y;
console.log("x*=y :",x*=y); // x= 9  // x*=y => x=x*y;
console.log("x/=y :",x/=y); // x= 3  // x/=y => x=x/y;
console.log("x%=y :",x%=y); // x= 0  // x%=y => x=x%y;
console.log("x**=y:",x**=y);// x= 0  // x**=y => x=x**y;

console.log("\n\n");
//JavaScript Comparison Operators 
/*
==, ===, !=, !==, >	greater than, <	less than, >=, <= 

== check only the value if both value are equal gives true.
But === check  the value as well as type of value if both value are equal gives true
 otherwise false*/
let m=6;
let n=8;
console.log("m==n",m==n);  // true
console.log("m===n",m===n);// truee 
console.log("m!=n",m!=n);  // false
console.log("m!==n",m!==n);// false

console.log("\n");
let p=6;
let q="6";
console.log("p==q",p==q);   // true
console.log("p===q",p===q); // false
console.log("p!=q",p!=q);   // false
console.log("p!==q",p!==q); // true

// Truthy and falsy value
/*
1. false
2. ""
3. null
4. undefine
5. 0
 */ 
let Age=false; // return false
let Age1=''; // return false
let Age2=null; // return false
let Age3; // undefine  is also false
let Age4=0; // return false
if(Age){
  console.log("Hello");
}
else{
  console.log("Good morning");

}

//Conditional Operator(ternary Operator) It is use to compress the if else statement.
/* Javascript offers a ternary operator which is the conditional operator (? : in combination) to construct conditional expressions
Conditional operator = It perform the operation using with three operands .
Conditional operator = condition? Expression1 : Expression2 ;*/
let  myAge=23;
if(myAge>22)
console.log("You are eligiable to drive a car");
else
console.log("You are not eligiable to drive a car");

//ternary Operator
let myAge2=23;
myAge2>20?console.log("You are eligiable to drive a car"):console.log("You are not eligiable to drive a car");
let Result=myAge2>20?"You are eligiable to drive a car":"You are not eligiable to drive a car";
console.log(Result)




