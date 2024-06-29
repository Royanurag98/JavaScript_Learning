/*What is window object ? 
The window object represents an open window in a browser .  it is browser’s  object( not JavaScript object) and it is automatically created by browser. It is a global object with lots of properties and method. like alert(),prompt(), console.log()..
We can directly use window object no need to define window.
like */

     window.console.log("hello");// define window
            console.log("hello");// no need because window is globle object
// print woindow object in console
   console.log(window);
//How we will access html in JavaScript
console.dir(Window); //Access the window object.
console.dir(window.document); // Access the document object 
console.dir(document.body)  // print all body object

console.log(document.body) //print the all body elements of html
console.dir(document.head)  // print all head object
console.log(document.head) //print the all head elements of html