let btn=document.createElement("button");
btn.innerText="Click Me";
let body=document.querySelector("body");
btn.style.backgroundColor="red";
btn.style.color="White";
btn.style.border="2px solid black";
btn.style.borderRadius="10px";

body.prepend(btn);

console.dir(Window); //Access the window object.
console.dir(window.document); // Access the document 
console.dir(document.body)  // print all body object

console.log(document.body) //print the all body elements of html
console.dir(document.head)  // print all head object
console.log(document.head) //print the all head elements of htm