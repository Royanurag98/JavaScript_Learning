                                //Promises in JavaScript
//Callback hell is a problem in JavaScript so Solving for this type of problem we use promises  in js.
//Promise is a object in JavaScript  and it has three state.
   //1  Pending state
   //2. Resolve state
   //3  Reject state

//A JavaScript Promise object can be
//1Pending state : The result is Undefined .
//2. Resolve state : The result is value(Fulfilled)
//3 Reject state : The result is an error object

//How to use Promise
//promises in js is for eventual completion of task(Means given task is perform eventually 
//but we cant say that given task will be resolve or reject )  it is an object in js.

//We have two function then() and catch()of promise object. inside the function we can  pass both  the function if.
//If promise is full fill then we want to perform some task in that case we use .then() method
//If promise is Reject then we want to perform some task in that case we use .catch() method  And both the function  execute when our promise is full fill or reject.

//We pass  parameter inside then() and catch() method that is res and err it is use to access resolve or reject value // res= result

// Produce promish
function jushPromises(){
const fruitBucket = ["Mango", "Lichi", "Banana","Apple", "Orange"];
return new Promise((resolve, reject) => {

    if (fruitBucket.includes("Mango") && fruitBucket.includes("Apple")) {
        resolve("Take your Fruit milk Jush")// We can put any value like object , array....
    }
    else {
        reject("Bacausee Fruit are not available")//// We can put any value like object , array....
    }

})

}

// Consume Promish

fruitMakerPromis.then(
    (ifPassPromis) => {// First callback
    console.log("Your Jush is ready", ifPassPromis)
    },
    (ifPromisFaild) => {// Second callback
        console.log("Sory Your jush is not rady", ifPromisFaild)
    }
)

// Instade of this we can do promises chaning

// IF promises is fulfield execute .then
jushPromises().then(
    (ifPassPromis) => {// First callback
    console.log("Your Jush is ready", ifPassPromis)
    },
  // IF promises is not fulfield execute .catch
).catch((Error)=>{
    console.log("Sory Your jush is not rady", Error)
})