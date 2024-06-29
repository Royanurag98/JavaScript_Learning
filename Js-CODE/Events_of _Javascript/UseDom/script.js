

// const navI=document.querySelector(".navItaem")
// console.log(navI)
// // console.dir(navI)
// const nav2=document.querySelectorAll(".navItaem" )
// console.log(nav2)
// // console.dir(nav2)

// const nav2=document.querySelector(".navItaem3" )
// console.log(nav2);
// console.log(nav2.innerText);
// // console.log(nav2.textContent);

// style

// const heder=document.querySelector("#header");
// console.log(heder)
// heder.style.backgroundColor="aqua"

//get attribute and set attribute

// const head=document.querySelector("#header");
// console.log(head)
// // x=head.getAttribute("id");
// // console.log(x)
// y=head.setAttribute("id","SetAtr");
// console.log(y)



// get and set attribute
// const  img=document.querySelector("img")
// console.log(img);
// console.dir(img)
// const get=img.getAttribute("alt");
// console.log(get)
// const set=img.setAttribute("alt", "A beautifull Girl standing with Umbrala")
// console.log(set)

// getElementsByClassName() returns a HTML collection (HTML collection is similar to an array object but not array)
// If class elements(class name) is not exist in that case return empty HTM 
// collection 
// const c=document.getElementsByClassName("navItaems")
// console.log(c)
// console.log(c[2]) // get the child element
// console.log(typeof c)// check type of 
// console.log(Array.isArray(c))// check is it array or not
// //document.querySelectorAll return  the Node(tag) list 
// const  navItem=document.querySelectorAll(".navItaems") 
// console.log(navItem)
// console.log(navItem[2]) // get the element from array like object
// console.log(typeof navItem)// check type of 
// console.log(Array.isArray(navItem))// check is it array or not

// const navItem=document.querySelectorAll("ul li");
// console.log(navItem);
// for(x of navItem){
//     console.log(x)
//     x.style.color="white"
// }

// Add , Remove , toggle class from ClassList 
// const SelectClass=document.querySelector(".nav")
// console.log(SelectClass)
// SelectClass.classList.add("bg-color");
// SelectClass.classList.remove("bg-color");
// SelectClass.classList.toggle("bg-color");
// SelectClass.classList.toggle("bg-color");

// const SelectBody=document.querySelector(".box")
// const bg=SelectBody.classList.add("bg_Color");
// console.log(SelectBody)


/// todo

// const todoContainer=document.querySelector(".todoContainer");
// console.log(todoContainer)
// console.log(todoContainer.innerText)
// todoContainer.style.backgroundColor="yellow"

// todoContainer.style.display="flex"
// todoContainer.style.justifyContent="center"
// todoContainer.style.alingItem="center"



// const todo=document.querySelector(".todoBox")
// console.log(todo);
// console.log(todo.innerHTML)
// console.log(todo.innerText)


// todo.style.color="aqua"

// const box=document.querySelector(".box");
// todo.style.display="flex"
// todo.style.justifyContent="center"
// todo.style.backgroundColor="black"
// todoContainer.style.alingItem="center"

// const button=document.querySelector(".btn")
// console.log(button);
// button.onclick=function (){
//    console.log("Button was clicked");

//    return 
// }

const btn=document.querySelector(".btn");
btn.addEventListener("click", ()=>{
   console.log("Button was clicked")
})


// event listner

const buttonBox=document.querySelector(".box3")
buttonBox.style.display="flex"
buttonBox.style.justifyContent="center"
buttonBox.style.margin="30px"


const button=document.querySelector(".container")
console.log(button);
button.style.width="400px"
button.style.height="300px"
button.style.border="2px solid green"
button.style.borderRadius="8px"
button.style.backgroundColor="pink"

const buttonAll=document.querySelectorAll(".container .btn1")


for(x of buttonAll){
  
x.style.width="90px"
x.style.height="30px"
x.style.border="2px solid black"
x.style.borderRadius="8px"
x.style.backgroundColor="black"
x.style.cursor="pointer"
x.style.color="white"
x.style.margin="15px"

x.addEventListener("click",(e)=>{
   console.log(e.currentTarget.textContent);
  e.target.style.color="red"
  e.target.style.backgroundColor="yellow"
})

}



















