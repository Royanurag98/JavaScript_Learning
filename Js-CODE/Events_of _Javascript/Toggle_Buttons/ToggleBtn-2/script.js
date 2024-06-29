let box=document.querySelector("body");
let btn=document.querySelector(".btn");

let mode="green"
 
btn.addEventListener( "click",()=>{
    if(mode=="green"){
         mode="blue"
        box.classList.add("blue");
        box.classList.remove("green")
    }
    else if(mode=="blue")
    {
        mode="red"
        box.classList.add("red")
        box.classList.remove("blue")
    }
    else if(mode=="red")
    {
        mode="yellow"
        box.classList.add("yellow")
        box.classList.remove("red")
    }
    else if(mode=="yellow")
    {
        mode="pink"
        box.classList.add("pink")
        box.classList.remove("yellow")
    }
    else if(mode=="pink")
    {
        mode="orange"
 
        box.classList.add("orange")
        box.classList.remove("pink")
       

    }
    else {
        mode="green"
        box.classList.remove("orange")
        box.classList.add("green")
    }
 

})