// Hoesting 
// During the creation phase javascript engine moves your variable and function decleration to the top of your code and this is known as hoisting
console.log(Age)// undefine because we know that when we execute this code first create GEC .....
var Age=24;     // in memory phase Age variable has undefine value 
console.log(Age)

// let and const are also hoested

// TDZ (Temporaral dad zone )
// basicaly TDZ is a state when we declear a varible but not initilized but after some time we initilized the value of that variable .
// between that time of decleration to initilization is called TDZ.

// console.log(Name)// this time Name variable lies in TDZ.
// let Name="Anurag";
// console.log(Name)

