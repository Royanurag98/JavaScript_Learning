
//What is Currying 
//Currying is a technique used in functional programming languages, including JavaScript, where a function 
//with multiple arguments is transformed into a sequence of nested functions, each taking a single argument. 

///////////////////////////////////////////////////////////////////////////
// Original function with multiple arguments
function add(a, b, c) {
     return a + b + c;
    }
    console.log(add(2,3,6))

//Currying is a technique , where a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument. 
///////////////////////////////////////////////////////////////////////////////
function outerFun(a){
         return function innerFunOne(b) {
            return function innerFunTwo(c){
                 return function innerFunThree(d){
                    return function(e){
                        return function(f){
                            add = a+b+c+d+e+f;
                            return add;
                        }
                    }
                 }
            }
         }
    }
    
    // normal way to call all the function
    let res=outerFun(2)
    let res1=res(3)
    let res2=res1(4)
    let res3=res2(5)
    let res4=res3(6)
    let res5=res4(7)
    console.log(res5)
    
    // Usage of the curried function
    let store=outerFun(5)(6)(7)(8)(9)(10)
    console.log(store)

///////////////////////////////////////////////////////////////////////////////
// use IIFE Use closer use currying function another way to use currying
let add1=((a)=>(b)=>(c)=>(d)=>(e)=>a+b+c+d+e)(2)(3)(4)(5)(6); console.log(add1)


////////////////////////////////////////////////////////////////////////////
// INFINITING CURRYING
console.log("\n ///////////////////////////////////////////////////////");
function mul(x){
    return function (y){
        if (y) return mul(x*y);
        return x;
    };
}


console.log(mul(5)(10)(2)())

//difference between currying and partial application

//currying: indivisual function for each arguments 