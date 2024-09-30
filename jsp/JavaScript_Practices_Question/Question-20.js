// FIND THE MAX ELEMENT FROM GIVEN ARRAY////////////////////////////////////////////////////////////

const arr=[3,6,4,8,2,1,7,5,3]
// METHOD-1
console.log(Math.max(...arr));

// METHOD-2
let temp=0
for(let x of arr) if(temp<x) temp=x
console.log(temp)

// METHOD-3
 const maxVal=arr.reduce((iniVal, curVal)=>iniVal<curVal?curVal:iniVal)
 console.log(maxVal);
 

// FIND THE Min ELEMENT FROM GIVEN ARRAY////////////////////////////////////////////////////////////////

// METHOD-1
console.log(Math.min(...arr));

// METHOD-2
let temp_var=arr[0]
for(let y of arr) if(temp_var>=y) temp_var=y
console.log(temp_var)

// METHOD-3
 const minVal=arr.reduce((iniVal, curVal)=>iniVal>=curVal?curVal:iniVal)
 console.log(minVal);
