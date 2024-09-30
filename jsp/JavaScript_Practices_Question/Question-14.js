// Remove all the duplicate value from an array or string 
// let str="ssbhhyggiotio" 
// let arr=[1,2,3,2,1,4]

let arr=[1,2,3,2,1,4]

let arr2=[]
for(let x of arr){
    let count=0
    for(let y of arr){
        if(x==y) count++
    }
    if(count !=2) 
        arr2.push(x)
}
console.log(arr2);


let str="ssbhhyggiotio"
var res=""

for(let x of str){
    let cnt=0;
    for(let y of str){
        if(x==y)
            cnt++;
    }
    if(cnt!=2)
        res=res+x;
}
console.log(res)



