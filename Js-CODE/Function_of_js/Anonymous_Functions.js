//JavaScript Anonymous Functions
/*
The definition of the term "anonymous" is "unknown or without identification." An anonymous 
function in JavaScript is a function that has no name. 
When we create an anonymous function, it is declared without any identifier or name. It is the difference 
between a normal function and an anonymous function.*/

// NORMAL FUNCTION                                        // ANONYMOUS FUNCTION
/*When we create a normal function in that case     When we create a anonymous function in that case    
 we have to declared the function name               we have not declared the function name  */
function Grating(Tg){                                 //   let Number= function (Luccky_Number){
    return Tg;                                        //    return  Luccky_Number;
}                                                     //     }
let pass=Grating("Good Morning");                     //    let pass2=Number("Your Luccky number is 7");
console.log(pass);                                    //     console.log(pass2);

//Use of Anonymous Functions in JavaScript
// Supplying an anonymous function as a parameter to another function
// 1. Passing an anonymous function to other function as its argument i.e also called callback function

// Async programming
function Calculation(x,y,z){// first execute
    return x+y*z;
}
let result1=Calculation(4,5,4);
console.log(" X + Y  * Z is : ",result1);

setTimeout( function(){// Here i pass a anonymous function as a parameter inside the function
    console.log("Good Morning Everyone");//parlel execute
},10000)

function sum(x,y){// 3rd eexcute
    return x+y;
}
let result=sum(4,5);
console.log("Sum of X + Y is : ",result);

