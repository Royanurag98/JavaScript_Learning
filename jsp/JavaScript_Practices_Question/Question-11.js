// Find the sum of digit of given number like 24785

let str="24785"
let Sum_Of_Num=0
for(let num of str){
Sum_Of_Num +=parseInt(num)
}
console.log(Sum_Of_Num);

let temp=0
const Add_Num1=str.split('').map((curVal)=>temp+= parseInt(curVal))
console.log(temp);


const Add_Num=str.split('').reduce((iniVal, curVal)=>iniVal+= parseInt(curVal),0)
console.log(Add_Num);

