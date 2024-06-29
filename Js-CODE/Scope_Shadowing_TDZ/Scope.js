//BLOCK IN JS* /////////////////////////////////////////////////////////

//Block - it is compound statement. It is used to combine  the multiple JavaScript statements 
//into a one group. We use block because JavaScript aspects place of multiple statements as single statements.

let x=10
if(x==10){         ////////
 sum=20+30;            //   if(){} =>statement count as one statements
 console.log(sum);    //
}                ///////


//SCOPE IN JS*////////////////////////////////////////////////////////////////////////

/*Scope is a certain region of a program where a variable is defined and can be accessed but beyond 
that region, it cannot be recognized or accessed."In other word scope is basically defined the boundary 
where we can access the variable And function definition

Block scope 
Function scope
Global scope

=> Let and const are block scoped because we can not access  the variable out side the block.
=> Var is function scoped because we can not access  the variable out side the function block.*/
function sum(){
 var x=30;
}
console.log(x)// x is not define

// if I declare a variable globally with let , const and  var keyword we can access any where in the program 
//Note 
//Global variable can access inside the local scope but local variable can not access in global scope.  


