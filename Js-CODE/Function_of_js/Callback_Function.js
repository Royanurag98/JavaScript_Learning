//FUCTION CALL BACK
// When i call a function  inside a functio as a argument that is call back

function funOne(callback){
   console.log("Here i call a function i.e sum function");
   callback(4,5);
}

let sum=(a,b)=>{
    let add=a+b;
    console.log(add);
 }

 funOne(sum);// sum() function passed as a argument in other function