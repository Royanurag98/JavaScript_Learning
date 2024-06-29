/// Let see use of return keyword

// 1. We can return any operation.

function  calculateNum(x,y,z){
    let Add=x+y+z;
    let sub=x-y-z;
    return Add;
    //return console.log(Add,"\n",sub); //We can return multiple operation

}
let Result=calculateNum(4,5,6);
console.log(Result);

// We can return array
function Sender(){
 return [2,3,4,5,6];
}
let cat =Sender();
console.log(cat);

// We can also return function i.e is calld first order function

function fun(str){
    console.log(str);
    return rFun;
}
let rFun=()=>{
    console.log(" I am  here");
}

let cat1=fun("Anurag");
cat1();
