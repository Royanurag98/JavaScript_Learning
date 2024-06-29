const childBox=document.querySelector(".child");
const parentBox=document.querySelector(".parent");
const grandParentBox=document.querySelector(".grandParent");
const body=document.querySelector("body");

// Capturing/////////////////////////////////////////////////

childBox.addEventListener("click",()=>{
    console.log("Cpturing =>  Child Box ");
},true)
parentBox.addEventListener("click",()=>{
    console.log("Cpturing =>  Parent Box ");
},true)
grandParentBox.addEventListener("click",()=>{
    console.log("Cpturing =>  Grand Parent Box ");
},true)
body.addEventListener("click",()=>{
    console.log("Cpturing =>  body");
},true)



// Bubbling/////////////////////////////////////////////////////
childBox.addEventListener("click",()=>{
    console.log("Bubling =>Child Box ");
})
parentBox.addEventListener("click",()=>{
    console.log("Bubling Parent Box ");
})
grandParentBox.addEventListener("click",()=>{
    console.log("Bubling Grand Parent Box ");
})
body.addEventListener("click",()=>{
    console.log("Bubling body");
})

//7.Event delegation//////////////////////////////////////////

grandParentBox.addEventListener("click", (e)=>{
    console.log(e.target)
})