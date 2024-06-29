const box=document.querySelector("body");
let currentColler="yellow"
box.style.backgroundColor=currentColler;
box.style.display="flex"
box.style.justifyContent="center";

box.style.alignItems="center";
box.style.paddingTop="350px"


const btn=document.querySelector(".btn");
console.log(btn);
btn.style.backgroundColor="black";
btn.style.color="white"
btn.style.padding="10px"
btn.style.borderRadius="25px"
btn.style.border="2px solid black"
// btn.style.boxShadow="1px 1px 10px  5px white"
btn.style.cursor="pointer"


btn.addEventListener("click",(e)=>{
     console.log("clicked")
    if(currentColler=="yellow"){ 
     box.style.backgroundColor="red";
     currentColler="red";
     console.log(e.target.textContent)
    }
   
    else if(currentColler=="red"){
       
        box.style.backgroundColor="green";
         currentColler="green"
         console.log(e.target.textContent)
    }
    else if(currentColler=="green"){
       
        box.style.backgroundColor="yellow";
        currentColler="yellow";
        console.log(e.target.textContent)
    }


})

