/*                     WHAT IS EVENT HANDELER
=>  When javascript code is included in HTML, jS react over these events and allow
    the execution. This process of reacting over the events is called Event Handling.
    Thus, js handles the HTML events via Event Handlers. 
=>  Way of Event handling
     > Inline Event handling ( Write event handlers inside the html tag )
                       Disadvantages => This way is effected our code redability
     > External Event handling( Write event handlers inside js file with Arrow functio)
                       Disadvantages =>in this way we can not write multiple function for 
                       same event. if you write multiple function for same event in that
                       case override the function. and execute second event. 
     > Event Listeners : Event listner is function that is always listen the event . 
       means it always ready to perform the action when any event occur.  it is
       better way to handle the event . we can create multiple event listner for one event           



                        WHAT IS EVENT OBJECT
=> It is a special object that has details about the event.
   like
       => Type of Event(Means is that event is mouse event or Pointer event or Keybord Event)
       => Target of Event(Means is that event occur on div or input or button)
=> All events handlers have access to the event objects properties and method */

let btn1=document.querySelector("#btn1");
// In arrow function in side the parenthasis () evt is object and inside curly braces that is event handlers
 btn1.onclick = (evt) => {
    document.write("Nice to meet you");
    console.log(evt); // Print the object  of event on console
    console.log(evt.type);// Print the type of event on console
    console.log(evt.target);// Print the event target on console

 }

 let box=document.querySelector(".box");
 box.onmouseover =(evtOb) =>{
    alert("Hello sir you want to see some magic i guess you name click ok");
    document.write("I am jocking i cant pridict your name :")
    document.write("Your name is 😁😁🤣🤣😁 ")
    console.log(evtOb); // Print the object  of event on console
    console.log(evtOb.type);// Print the type of event on console
    console.log(evtOb.target);// Print the event target on console (type,target these are properties)

 }
//  let box=document.querySelector(".box");
// box.onmouseover = () => {
// alert("Your luccky number is");
// let y=Math.random()*100;
// document.write(y);
// }