//Destructuring Assignment with Functions
//We can also extract data from an array returned from a function. Let's say we have a function that 
//returns an array like the example below:
function sum(...number){// get the value
    console.log(number);
    let res;
    let [x,y,z, ...rest]=number;// destructring
    console.log(rest);
    for(let val1 of number){
    
      res=x+y+z;
    }
    return res;
}
let arr3=[2,3,4,5,6,7,8]
let x=sum(...arr3);
console.log(x);


// 
let arr;
function Throw(){
      
    return["Mango","Banana","Apple", "Potato","Tamato"];
}


let [f1,,f2]=Throw();// destructuring
console.log(f1)
console.log(f2)
