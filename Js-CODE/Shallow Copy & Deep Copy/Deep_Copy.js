//Deep Copy
/*A deep copy is a copy that creates a new object with new memory locations for all of its 
properties and nested objects or arrays. It means that if you make changes to the copied 
object or any of its nested objects or arrays, it will not affect the original object*/

// We can deep copy with the help two json library
       
// 1. JSON.stringify(SourceObject) // it convert object into string
// 2. JSON.parse(String)//it convrt  converted string into object
let obj={
        Name:"Anurag Roy",
        Gahr:"Marwa",
        Gila:"Bahgalpur",
        Skills:{
                 firstLanguage:"C++",
                 secondLanguage:"JavaScript",
        }
}
let DeepCopy=JSON.stringify(obj);
let y=JSON.parse(DeepCopy)
console.log(obj);
console.log(y);
// Check Make a deep copy or not
obj.Skills.firstLanguage="Python"; // i update in nested objct (skills) but no effect on copy object
console.log(obj)
console.log(y);