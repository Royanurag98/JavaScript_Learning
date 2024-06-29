function str(st){
return st[0];
}

let FirstC=str("Anurag");
console.log(FirstC); 

// You have given array of 5 element and you have given 5 random number if any number matched
// with array element return that number othewise return sad imoji?
function Target(x,...number){
     for(let i of x){
        for(let j of number){
            if(i===j)
            return i;
        }
     }
     return  "😪";
}
let arr1=[2,4,6,8];
let x= Target(arr1, 1,3,0,9)
console.log(x)