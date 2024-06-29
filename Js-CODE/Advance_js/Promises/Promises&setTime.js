// PROMISES WITH SETTIMEOUT

// I WANT TO RESOLVE AND REJECT OUR PROMISES AFTER TWO SECOND

//resoleve callback hall

function foodOrder(){
    const foodItems=["Chicken Ticka", "Fride Rice", "Egg Rice"];
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(foodItems.includes("Chicken Ticka")){
            resolve("Chicken Ticka is Available")
          }
          else
          reject(" Not Availables")
        },2000)
    })
}

foodOrder().then((ifAvailable)=>{
   console.log("Your ",ifAvailable)
},).catch((ifNotAvailable)=>{
    console.log(" Sorry Your Chicken ticka  is ",ifNotAvailable)
})

// jushPromises().then(
//     (ifPassPromis) => {// First callback
//     console.log("Your Jush is ready", ifPassPromis)
//     },
//   // IF promises is not fulfield execute .catch
// ).catch((Error)=>{
//     console.log("Sory Your jush is not rady", Error)
// })
 

    
    