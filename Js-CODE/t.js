

const arr=[2,3,4,5,6]
const sum=arr.map((num, index, arr)=>{
   return num*2 +index;
})
console.log(sum)