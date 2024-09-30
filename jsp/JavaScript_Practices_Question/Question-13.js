// Get only the duplicate value from an array or string and return a unique value

let arr = [1, 2, 3, 2, 1, 4];
const Remove_Duplicate1=arr.filter((curEle, index, arr)=>arr.indexOf(curEle)!=index)
console.log(Remove_Duplicate1);
