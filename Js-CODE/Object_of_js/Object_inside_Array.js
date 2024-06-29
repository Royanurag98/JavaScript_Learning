// Object inside the array very useful concept
let arr=[
    {User_Name:"Anurag", User_Id:2345, User_Pass:90908},
    {User_Name:"vivake", User_Id:2448, User_Pass:1010},
    {User_Name:"Arun", User_Id:2545, User_Pass:74836},
    {User_Name:"Deepak", User_Id:2645, User_Pass:8377},
]
console.log(arr);
for(let objval of arr ){
     console.log(objval)
    console.log(objval.User_Name)
    console.log(objval.User_Id)
}

// Destructring 
let[ x ,, ,y] =arr;
console.log(x)
console.log(y)
console.log(x.User_Name)
console.log(y.User_Pass)