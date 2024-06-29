// Rest operator is used with function

let sumNum=(a,b,c,...number)=>{
    console.log(number);
   let Result=a+b+c;
   return Result; 
}
let catResult=sumNum(2,4,5,6,7,8,9,10);
console.log(catResult);

// Given an array of n number of element we have to pass in a function as a argument and find sum of array element
let sumOfArrayElement=( ...element)=>{
    let sum=0;
    for(let val of element){
         sum=sum+val;
    }
    return sum;
}
let arr=[2,3,4,5,6,7,8,9];
let res=sumOfArrayElement(...arr);// Use spread operator
console.log(res);