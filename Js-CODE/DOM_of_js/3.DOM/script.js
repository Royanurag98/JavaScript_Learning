// INSERT ELEMENTS THROUGH JAVA SCRIPT ON HTML PAGE
// IF WE WANT TO INSERt(ADD) ELEMENT ON HTML PAGE FIRST WE HAVE TO CREATE THAT ELEMENT.
   
  // Create node

    
    let btn=document.createElement("button");// Create node
    btn.innerText= "Click Me";
    let div=document.querySelector("div"); // Call the node where to add created node.
    div.append(btn);//node.append(element): Add at the end of the node (inside)
   
       
    let btn2=document.createElement("button");
    btn2.innerText="Submit"; 
    let container=document.querySelector("div");
    container.prepend(btn2); // node.prepend(element) :Add at the begin of the node (inside)

   
     let box=document.createElement("div");
     box.innerText="Circul";
     box.style.width="50px" ;
     box.style.height="50px" ;
     box.style.backgroundColor="green";
     box.style.border="2px solid red";
     box.style.borderRadius="100%";
     let cant=document.querySelector("div");
     cant.before(box); // node.before(element) :Add at the befour of the node (outside)

   
    let patila=document.createElement("table");
    patila.innerText="Studen Info Table";
    patila.style.height="200px";
    patila.style.width="200px" ;
    patila.style.backgroundColor="green";
    let info=document.querySelector("div");
    info.after(patila); // node.after(element) :Add at the after of the node (outside)

    //node.remove()// remove the node
    let x=document.querySelector("p");
    x.remove();
  //read about that
    //apendChild()
    //removeChild()
