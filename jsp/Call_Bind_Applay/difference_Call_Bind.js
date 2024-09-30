// Different between Call() And bind()
// Bind work just like call We can pass multiple arguments superated by comma but one thing if use call we directly call tha function but 
// in case of bind first we have to store the function in a varible and we use this function latter



let Details=function(State, Country){
    console.log(this.Name + " "+ State +" "+ Country)
 }
 let StudentInformation1={
    Name: "Anurag Kumar",
    Age:23,
    designation: "Software Enginer"

 }
 // if i use call() method we can directly call the function but if i use bind first we have to store
 // that function in a variable the call that function 
 Details.call(StudentInformation1,"Delhi", "India" ) 

 let StudentInformation2={
    Name: "Deepak Kumar",
    Age:24,
    designation: "Full Stack Developer"

 }
 // if i use applay() method we can pass the arguments in the form of array
let store= Details.bind(StudentInformation2, "Delhi", "India")
store()



