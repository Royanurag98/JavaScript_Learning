
////////////////////////////////// SYNCHRONOUS AND ASYNCHRONOUS  PROGRAMMING /////////////////////////////////////////

// 1. SYNCHRONOUS  PROGRAMMING////////////////////////////////////////////////

// console.log("Start the execution from first line of code") // Execute
// console.log("Second Line.................................") // Execute
// console.log("Third Line.................................")  // Execute
// console.log("Fourth Line.................................") // Execute
// console.log("Fifth Line.................................")  // Execute
// console.log("Sixth Line.................................")  // Execute
// for(let  i=0; i<2000; i++){ // Execute
//     console.log("hellow");  
// }

// // Wait for previous line of execution when complete of execution then it start the exucuting
// console.log("Eight Line.................................")
// console.log("Ningth Line.................................")
// console.log("End the execution of code Line.................................")


// 1. ASYNCHRONOUS  PROGRAMMING///////////////////////////////////////////////

console.log("Start the execution from first line of code") // Execute
console.log("Second Line.................................") // Execute
console.log("Third Line.................................")  // Execute
console.log("Fourth Line.................................") // Execute

setTimeout(() => {
     console.log("Hellow")
},5000);
console.log("Fifth Line.................................")  // Not Wait for previous line of execution.
console.log("Sixth Line.................................")  // Execute
console.log("Seventh Line.................................") // Execute