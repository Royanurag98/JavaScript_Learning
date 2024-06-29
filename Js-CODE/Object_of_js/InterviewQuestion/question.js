//OUTPUT BASEED QUESTION

//QUESTION -1 ////////////////////////////////////////////////////
const obj = ((a) => {
    delete a // Here a is normal value not a object value so delete keyword can not delete the normal value
    return a
})(5) // IIFE

console.log(obj)// return 5

//QUESTION -2 //////////////////////////////////////////////////////
/* Create a function multiplyByTwo() and pass a object as argument 
   and multiply by two of all numeric property of object ? */

let obj2 = {
    Name: "Anurag",
    age: 12,
    RollNo: 20
}

function multiplyByTwo(obj) {
    let objVal = Object.values(obj);
    console.log(objVal)

    for (let key of objVal) {
        if (typeof(key) === "number") {
            key = key + 2;
            console.log(key)
        }  
    }  
}
multiplyByTwo(obj2)

//QUESTION -3 //////////////////////////////////////////////////////
const a={}
const b={key : "b"}// here b is object
const c={key : "c"}
a[b]=123; // if i try to add b object as a key in a  it cant convert a key or string  it return [object Object]
// a["[object Object]"]=123
a[c]=432;
// a["[object Object]"]=432
console.log(a)// 432


//QUESTION -3 //////////////////////////////////////////////////////

// What is JSON.stringify and JSON.parse

const obj3={
    Name: "Anurag",
    age: 12,
    RollNo: 20
}

const str=JSON.stringify(obj3)// Here JSON.stringify() convert the property of obj3 in string
console.log(str)
const object=JSON.parse(str)// Here JSON.parse() again convert the string into object
console.log(object)

//QUESTION -4 //////////////////////////////////////////////////////
const user={Name:"Anurag", Age:24}
const admin={admin:true, ...user}
console.log(admin) //{ admin: true, Name: 'Anurag', Age: 24 }