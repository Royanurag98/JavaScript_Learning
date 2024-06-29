
//In JavaScript, there are two ways to copy objects: Shallow copy and Deep copy. 

// 1.SHALLOW COPY.
/*
it copies the object and all its properties, but any nested objects or arrays will still reference 
the same memory location as the original object. It means that if you make changes to the nested 
object, it will also affect the original object, as well as the copied object */

// EXAMPLE SHALLOW COPY
// If i simple object copy one from another with the help of spread operator, then if you make changes to the original object 
// in that case copy object has no effect because both have own space in memory,
//  let arr=[2,3,4,5,6]
//  let arr1=[...arr];
//  console.log(arr);
//  console.log(arr1);
//  arr.push(10,20);
//  console.log(arr);
//  console.log(arr1);

let arr3=[2,4,6,8,
    arr4=[9,10,11]// Nesting array(Array inside the array)
       ];
let arr5=arr3;
console.log(arr3);
console.log(arr5);

arr5.push(50);
console.log(arr3);
console.log(arr5);
 /**it copies the object and all its properties, but any nested objects or arrays will still reference 
 the same memory location as the original object. It means that if you make changes to the nested 
 object, it will also affect the original object, as well as the copied object */
//  let arr3=[2,4,6,8,
//      arr4=[9,10,11]// Nesting array(Array inside the array)
//         ];
// let arr5=[...arr3];
// console.log(arr3);
// console.log(arr5);
// arr5.push(50);
// console.log(arr3);
// console.log(arr5);

//We can also use object constructor method i.e Object.assign for Shallow copy 
// Object.assign(targetObject, SourceObject)
// let targetObj1={
//     Name : 'Anurag Kumar',
//     Roll: 57,
//     Reg:12213393,

// };
// We can also put the value in Souce Object
// let  SourceObject= Object.assign({City:"Bhagalpur"},targetObj1);
// // console.log(targetObj1);
// // console.log(SourceObject);
// // check  copy or not
// targetObj1.Name="Aman";
// console.log(targetObj1);
// console.log(SourceObject);
    

