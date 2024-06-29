                                 // Sync and Async in Js ?
/*Synchronous :
Synchronous  means the code runs in a particular sequence of instructions given in the program. 
each instruction waits for previous instruction to complete its execution. 

In other words
Meaning of synchronous  programming is suppose you write a multiple line of instruction in your program 
in a sequence . in that case all lines of code run one by one and second lines of code waits for the previous 
line when previous line of code is executed now control of execution jump to the next line. 
 
Note : JavaScript is also synchronous programming language or single threaded*/


// How JavaScript is also synchronous programming language or single threaded 
// Besause this program execute line by line and next line wait for previous line ?

console.log("Start......");

for(let i=0; i<500; i++){
    console.log("hello");
}
console.log("End.........");

/*Async in js
Due to synchronous programming sometimes important instruction get blocked due to some previous instruction , 
which causes a delay in the UI. Asynchronous programming allow us to execute next instruction immediately 
and dose not block the flow of code*/

/*setTimeout() execute a function according to user . means When the user want to execute that function.we have
to pass the time inside the setTimeout() function  and setTimeout function provided by browser  */

 // setTimeout function alway wait in callback queue till  the execution of all line . 
 //////////////////////////////////////////////////////////////////////////////////
console.log("Hello ")
setTimeout(()=>{
    console.log("Anurag Kumar");
},2000)
// console.log("My name is ");

////////////////////////////////////////////////////////////////////////////////

console.log("Script start.....");
setTimeout(()=> {
    console.log("Execute end of seTimeout function...."),0})

for(let i=0; i<1000; i++){
    console.log("Script end of loop....");
}
console.log("Script end.....");

///////////////////////////////////////////////////////////////////////////////////
//clearTimeout() function is used to clear the setTimeout() function . if you not want to use setTimeout() 
//we can clear the setTime out function

console.log("Script start.....");
const id=setTimeout(()=> { // setTimeout() function always Return a id.
    console.log("Execute end of seTimeout function...."),0})

for(let i=0; i<1000; i++){
    console.log("Script end of loop....");
}
console.log("Script end.....");
console.log("Clear setTimeout functio using clearTimeout()");
clearTimeout(id);

////////////////////////////////////////////////////////////////////////////////////////////

// setInterval() work like a setTimeout() method but setTimeout() execute only one time after the end of time but 
//setInterval() method calls a function at specified intervals (in milliseconds).
//The setInterval() method continues calling the function until clearInterval() is called, or the window is closed. */


const ID=setInterval(()=> { // setInterval() function always Return a id.
    console.log("Number = ", Math.random()),100000})
clearInterval(ID);
