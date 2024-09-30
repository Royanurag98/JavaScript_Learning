// You have given two array you have to check both the array elements are equal and each element index are also equal
// arr1=[1,2,3]
// arr2=[1,2,3]

let arr1=[1,2,3]
let arr2=[1,2,8]

for(let i in arr1){
    console.log(i , '=', arr1[i]);
    console.log(i , '=', arr2[i]);
    if( arr1[i] ==  arr2[i]) console.log("yes");  
    else console.log("no");   
}


let ans="yes"
for (let x of arr1) {   
let flag = 'no';
    for (let y of arr2) {
        if (x == y) {
            flag = 'yes';
            break;  // Break only when a match is found
        }
    }
    if(flag=="no") ans="no" 
}
console.log(ans);





