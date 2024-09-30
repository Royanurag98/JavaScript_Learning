////////////////////////////////////////////////forEach() Array method

// The forEach() method in JavaScript does not return any value. It is used to iterate over each element
//  in an array and execute a provided function once for each element. However, it always returns undefined,
//   making it unsuitable if you need to return a new array or transformed values.

// If you need to create a new array or return values, you should use methods like map(),
//  which returns a new array with the transformed elements.

//The forEach() method calls a function for each element in an array.
//The forEach() method takes two arguments first arguments takes as a callback function and the second arguments is thisValue (thisValue Optional. 
//Default undefined. A value passed to the function as its this value.)
// First arguments also takes three arguments current value, index, array itself
//In JavaScript, the forEach() method does not change the original array

  //array.forEach(function(currentValue, index, arr), thisValue)

  let arr=[2,3,4,5,6];
  let value=arr.forEach((curEle, index, arr)=>{
      return curEle+2;
  }, this)
  console.log(value)

  const numbers = [1, 2, 3, 4];

numbers.forEach(num => {
  console.log(num * 2); // This just logs the doubled value, doesn't modify the array
});

console.log(numbers); // [1, 2, 3, 4] - The original array remains unchanged

const numbers2 = [1, 2, 3, 4];

numbers.forEach((num, index, arr) => {
  arr[index] = num * 2; // This modifies the original array
});

console.log(numbers2); // [2, 4, 6, 8] - The original array is modified