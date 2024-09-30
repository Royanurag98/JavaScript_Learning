////////////////////////////////// Different between Call() And apply()////////////////////////////////

/* We can pass Multiple argument using both the function . but The difference is that the apply() method
 pass the arguments in the form of array and call() pass separated values .*/


 let Details=function(State, Country){
    console.log(this.Name + " "+ State +" "+ Country)
 }
 let StudentInformation1={
    Name: "Anurag Kumar",
    Age:23,
    designation: "Software Enginer"

 }
 Details.call(StudentInformation1,"Delhi", "India" ) // if i use call() method we can pass the arguments as a seprated value 

 let StudentInformation2={
    Name: "Deepak Kumar",
    Age:24,
    designation: "Full Stack Developer"

 }
 // if i use applay() method we can pass the arguments in the form of array
 Details.apply(StudentInformation2, ["Delhi", "India"])


