// const promises= new Promise((resolve, reject)=>{
// // HERE we do db call , network calls
// console.log("Promises is pending.............");
//  setTimeout(()=>{
//    resolve("Success")
//  }, 3000)
// })

// promises.then(res=>{
//     console.log("Your promises is full field now", res);

// })

// new Promise((resolve, reject)=>{
//     console.log("Your promise is in pending state ...........")

//     setTimeout(()=>{
//         resolve("yor promises is fill fuild...")
//     },3000)
// }).then((res)=>{
//     console.log("Now..", res);

// })

// new Promise((resolve, reject)=>{
//    console.log("Promises is pending ......");
//    setTimeout(()=>{
//       let user= true
//       if(!user){
//          resolve({Name:"Anurag Kumar", Specilazition:"Software Development", Age:24})
//       }
//       else {
//          reject("Somthing Went to worng!")
//       }
//    },3000)

// }).then((res)=>{
//    console.log(res);
//    return res.Name
// }).then((userName)=>{
//    console.log(userName);

// })
// .catch((rej)=>{
//    console.log(rej);

// })

// const promises=new Promise((resolve, reject)=>{
//    console.log("Promises is pending ......");
//    setTimeout(()=>{
//       let user= false
//       if(!user){
//          resolve({Name:"Anurag Kumar", Specilazition:"Software Development", Age:24})
//       }
//       else {
//          reject("Somthing Went to worng!")
//       }
//    },3000)

// })

// async function cunsumePromise(){
//    try {
//       const response= await  promises
//       console.log(response);

//    } catch (error) {
//       console.log(error);

//    }
// }
// cunsumePromise()

// const myPromises=new Promise((resolve, reject)=>{
//    console.log("Your promises is in Pending State........");
//    setTimeout(()=>{
//       let user=false
//       if(!user) resolve({Name:"Anurag Kumar", Specilazition:"Software Development", Age:24})
//       else reject("Somthing went to worng !")
//    },3000)
// })

// async function consumePromises(){
//    try {
//          const response= await myPromises
//          console.log(response);
//          setTimeout(()=>{
//             console.log("Now your promises is Success");
//          },2000)

//    } catch (error) {
//      console.log(error);
//      setTimeout(()=>{
//       console.log("Sorry your promises is Rejected.");
//    },2000)

//    }
// }
// consumePromises()

// fetch('https://dummyjson.com/products')
// .then(responce=>responce.json())
// .then(data=>{
//    console.log(data)
//    return data.products
// })
// .then(productList=>{
//    console.log(productList);
//    return productList[0]
// })
// .then(singleItem=>{
//    console.log(singleItem);

// })
// .catch(error=>console.log(error)
// )

// const add=((a)=>(b)=>(c)=>(d)=>(e)=>(f)=>a+b+c+d+e+f)(2)(3)(4)(5)(6)(7);
//  console.log(add);

//  let add=((a)=>(b)=>(c)=>(d)=>(e)=>a+b+c+d+e)(2)(3)(4)(5)(6); console.log(add)
// let count=0
// let str ='SPSSOPSDSDDOSOD'
// let str2='' 


// for(let i=0; i<str.length; i+3){

//     if(str[i] !="S") str="S"
//     if(str[i+1] !="O") str="O"
//     if(str[i+2] !="S") str="S"
    

// }
// console.log(str);


let str = 'SPSSOPSDSDDOSOD';
let str2 = '';

for (let i = 0; i < str.length; i += 3) {
    if (i < str.length)  str2 += 'S';  
    if (i + 1 < str.length) str2 += 'O';  
    if (i + 2 < str.length) str2 += 'S'; 
}

console.log(str2);


       //SOS SOS SOS SOS
// let arr=str.split("")
// console.log(arr);

// for(let char of arr){
    // console.log(char);
    // if(char[0] !="S"){
    //     count++
    //   }
    //   if(char[1] !="O"){
    //     count++
    //   }
    //   if(char[2] !="S"){
    //     count++
    //   }
    // for(let i=0; i<char.length; i++)
    // if(char[i] !="S"){
    //    count++
    //  }
   
    
    // }

    //  console.log(count);

// let str2='SOS'
// let count =0
// for(let char of arr){
//     for(let i=0; i<char.length; i++){
//         if(char[i] !=str[i]) {
//             count++
//         }
       
//     }
// }
//     console.log(count);
   
    //  