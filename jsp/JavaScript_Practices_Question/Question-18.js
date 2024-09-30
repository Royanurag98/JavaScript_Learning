// Conver the string in Camel case and Snake case which is given by user

let str="my name is anurag kumar"
let arr=str.split(' ')
let str2=''

for(let word of arr){
 str2 += word[0].toUpperCase()+word.slice(1)
}
console.log(str2);

const res=str.split(' ').map((curVal)=>curVal[0].toUpperCase()+curVal.slice(1))
console.log(res.join(''));


// Conver the string in Snake case which is given by user
const res1=arr.map((curVal,index)=>arr.length-1==index?curVal: curVal+"_")
console.log(res1.join(''));
const res2=arr.reduce((iniVal,curVal,index)=>iniVal+"_"+curVal,'')
console.log(res2.slice(1));


