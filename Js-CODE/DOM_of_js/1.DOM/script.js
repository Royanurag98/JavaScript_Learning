                         // DOM Manipulations (Accessing are element)
/* Suppose you open a web page in any browser and you want to change somthing like Styling and content related. 
   on that page in that case we can not do any changes in html and css file but we can dynamically change or
   manipulation on that page using  Dom.*/
// In other word we use DOM for dynamic manipulation or changes in our web page.

                                            // how to do DOM Manipulations
//step :1 Access the html element

//way of accessing  elements from the html page 

    //1. Selecting with id (Id has always unique name for all elements)
    //    let Heading =  document.getElementById("Heading");
    //    // when id elements(id name) is not exist in that case rturn  null  
    //    console.log(Heading)
    //    console.dir(Heading)

//     //2. Selecting with class (Class Name may or may not be same for multiple elements)
         //getElementsByClassName() returns a html collection (Html collection is similar to an array)
        // When class elements(class name) is not exist in that case return empty html collection 
    //    let para= document.getElementsByClassName("info");
    //    console.log(para); 
    //    console.dir(para);

//     //3. Selecting with tag name 
        // let container = document.getElementsByTagName("div");
        // console.log(container);
        // console.dir(container);

    //4.Query Selector (Return the Node(tag list) list) 
       // it is the best way and frequentally usable method for accessing elements from the html page
       // If we use Query Selector then we can select element with tag name ,id name and class name.

       //Query selector has two method to access html element with tag name ,id name and class name. 
           //1. querySelector(): It is use to select the first element from the html page which comes first.
           // regarding which is pass inside the querySelector().
            let FirstMethdo=document.querySelector("p");// with tag name
            console.log(FirstMethdo);
            console.dir(FirstMethdo);

           //2. querySelectorAll() :It is use to select all element from the html page.regarding which is pass
        //    inside the querySelectorAll().
        //    inside the querySelectorAll("#box h1").we can also select particular element 
        //     let SecondMethod = document.querySelectorAll(".info");// with class name.
        //     console.log(SecondMethod);
        //     console.dir(SecondMethod);
        
        // We can also target html element with these  method.
        let content=document;// it return html page document
        console.log(content)
        let content1=document.all; // It return all html tag in form array list.
        console.log(content1)
        let content3=document.all[5]; // we can access particular element throug index number
        console.log(content3)
        let content4=document.body; // we can access particular element throug index number
        console.log(content4)
        let content5=document.head; // we can access particular element throug index number
        console.log(content5)
        let content6=document.title; // we can access particular element throug index number
        console.log(content4)
        let content7=document.links; // we can access particular element throug index number
        console.log(content7)





            
//Step-2
//After Accessing the html element we use some properties for checking(get) the value and changing(set) the value.
// //1.tagName : Returns tag name for an element nodes.
    let head=document.querySelector("#Heading");
    console.log(head);
    console.dir(head);
    console.log(head.tagName);
// //2.innerText:The innerText property returns the text content only of an element and all its chield .
     let info=document.querySelector(".info");
     console.log(info);
     //get the text
     console.log(info.innerText);
     //set the text
     info.innerText="This is my paragraph";
// //3.innerHtml:The innerHTML property returns The text content and all spacing and inner HTML tags of 
// //an element and all its chield.
     let info2=document.querySelector("#SecondBox");
     console.log(info2);
      //get the text with tag.
     console.log(info2.innerHTML);
      //set the text with tag.
     info2.innerHTML="<div> hello</div>";
// //4.textContent: the textContent return text of  hidden element.
    let hide=document.querySelector("#Heading");
    console.log(hide);
    console.log(hide.innerText);
    console.log(hide.textContent);

// //Read about first child, last child and Children’s(these are used for navigate the element)
// //and also read about Text node, Comment node and element node
