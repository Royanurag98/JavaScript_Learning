//HOW TO CLONE ARRAY
// i want to make a copy of arr1  and assign in arr2 but if I updating arr1 in that case arr2 will not affected . 


// We can do it whith the help slice method 
// let arr1=[2,4,6,8];
// let arr2=arr1.slice(0); //slice method  return new array that the resion if I updating one of them will not affect the other. 
// console.log("Value of arr1 is " ,arr1);
// console.log("Value of arr2 is ",arr2);
// arr1.push(9,10);
// console.log("After Adding the value in arr1");
// console.log("Value of arr1 is " ,arr1);
// console.log("Value of arr2 is " ,arr2);


// We can do it whith the help concatenation 
// let arr1=[2,4,6,8];
// let arr2=[].concat(arr1); // if i concatenation with empty array it return new array that the resion if I updating one of them will not affect the other. 
// console.log("Value of arr1 is " ,arr1);
// console.log("Value of arr2 is ",arr2);
// arr1.push(9,10);
// console.log("After Adding the value in arr1");
// console.log("Value of arr1 is " ,arr1);
// console.log("Value of arr2 is " ,arr2);



// 1. WE CAN COPY THE  array or object ELEMENT OR CLONING 


let arr5=[3,4,6,8];
// Spread operator make a copy of arr1 and assign in arr2 and it also take a seprate space in memory so if i update somthing in arr1 later. in that case arr2 has no effect.
let arr6=[...arr5,"Anurag","Ravi"]; // Unpack the array then assign in array
console.log("Original Array  :", arr5);
console.log("Duplicate Array :",arr6);
arr5.push(10,20);
console.log("Original Array  :", arr5);
console.log("Duplicate Array :",arr6);