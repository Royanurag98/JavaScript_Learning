// const promiseOne=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      console.log("fatching data from Api...")
//      resolve()
//     },2000)
// })

// promiseOne.then(()=>{
//     console.log("Data is fatched Promish is resolve ")

// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Now data is fatching....")
//         resolve()
//     },3000)
  
// }).then(()=>{
//     console.log("Data is fatched Promish is resolve ")
// })

// const promisFour= new Promise((resolve,reject)=>{
//      setTimeout(
//         resolve({
//             Name : "Anurag Kuamr",
//             Eduction:"MCA",
//             ROll:57,
//             Reg:12213393
//         })
//      )
// })
// promisFour.then((userData)=>{
//     console.log(userData)
// })

// const promisChain= new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         let Error=true;
//         if(!Error){
//             resolve({
//              Name : "Anurag Kuamr",
//              Eduction:"MCA",
//              ROll:57,
//              Reg:12213393
//          })
//         }
//         else
//         reject(
//          console.log('ERROR: Somthing want to worng')
//          )
// },2000)})


// promisChain
// .then((user)=>{
//     return user.Name
// })
// .then((Name)=>{
//     console.log(Name);
// })
// .catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log(`Promis is Resolve or reject`)
// })

// const promisApi= new Promise((resolve,reject)=>{

//   setTimeout(()=>{
//     let Error=true;
//     if(Error){
//         resolve(
//         {responce :fetch('https://jsonplaceholder.typicode.com/comments?postId=3 ')}
//         )
//     }
//     else
//     reject("Error:Somthing wnat to worng")
//   },3000)
// })
// promisApi
// .then((data)=>{
//     let x=data.json()
//    console.log(x)
// }).catch((error)=>{
//     console.log("Error")
// })
// async function getData(){
//     try{
//     const responce = await fetch('https://jsonplaceholder.typicode.com/comments?postId=3 ')
//     const allData=await responce.json()

//     console.log(allData)
// } catch(error){
//    console.log("Error:")}
// }
// getData();

// fetch('https://jsonplaceholder.typicode.com/comments?postId=3 ')
// .then((responce)=>{
//     return responce.json()
// }).then((getData)=>{
//     const names = getData.map((comment) => {
//         comment.name
//     });
//    console.log(names[0])
//   return getData.id 
// })
// // .then((name)=>{
// //     console.log(name)
// // })
// .catch((error)=>{
//     console.log(error)
// })

doSomething();

function doSomething(){
	console.log("How you doing?");
}