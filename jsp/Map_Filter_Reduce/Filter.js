///////////////////////////////////////////////filter() Array method////////////////////////////////////////

//filter method is use to create a new array by applying the condition of each element of existing 
  //array if the condition is true then it pushed the element in output array. Otherwise not  
//Filter() does not execute the function for empty elements.
//Filter() does not change the original array.

//Note
/*Filter method takes a callback function and the callback function take three arguments
 first as a current Element, second as a index of current elements and third as a array it self.*/

 let arr=[2,8,5,6,3,5,9,7]

 let GraterThenTwo=arr.filter((CurElem)=>{
    return CurElem>2
 })
 console.log("Number is Grater then 4 is :", GraterThenTwo)
 console.log(arr);//filter() does not change the original array.
 
// Filter dose not change original array any condition
