// Remove  the duplicate value from an array or string and return a unique value 
let arr = [1, 2, 3, 2, 1, 4];
let arr2 = [];

for (let x of arr) {
  if (!arr2.includes(x)) {
    arr2.push(x);  // Add only if it's not already in arr2
  }
}
console.log(arr2);  

const Remove_Duplicate=arr.filter((curEle, index, arr)=>arr.indexOf(curEle)==index)
console.log(Remove_Duplicate);







 
    
  

