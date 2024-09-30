// Find the max and min number from given array
// arr=[1,5,3,9,2]

/////////////////////////////////////////// FIND MAX VALUE FROM GIVEN ARRAY ////////////////////////////

// Using Math.max() function
let arr=[1,5,3,9,2]
let maxVal=Math.max(...arr)
console.log(maxVal);

// Using for of loop
temp=arr[0]
for(let x of arr){
   if(x>=temp) temp=x
}
console.log(temp);

//Using reduce function 

const maxValue=arr.reduce((ini, ele)=>ele>=ini?ele:ini, 0)
console.log(maxValue);
    

///////////////////////////////////////////FIND MIN VALUE FROM GIVEN ARRAY ////////////////////////////
// Using Math.min() function
let arr2=[3,5,7,9,2]
let minVal=Math.min(...arr2)
console.log(minVal);

// Using for of loop
temp=arr2[0]
for(let x of arr2){
   if(x<=temp) temp=x
}
console.log(temp);

//Using reduce function 
const minValue=arr2.reduce((ini, ele)=>ele<=ini?ele:ini, arr2[arr2.length-1])
console.log(minValue);


