// JavaScript function is function but it also a object(It is a combination of both function and object)
//JavaScript Function ==> function + object
function fun(){
    console.log("Hello");

}
fun();

/////////////////////////////////////////////////////////

// We can use name properties for access the function name.
function Age(){
    console.log("Hello");
}
Age();
console.log("Return the function name :",Age.name);
// We know that function can store the object properties.
Age.myAge=23;
console.log(Age.myAge);
console.log(Age);

// When we create any function . that function provide free space. that free space is called object and this object is called prototype.

function fun1(){
    console.log("Hello world");

}
// We can add properties and methods in prototype.
fun1.prototype.myName="Anurag";
fun1.prototype.myAge=23;
fun1.prototype.Sum=()=>{
     console.log(3+4);
}
console.log(fun1.prototype);
console.log(fun1.prototype.Sum());

