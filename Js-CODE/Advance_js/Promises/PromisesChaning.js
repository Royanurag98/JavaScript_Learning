
function PromiseChaning(){
    return new Promise((resoleve,reject)=>{
        resoleve(" My Name is Anurag ")

    })
}
// tehen method always return promises

PromiseChaning().then((Name)=>{
 console.log(Name);
 Name += "Roy";
 return Name
})
.then((Name)=>{
console.log(Name);
 Name +=" And i am from Bihar";
 return Name 
})
.then((Name)=>{
    console.log(Name);  
})