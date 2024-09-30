////////////////////////////////////////// CALLBACK //////////////////////////////////////////////
function sum(x,y){
  let res=x+y
  console.log(x+y)
}
function calculater(a,b,sumCallback){
    sumCallback(a,b)
}
calculater(2,5, sum)

////////////////////////////////////////// CALLBACK HELL //////////////////////////////////////////////

const funOne=(x,y, ()=>{
    console.log(x+y);
    (p,q,callback)=>{
        console.log(p,q);
           (callback)=>{
           console.log("hello");
             (callback)=>{
            console.log("hello3")
           }
           
        }
    } 
})

    

