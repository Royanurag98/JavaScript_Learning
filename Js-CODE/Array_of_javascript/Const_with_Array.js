// CONSTANT WITH  ARRAY

// We know that we can not use const keyword for Re-declearing and Re-assing the value. 
//for both Primitive and Non-Primitive Data type.

//With Primitive  Data-type
const Name="Anurag";
// const Name="Raman"; // We can't Re-declear
// Name ="Rahul";// Also we can't Re-assign

//With Non-primitive Data-type
const arr1=[3,4,5,6,7,8];
// const arr1=[10,12,15]; We can't Re-declear
//  arr1=[3,4,5,6]; Also we can't Re-assign

// BUT WE CAN USE PREDEFINE MATHOD WITH REFERENCE (PRIMITIVE) DATA TYPE. BECAUSE OF THAT WE KNOW THAT 
//THE VALUE OF REFERENCE DATA TYPE STORE IN HEEP MEMORY AND IT CONTAIN SOME ADDRESS . 
 const arr4=[10,20,30,40];
 //arr4=[45,56,67,89];// we can't Re-assign because it create new array.
 arr4.push(60,70);
 console.log(arr4)




