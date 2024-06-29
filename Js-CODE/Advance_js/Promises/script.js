
// We know that setTimeout strore in callback Queue and promises store micro task queue . first micro task queue because of 
// that maicro task queue callback function has highest prority then callback queue
/// PROMISES : it is browser featers.. and promises are also Async task

// Produce promish

const fruitBucket = ["Mango", "Lichi", "Banana", "Orange"];

const fruitMakerPromis = new Promise((resolve, reject) => {

    if (fruitBucket.includes("Mango") && fruitBucket.includes("Apple")) {
        resolve("Take your Fruit milk Jush")// We can put any value like object , array....
    }
    else {
        reject("Bacausee Fruit are not available")//// We can put any value like object , array....
    }

})

// Consume Promish

// fruitMakerPromis.then(
//     (ifPassPromis) => {// First callback
//     console.log("Your Jush is ready", ifPassPromis)
//     },
//     (ifPromisFaild) => {// Second callback
//         console.log("Sory Your jush is not rady", ifPromisFaild)
//     }
// )

// Instade of this we can do promises chaning

// IF promises is fulfield execute .then
fruitMakerPromis.then(
    (ifPassPromis) => {// First callback
    console.log("Your Jush is ready", ifPassPromis)
    },
  // IF promises is not fulfield execute .catch
).catch((Error)=>{
    console.log("Sory Your jush is not rady", Error)
})