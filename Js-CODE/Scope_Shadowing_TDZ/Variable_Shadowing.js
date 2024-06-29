//SHADOWING IN JS
/*Variable shadowing in JavaScript occurs when a variable declared within a certain scope 
has the same name as a variable declared in an outer scope. This causes the inner variable 
to "shadow" the outer one*/

//Case 1 =////////////////////////////////////////////////////////////////////////////////
var age=20;// OUTER SCOPE
{
// HERE INNER SCOPE VARIABLE SHADOW THE OUTER SCOPE VARIABLE AND IF WE TRY TO CONSOLE AGE VARIABLE 
// OUT SIDE THE SCOPE IT RETURN THE VALUE OF INNER VARIABLE BECAUSE VAR IS A GLOBLE SCOPED .
 var age = 40; // INNER SCOPE 
 console.log(age)  // 40
}
console.log(age)// 40

//Case 2= ///////////////////////////////////////////////////////////////////////////////////
let hight=5.6;// OUTER SCOPE
{
// HERE ALSO INNER SCOPE VARIABLE SHADOW THE OUTER SCOPE VARIABLE AND IF  WE TRY TO CONSOLE HEIGHT
// VARIABLE OUT SIDE THE SCOPE IT RETURN THE VALUE OF OUTER VARIABLE BECAUSE LET IS A BLOCK SCOPED .
 let hight= 6.3; // INNER SCOPE
 console.log(hight)  // 40
}
console.log(hight)// 20

//Case 3= /////////////////////////////////////////////////////////////////////////////////
var roll=30;
function check(){
// HERE ALSO INNER SCOPE VARIABLE SHADOW THE OUTER SCOPE VARIABLE AND IF  WE TRY TO CONSOLE ROLL
// VARIABLE OUT SIDE THE SCOPE IT RETURN THE VALUE OF OUTER VARIABLE BECAUSE VAR IS  ALSO A FUNCTION SCOPED .
 var roll = 55;
 console.log(roll)// 40
}
check()
console.log(roll)// 20

//Case 4 = ////////////////////////////////////////////////////////////////////////////////
let x = 10; // OUTER SCOPE
function example() {
// HERE ALSO INNER SCOPE VARIABLE SHADOW THE OUTER SCOPE VARIABLE AND IF  WE TRY TO CONSOLE HEIGHT
// VARIABLE OUT SIDE THE SCOPE IT RETURN THE VALUE OF OUTER VARIABLE BECAUSE LET IS A BLOCK SCOPED .
  let x = 20; //   INNER SCOPE, shadows the outer 'x'
  console.log(x); // Outputs 20, accessing the inner 'x'
}
example();
console.log(x); // Outputs 10, accessing the outer 'x'