// Find the sub string in given string . which is given by user

let str='My Name Is Anurag Kumar'
let arr=str.split(' ')
console.log(arr);

let subStr="Are"
let flage='no'
for(let word of arr){
    if(word==subStr)
       flage='Yes given substring is in array'
}

if(flage=='no') console.log("No given substring is not in array");
else console.log(flage);

const res=arr.map((CurVal)=>subStr==CurVal?"Yes":"No")
console.log(res[1]);


