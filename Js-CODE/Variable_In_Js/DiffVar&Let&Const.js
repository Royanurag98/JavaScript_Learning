var myName="Anurag";// Declare and initilized with var keyword 
var myName="Priti"; // Re-declare and re-initilized same variable name  with var keyword.
myName="Kavita";    // Re-assign the value.in same variable name
console.log(myName);

let roll_number=56; // Declare and initilized  with let keyword 
//let roll_number=76; // Can't re-declare the same variable with let keyword. but we can re-assign the value with let keyword
roll_number=45;    // here we can also re-assign the value.in same variable name
console.log(roll_number);

const registration_number=12213393; // When we declear the variable with const keyword we must have to initilized the value at the time of variable declearation.
//const gistration_number=76; // here we can not re-declare and re-initilized with const keyword
//gistration_number=12213347;  // here we can not re-assign the value.in same variable name.
console.log(registration_number);

/* Var is globally scoped while let and const are blocked scoped. scoped of var all over the program(globally). */
 var course_name="bca";
 { 
    var course_name="mca"; 
    console.log(course_name);// we can access the var variable inside the scope or out side the scope.
 }
 console.log(course_name);// we can also access the var variable outside the scope.

 let subject_name="JavaScript";
 //Sope of let only inside the block we can not access outside of the block. 
 {
    let subject_name="c++"; 
    console.log(subject_name);// Here we can access let variable
 }
 console.log(subject_name);// But here we can't access let variable

 //var  and let variable initialized with undefined whereas const variable are not Initialized with undefined.
 var Game; // If here we not initilized the value in that case var variable return undefine value
 console.log(Game); // Gives the output undefine
 let animals; // If here we not initilized the value in that case lat variable also return undefine value
 console.log(animals);

 // const must be initialized during the declaration of variable.
 const god="RAm";
 console.log(god);


