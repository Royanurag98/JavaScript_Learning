let btn1=document.querySelector(".btn");
btn1.addEventListener("click", ()=>{
    alert("Nameste");
});
btn1.addEventListener("click", ()=> {
    document.write("hello");
});
// We can also access event object inside the event listner
// let box=document.querySelector("#box");
// box.addEventListener("mouseover", (evtobj)=>{
//     alert("Nameste");
//     console.log(evtobj); //Print the object  of event on console
//     console.log(evtobj.type);//Print the type of event on console
//     console.log(evtobj.target);//// Print the event target on console
// });
// box.addEventListener("mouseover", ()=> {
//     document.write("Welcome on web page");
// });

// // We can remove any handler function but callback reference should be same
// let btnNew=document.querySelector(".btnNew");
// btnNew.addEventListener("click",()=>{
//     alert("hello");
// });

// let bt=() =>{
//     alert("hii");
// };
// btnNew.addEventListener("click",bt);
//  btnNew.removeEventListener("click",bt);