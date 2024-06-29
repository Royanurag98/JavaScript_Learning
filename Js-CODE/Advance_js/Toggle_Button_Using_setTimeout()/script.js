let startBtn=document.querySelector("#startBtn");
const fulBody=document.querySelector("body");
const box=document.querySelector(".cotain");
const stopBtn=document.querySelector("#stopBtn");

fulBody.style.backgroundColor="black"
var intervalID=setInterval(()=>{
var x=Math.floor(Math.random()*100);
var y=Math.floor(Math.random()*100);
var z=Math.floor(Math.random()*100); 
var color=`rgb(${x},${y},${z})`;
    fulBody.style.backgroundColor=color;
    console.log(color)
    box.innerText=`Current Color : rgb(${x},${y},${z})`
},500)
stopBtn.addEventListener("click",()=>{
   clearInterval(intervalID);
})


 

