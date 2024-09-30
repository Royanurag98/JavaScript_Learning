// Find the sum square of all the element in array
// METHOD-1
let arr=[2,3,4,5]
let sum=0
for(let x of arr){
    for(let y of arr)
        if(x==y)
            sum+=x*y
}
console.log(sum);

// METHOD-2
temp=0
arr.map(( curVal)=>temp+= curVal*curVal)
console.log(temp);

// METHOD-3
const res2=arr.reduce((iniVal, curVal)=>iniVal += curVal*curVal,0)
console.log(res2);

