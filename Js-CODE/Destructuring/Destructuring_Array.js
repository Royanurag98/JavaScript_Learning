//DESTRUCTRING 
/*
The destructuring assignment is a cool feature that came along with ES6. Destructuring is a JavaScript
expression that makes it possible to unpack values from arrays, or properties from objects, into distinct 
variables. That is, we can extract data from arrays and objects and assign them to variables. */

// Imagine we want extract data from an array. Previously, how would this be done? we have to do the same thing over and over again.
const arr=["ANurag", "From", "Bihar"];
let  Name=arr[0];
let  Address=arr[2];
console.log(Name);
console.log(Address);

// The ES6 destucturing assignment makes it easier to extract this data.

// DESTRUCTRING WITH ARRAY.
// Suppose we want to use array item as variable . i.e called destructring
let arr1=["Hello", "i" , "Am", "Anurag", "From", "Bihar" ];
// First Create the variable and assign the value of array in that variable. but this value assign by default index wise.
// value of 0 index assign in first variable and so on..
let [greeting_var1, pronoun_var2]=arr1;
console.log(arr1)
console.log(greeting_var1);
console.log(pronoun_var2);
// Now we can Perform some operation what you want
greeting_var1="hii";
console.log(greeting_var1);


//Skipping Items in an Array
//What if we want to get the first and last item on our array instead of the first and second item, and we want to assign only two 
//variables? This can also be done with (,,) it left the index
let Mix=["Mango","Banana","Apple", "Potato","Tamato"];
let [ , fruits, , ,  Vagitable]=Mix;
console.log(fruits);
console.log(Vagitable);

//Assigning the rest of an array
//What if we want to assign some of the array to variables and the rest of the items in an array to a particular variable? 
//In that case, we would do this:
let Mix1=["Mango","Banana","Apple", "Potato","Tamato"];
let [fruits1,Vagitable1, ...restmixitem]=Mix1;
console.log(Mix1)
console.log(fruits1);
console.log(Vagitable1);
console.log(restmixitem); 

//Swap tow value using destructuring
let A=30;
let B=40;
console.log("Previous Value of A is :",A);
console.log("Previous Value of A is :",B);

 [A,B]=[B,A];

 console.log("New Value of A is  :",A);
 console.log("New Value of B is  :",B);





