const promissOne= new Promise((resolve, reaject)=>{
   // db calls, network.....
   setTimeout(()=>{
    console.log("Promiss is an pending state")
    resolve("Success")
   },3000)
  
})

promissOne.then((res)=>{
    console.log("promiss is full filed",res)
})

// we can create promish without variable
new Promise((resolve, reaject)=>{
    setTimeout(()=>{
        console.log("Promise is pending................")
        resolve()
    },3000)
}).then((res)=>{
    console.log("Now our promise is full fild....")
})

// we can pass object inside the resolve

const promiseThree= new Promise((resolve, reaject)=>{
    setTimeout(() => {
        console.log("Our promise is pending state........")
        resolve({Name:"Anurag Kumar", Age:23, State:"Bihar"})
    }, 3000);
})

promiseThree.then((res)=>{
    console.log("Now our Promise is full fill");
    console.log(res)
    
})




const promiseFour= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let user=false
        if(!user){
            resolve({Name:"Anurag Kumar", Age:23, State:"Bihar"})
        }
        else {
             reject("Somthing went to worng!")
        }
    })
})
promiseFour.then((User)=>{
    console.log("User Info :", User);
    return User.Name
    
}).then((UserName)=>{
   console.log(UserName)
}).catch((rej)=>{
    console.log(rej)
})

////

const promiseFive= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let user=false
        if(!user){
            resolve({Name:"Anurag Kumar", Age:23, State:"Bihar"})
        }
        else {
             reject("Somthing went to worng!")
        }
    })
})

async function cusumePromiseFive(){
    try{
        const response= await promiseFive
        console.log(response)

      
    }
    catch (error){
         console.log(error)
    }

}
cusumePromiseFive()
