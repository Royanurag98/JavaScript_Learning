

// When we use this keyword inside the object. this keyword point the same object


//In an object method, this refers to the object.

"use strict";
function myFunction() {
  return this;
}

let takeVal=myFunction()
console.log(takeVal)