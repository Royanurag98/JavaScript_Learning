// First class Function

// 1. Assigning a function to a variable

let assingFun=function(x,y){// this function is first class function
    console.log(x +y)
}
assingFun(10,20) // we can use this variable as a function


//2. Passing a function as an arguments

function sum(x,y){
    add=x+y
    return add
}
function name(fun,Name){
    console.log(fun(20,30),Name)
}
name(sum,"Anurag")
// 3. returning a function inside a function

function catchFun(){
    return function Add(x,y){
          sum=x+y;
          console.log(sum)
    }

    }
catchFun()(10,20)// we can call returning function in this way
let x=catchFun() // or we can also do that
x(10,40)

//What is IIFE
/* Immediately Invoked Function Expressions (IIFE) are JavaScript 
functions that are executed immediately after they are defined.*/
(function() {
    // IIFE code block
    var localVar = 'This is a local variable';
    console.log(localVar); // Output: This is a local variable
})();