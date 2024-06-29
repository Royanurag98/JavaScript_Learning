//The reduce() method executes a reducer function for array element.
//The reduce() method returns a single value: the function's accumulated result
//The reduce() method got its name from the functionality it provides, which is to iterate 
//and “reduce” an array's values into one value.
//The reduce() method works in a similar manner to the forEach() method, with the added ability to collect 
//the result of each iteration as a single value.
 
//Let’s try to get the total sum of array element using the reduce() method. First, you need to call the reduce()
// method and pass two parameters to the callback function: accumulator and item.
const arr=[10,20,30,40,50];
let toatalSum=arr.reduce((accumulator,item)=>{
    return accumulator+item;

    // Accumulator     arrayVal     Return
    //     0       +    10        = 10
    //     10      +    20        = 30
    //     30      +    30        = 60
    //     60      +    40        = 100
    //     100     +    500       = 150


}, 0)// zero is the initial value for  accumulator.
console.log(toatalSum);