let p1=document.querySelector("p");
let x=p1.getAttribute("class");
console.log(x);
// Here we set the new class in paragraph tag we can see that override the previous class of paragraph.
// if you want to applay both the classes on paragraph tag in that case we can use classList
// let y=p1.setAttribute("class","para2") // setAttributes override the existing class.
let z=p1.classList.add("para2");
//// use the classList API to remove and add classes
//div.classList.remove("foo");
//div.classList.add("anotherclass");