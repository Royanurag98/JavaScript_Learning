// const URL="https://cat-fact.herokuapp.com/facts";
// //fatch return a value and these value is going to be promises.
//  const cataData = document.querySelector(".Catfact");
//  const btn = document.querySelector(".btn");
 
// const getFact= async()=>{
//     console.log("getting  data......");
//     let response= await fetch(URL);
//     console.log(response);// JSON Formate
//    var OriginalData= await response.json();
//    console.log(OriginalData);// Readible data
//    console.log(OriginalData[0]);
//    console.log(OriginalData[0].text);
//      cataData.innerText = OriginalData[2].text;   
// }
const collection = document.getElementById(".box ").children;



      
btn.addEventListener("click", ()=>{
    
collection[1].innerText=data.text
//     for(i=0;i<5;i++){
//       collection[i].innerText=data.text
//     }
  
            
     
})
const btn = document.querySelector(".btn");
fetch("https://cat-fact.herokuapp.com/facts")
.then((responce)=>{
      console.log(responce)
      return  responce.json()      
})
.then((catFact)=>{
     for(data of catFact){
    
      console.log(data.text) 
     }})
.catch((error)=>{
     console.log(error)
     })

// btn.addEventListener("click", ()=>{
//       console.log("outer")
//       for(let i=0;i<5;i++){
//             console.log("inner..")
//             cataData.innerText=data.text[i]
//       }
     
// })

    




// fetch('https://jsonplaceholder.typicode.com/comments?postId=3 ')
// .then((responce)=>{
//     return responce.json()
// }).then((getData)=>{
//     const names = getData.map((comment) => {
//         comment.name
//     });
//    console.log(names[0])
//  
// })
// // .then((name)=>{
// //     console.log(name)
// // })
// .catch((error)=>{
//     console.log(error)
// })