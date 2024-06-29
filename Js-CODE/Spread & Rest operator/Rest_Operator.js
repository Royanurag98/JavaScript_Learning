// REST OPERATOR IN JS

// REST OPERATOR : IT USED TO PACKS THE ELEMENTS AND  PACKS THE ELEMENTS IN ARRAY
function Sum(...Number){
    console.log(Number)
    let result=0;
    for(let x of Number){
        result=result+x;

    }
    return result;
}
let y=Sum(2,3,4,5);
console.log( y);

// Suppose we have multiple elements of array 
function Sum(num1, num2,...Number){
    console.log(Number)
    let result=0;
    for(let x of Number){
        result=result+x;

    }
    return result;
}
// i want to stro some element of arry in num1 and num2  for performing some extra task.
let arr=[4,5,6,7,8,9];
let z=Sum(...arr);
console.log( z);


// Suppose we want to find max number and these number come from backend and number comes in the form of array.
// so we have to use math.max
let Number_Come_From_Backend=[1,2,3,4,5,6,7,8,9,10,11,12]; // packed number 
console.log(Number_Come_From_Backend); 
let x=Math.max(...Number_Come_From_Backend);// First unpacked the number use spread operator then find max number
console.log(`Max number is ${x}`);

// Distructuring the object
const User={
     Name:"Anurag",
     State:"Bihar",
     City:"Bhagalpur"
}
console.log(User);

const {Name, ...Address}=User;// Distructuring the object
console.log(Name);
console.log(Address);


// i want to store state and city in address variable but in the form of object.


