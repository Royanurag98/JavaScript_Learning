// let student=[
//     {Name:"Anurag", Age:23, Roll:78},
//     {Name:"Anurag", Age:26, Roll:76},
//     {Name:"Anurag", Age:24, Roll:79}
// ]

//return name in uper case
// const getName=student.map((get)=>{
//    return get.Name.toUpperCase()
// })
// console.log(getName)


// const getAge=student.filter((got)=>got.Age<26).map((e)=>e.Age)
// console.log(getAge)
 

// some of age

// const sumAge=student.reduce((e, c)=>{
//     return e+c.Age
// },0)
// console.log(sumAge)

// let arr=[1,2,3,4,5,6,7]
// arr.forEach((value,index,array)=>{
//     console.log(`Index of Array is ${index} And value of array is ${value*2}`)
//     if(arr[index]==arr.length){
//         console.log(`\n Array ${array}`) // return array itself.

//     }
   
// }, this)
// console.log(this)
// console.log(arr)
// I want to add 100 in each element of array
// let arr1=[10,20,30,40];
// arr1.forEach((val,index)=>{
//     console.log(index, "==>", arr1[index]+100);
//     console.log(index, "==>", val+100);
 
    
// })

// Implement custom forEach
// let arr2=[1,2,3,4,5];// parent object
// Array.prototype.customForEach=function(callback){
//     const array = this // this refers to parent object
//     for(let i=0; i<array.length; i++){
//       callback(array[i],i,array)// call the callback and pass array element, index and array itself.
//     }
// }

// arr2.customForEach((element, index, array)=>{// just i useed custom forEach function
//   console.log(element,index)
//   if(index==array.length-1){
//     console.log(array)
//   }
// });

// let array=[
//     {Name:"Anurag", Age:22, State:"Bihar"},
//     {Name:"Raman", Age:24, State:"Bihar"},
//     {Name:"Aman", Age:23, State:"Bihar"},
// ]

// Array.prototype.customMap=function(callback){
//     const arr=this
  
//     for(let i=0; i<arr.length;i++){
//        callback(arr[0], i, arr)
//     }
  
// }

// array.customMap((element,i, array)=>{
//     console.log(element,i,array)
// })

// Function Defination
// function decleration
//  function  sumNum(x,y){
//     let add=x+y;
//     console.log(add)
//  }
//  sumNum(2,4)

// Function Defination
 // function Expression
//  store(2,4)//
//  let store=(x,y)=>{
//     let add=x+y;
//     console.log(add)
//  }


//What's happening: The code defines a function called makeFunc, which creates another
// function called displayName inside it. displayName uses a variable called name from the outer function.
//When makeFunc is called and assigned to myFunc, it essentially creates a closure. This closure includes
// both the displayName function and the environment in which it was defined, including the variable name.

//Even after makeFunc finishes executing, myFunc still retains access to the name variable because of the closure.
// So when myFunc is called later, it can still access and use the name variable.
//closures in JavaScript allow inner functions to retain access to the variables of their outer
// functions, even after those outer functions have finished executing

// function makeFunc() { // This is outer function
//     const name = "Mozilla"; // name is a local variable created by makeFunc()

//     function displayName() { // This is inner function
//     // displayName() is the inner function, that forms the closure
//       console.log(name);
//     }
//     return displayName; //makeFunc returns the displayName function
//   }
  
//   const myFunc = makeFunc();
//   myFunc();


// function outerFun(a){
//      return function innerFunOne(b) {
//         return function innerFunTwo(c){
//              return function innerFunThree(d){
//                 return function(e){
//                     return function(f){
//                         add = a+b+c+d+e+f;
//                         return add;
//                     }
//                 }
//              }
//         }
//      }
// }

// // normal way to call all the function
// let res=outerFun(2)
// let res1=res(3)
// let res2=res1(4)
// let res3=res2(5)
// let res4=res3(6)
// let res5=res4(7)
// console.log(res5)

// // we can call using currying
// let store=outerFun(5)(6)(7)(8)(9)(10)
// console.log(store)


// // real example

// let userDetail={
//     Name: "Anurag Roy",
//     Age : 25,
//     salary:25000
// }

// function userInfo(obj){
//     return function (userInfo){
//            return obj.Name
//     }
// }

// let result=userInfo(userDetail)
// let result2=result()
// console.log(result2)

// // use IIFE Use closer use currying function
// (function(a){
//     return function(b) {
//        return function(c){
//             return function (d){
//                return function(e){
//                    return function(f){
//                        add = a+b+c+d+e+f;
//                        return add;
//                    }
//                }
//             }
//        }
//     }
// })(2)(3)(4)(5)(6)(7)
// console.log(add)

// // use IIFE Use closer use currying function
// let add=((a)=>(b)=>(c)=>(d)=>(e)=>a+b+c+d+e)(2)(3)(4)(5)(6); console.log(add)


// // Original function with multiple arguments
// function add(a, b, c) {
//     return a + b + c;
//   }


//   console.log("\n ///////////////////////////////////////////////////////");
// function mul(x){ // here x=5
//     return function (y){ 
//         if (y) return mul(x*y);
//         return x;
//     };
// }


// console.log(mul(5)(10)(2)(4)())


// /// object
// //This is a Number data type and the type of number data type is Number 
// let number=123
// console.log(`${typeof(number)} `) // Number
// // But we can change the Number data type in object with new Keyword
// let chageNumDataType = new Number(number) 
// console.log(typeof(chageNumDataType));// Object

// let x="Anurag"
// console.log(typeof(x)) 
// let y= new String(x)
// console.log(typeof(y)) 

// //

// const a={}
// const b={key : "b"}// here b is object
// const c={key : "c"}
// a[b]=123; // if i try to add b object as a key in a  it cant convert akey or string 
// a[c]=432;
// console.log(a)

//this

//Alone, this refers to the global object.
// console.log(this)//global object =>window object

//In an object method or function, this refers to the object.
// const obj={
//     name:"Anurag",
//     Roll:56,
//     reg:2334334,
//     get:function(){
//         return`get the name data from object is ${this.name}`
//     }
// }
// let x= obj.get()
// console.log(x)




// //In a function, this refers to the global object.
// function referece(){
//     console.log(this)
// }
// referece()

//In a function under strict mode, this becomes undefined.
"use strict";
function myFunction() {
  return this;
}

let takeVal=myFunction()
console.log(takeVal)

//In HTML event handlers, this refers to the HTML element that received the event:
var btn=document.querySelector(".btn")
let h1=document.querySelector(".heading")


    btn.addEventListener("click", (evt)=>{
   
        // h1.innerText="hello Anurag"
        console.log("hellow")

    })
