let btn=document.querySelector("#btn");
const fulBody=document.querySelector("body");
const box=document.querySelector(".cotain")

btn.addEventListener("click",(e)=>{
let x=Math.floor(Math.random()*100);
let y=Math.floor(Math.random()*100);
let z=Math.floor(Math.random()*100);
let color=`rgb(${x},${y},${z})`;
    fulBody.style.backgroundColor=color;
    console.log(color)
    box.innerText=`Current Color : rgb(${x},${y},${z})`
})

 

