//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not execute the function for empty elements.
//The filter() method does not change the original array



//Examplelong meethod
let arr=[2,3,4,5,6,7,8,9];
let isEven=(number)=>{
    return  number%2==0;

}

let FilteredVal=arr.filter(isEven);
console.log(FilteredVal);

//Short method
let arr1=[20,30,24,34,35,28,21,22];
let getVal=arr1.filter((arrElement)=>{
     return arrElement>24
})
console.log(getVal);
