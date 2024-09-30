///////////////////////////////map()  method////////////////////////////////////////////////////

//map method is use for create a new array from existing one by using  a function to each  
   //elements of the first array.
//map() does not execute the function for empty elements.
//map() does not change the original array.

//Note
/*Map method takes a callback function and the callback function take three arguments first as
 a current Element, second as a index of current elements and third as a array it self.*/ 

 ///////////////////////////////////////////////////
//map() does not change the original array.
let arr=[2,3,4,5,6]
let newArr=arr.map((curEle, index, array)=>{
    return curEle*2
})
console.log('New array is :',newArr);
console.log("Old array is ", arr); 

// But We can change the original array with the help of callback parametter
let arr8=[2,3,4,5,6]
arr8.map((curEle, index, array)=>{
    array[index]= curEle*2
    
})

console.log("Old array is ", arr); //map()  change the original array.

 ///////////////////////////////////////////////////
let arr2=[
   {
     Name:'ANurag Kumar',
     Roll:57,
     RegNo:12213367
    }
]

let newArr2=arr2.map((CurElem)=>{
    return CurElem
})
console.log(newArr2.CurElem)

 ///////////////////////////////////////////////////
 let arr3=[2,3,4,5,6]
 let Square=arr3.map((value, index)=>{
    return `index ${index} : ${value*value}`
 })
console.log(`Square of all Element of array `, Square)