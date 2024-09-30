

const newPromise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Or promise is pending.........")

        let error=false
        if(!error){
            resolve()
        }else{
            reject("Somthing want to wrong")
        }
    })
})

async function PromiseGet(){
    try {
        let response= await fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1&select=key2&select=key3');
        dat=await response.json()
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}
