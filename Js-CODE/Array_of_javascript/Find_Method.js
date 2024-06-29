// Find method
let array=["Hourse", "Elephent","Monkey","Dog"];
let AniLength=array.find((string)=>{
    return string.length===3;
})
console.log(AniLength);

//

let arr=[
    {Name:"Anurag", userId:1},
    {Name:"Vivak", userId:3},
    {Name:"Rohan", userId:2},
    {Name:"Ravi", userId:6}
]

let Id=arr.find(( id)=>{
     return id.userId===2;
})
console.log(Id);