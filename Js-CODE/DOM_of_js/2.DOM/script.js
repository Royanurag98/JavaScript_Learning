let x=document.querySelector("div");
console.log(x);
let head=document.querySelector("h2");
console.log(head);
// DOM Manipulations
//Properties
    // getAttribute(): it is use to get the attribute value of any Node.
       let c=x.getAttribute("id");
       console.log(c);

       let h=head.getAttribute("class");
       console.log(h);

    // setAttribute(atr,val): it is use to set the attribute value of any Node.
       let p=head.setAttribute("class","NewHeading");
       console.log(p);


//Node.style
  let patila=document.querySelector("div");
  patila.style.backgroundColor="red";
  patila.style.color="white";