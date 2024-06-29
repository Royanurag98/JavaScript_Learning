// Destructuring of object

// We can direct destructuring of obj
let obj1={
    Name:"Anurag",
    Roll:56,
    Reg:122133,
    Study:"MCA"

}
// Now  object properties convert in simple variable and we can perform some task with that
let Name1=obj1.Name;
let Roll1=obj1.Roll;
let Reg1=obj1.Reg;
console.log(Name1 +2,Roll1,Reg1);

//
let obj2={
    Name:"Anurag",
    Roll:56,
    Reg:122133,
    Study:"MCA"

}
// Now  object properties convert in simple variable and we can perform some task with that
let {Name,Roll,Reg,Study}=obj2;// This is the way of destructring of object
console.log("Name =",Name);
console.log("Roll =",Roll);
console.log("Reg=",Reg);
console.log("Study=",Study);

// if you want store last two variabl in different variable,
let {Name:Name2, Roll:Roll2, ...Extra}=obj2;// This is the way of destructring of object
console.log("Name =",Name2);
console.log("Roll =",Roll2);
console.log("Reg=",Extra);

