//forEach() array method//////////////////////////////////////////

//The forEach() method calls a function for each element in an array.
//The forEach() method is not executed for empty elements. And it return nothing
/*The forEach() method takes two arguments first arguments takes as a callback function and the second 
arguments is thisValue (thisValue Optional. Default undefined. A value passed to the function as its this value.)
First arguments also takes three arguments current value, index, array itself*/
//In JavaScript, the forEach() method does not change the original array

let arr=[1,2,3,4,5,6,7]
arr.forEach((value,index,array)=>{
    console.log(`Index of Array is ${index} And value of array is ${value*2}`)
    if(arr[index]==arr.length){
        console.log(`\n Array ${array}`) // return array itself.

    }
   
}, this)
console.log(this)// return empty object
console.log(arr) //the forEach() method does not change the original array

let arr0=[10,20,30,40];
arr.forEach(function(val,index){
    console.log(index, "==>", val);

})
// I want to add 100 in each element of array
let arr1=[10,20,30,40];
arr1.forEach((val,index)=>{
    console.log(index, "==>", arr1[index]+100);
    console.log(index, "==>", val+100);
 
    
})
// Array contructor has prototype . using this prototype we can create custom forEach, map.. so on
// Implement custom forEach
// Implement custom forEach
let arr2=[1,2,3,4,5];// parent object
Array.prototype.customForEach=function(callback){
    const array = this // this refers to parent object
    for(let i=0; i<array.length; i++){
      callback(array[i],i,array)// call the callback and pass array element, index and array itself.
    }
}

arr2.customForEach((element, index, array)=>{// just i useed custom forEach function
  console.log(element,index)
  if(index==array.length-1){
    console.log(array)
  }
});


///////////////////////////////////////////////////////////
let array=[
    {Name:"Anurag", Age:22, State:"Bihar"},
    {Name:"Raman", Age:24, State:"Bihar"},
    {Name:"Aman", Age:23, State:"Bihar"},
]

Array.prototype.customMap=function(callback){
    const arr=this
  
    for(let i=0; i<arr.length;i++){
       callback(arr[0], i, arr)
    } 
}

array.customMap((element,i, array)=>{
    console.log(element,i,array)
})