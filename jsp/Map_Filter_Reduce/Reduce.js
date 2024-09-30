//The reduce() method executes a reducer function for array element. and it returns a single value: the function's accumulated result
//reduce() does not execute the function for empty elements.
//reduce() does not change the original array.
//The reduce() method works in a similar manner to the forEach() method, with the added ability to collect 
//the result of each iteration as a single value.
 
//Note
/*The reduce method takes two arguments first arguments takes as callback function and the second
arguments takes as initial value for accumulator.
      array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
First arguments also takes four arguments accumulator, current value, index, array itself
Accumulator: it store the previous result*/

let arr=[2,3,4,5,6];
let sumOfArrElements=arr.reduce(( accumulator,CurElem, index, array)=>{
    return accumulator+CurElem

    
    // accumulator     CurEle     Return
    //     0       +    10        = 10
    //     10      +    20        = 30
    //     30      +    30        = 60
    //     60      +    40        = 100
    //     100     +    500       = 150

}, 0)// zero is the initial value for  accumulator.

console.log("Sum Of array is :", sumOfArrElements)
console.log(arr);//reduce() also does not change the original array.