/*map method is use to create a new array with the result on some opertion.
the value its callback return are used to make a new array.
map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array.
arr.map(value,index,arr)*/

// 
let arr5=[2,3,4,5,6];
function sum(val){
   return val+100; 
}

let x=arr5.map(sum)// callback function
console.log(x) ;


    let arr=[20,30,40,50];
    let newArray=arr.map((value) =>{
        return value*2;// we can perform various operation with return value
    });
    console.log("<br>",newArray,"<br>");

// //Array of object
// // if you want to create a new array with object value you can youse map function
let arr2=[
    {fname:"Anurag",lname:"Kumar" },
    {fname:"ravi",lname:"Kumar" },
    {fname:"Rohan",lname:"Kumar" }
];
let NewArr=arr2.map((value)=>{
    return value.fname + " " + value.lname;
})
console.log(NewArr)

let Square=[2,3,4,5,6,7];
let number=Square.map(( value,index)=>{
    
    return `square of Index ${index} is ${value*value}`;
})

 
console.log(number);

//
