//// DIFFERENCE BETWEEN MAP AND FOREACH 


// 1. map() return the resultent value
// we can chaning with map
let arr1=[2,3,4,5,6]
const mapResult1=arr1.map((CurrEle)=>{
   return CurrEle+2
})
console.log(mapResult1)

// 2. map() can not modefy the original array
const mapResult2=arr1.map((CurrEle)=>{
   return CurrEle+2;
})
console.log(mapResult2, arr1)


// forEach()
// we can not chaning with forEach because it not retturn any value
//1. forEach() not return anything so if i try to return gets undefined value
let arr2=[2,3,4,5,6]
const forEachResult=arr2.forEach((CurrElem,i,arr)=>{
   return CurrElem+2
})
console.log(forEachResult) //undefine


//2. The forEach() method itself does not modify the original array, but it provides the ability to do modefy
arr2.forEach(num => {
    console.log(num * 2); // This just logs the doubled value, doesn't modify the array 
   });
   console.log(arr2); // [1, 2, 3, 4] - The original array remains unchanged

arr2.forEach((curElem, i, arr)=>{
 let x= arr[i]=curElem*4
 console.log(x)
})
console.log(arr2)





// get the name from all object

// for (let x in student){
//     console.log(student[x].name)
// }

// for (let x of student){
//     console.log(x.name)
// }
 let name=student.map((Stuname)=>{
    return Stuname.name;
 })
 console.log(name);

 const StuMarks=student
 .map((StudentMarks,i)=> StudentMarks.Marks)
 .filter((smarks)=>smarks>60)

 console.log(StuMarks )

