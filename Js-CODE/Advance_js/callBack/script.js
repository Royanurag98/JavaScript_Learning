                                          //Callback
//A function which is passed inside the another function as an argument. that is called callback. 

function sumNum(X,Y){ // Function 1...........
  console.log(`Sum of X + Y is ${X+Y}`)
}
function incSumVal(a,b,callbacksumNum){ // Function 2...........
    callbacksumNum(a,b)
}
// Call function 2 and pass the two value and one function as a arguments and call function 1 inside fun 2
incSumVal(10,20,sumNum);

/*                              //Callback hell (it is problem in js .)
Nested callbacks stacked below one another forming a pyramid structure Nesting of callback .
means it create a pyramid structure. That is very difficult to understand 

// Suppose we create a function A1 and we pass another function A2 inside A1 as an argument and also pass
another function A3 inside A2 as an argument again we pass another function A4 inside A3 as an argument.
So basically we are doing Callback nesting . we know that this type of problem is very difficult to understand 
so this type of problem is called Callback hell.*/

function getData(data, getnextData){
 
  setTimeout(()=>{
    console.log(`get data = ${data} `)
    if(getnextData)
    getnextData();
    },3000)
}
// If We call like nesting  that is called call back Hall.
getData(1,()=>{
  console.log(` Fatching data ${data}............ `)
  getData(2, ()=>{
    console.log(` Fatching data ${data}............ `)
    getData(3,()=>{
      console.log(` Fatching data ${data}............ `)
      getData(4)
    })
  })
});

// function Tow is calling inside the function One using callback
// const funOne=(callback)=>{
//     console.log("Functio One doing some task");
//     callback()
// }
// const funTwo=()=>{
//     console.log("Functio Two doing some task");
// }
// funOne(funTwo);


// const funOne=(callback)=>{
//     console.log("Functio One doing some task");
//     callback()
// }

// funOne(()=>{
//     console.log("Functio Two doing some task");
// });
// var num1,num2;
// const getTwoNumber=(num1, num2, callback)=>{
//     console.log(num1,num2);
//     if(typeof num1==="number" && typeof num2==="number"){
//         callback(num1,num2)
//     }
//     else
//    console.log("Given input is not a number")

    
// }

// getTwoNumber("5","6", (num1,num2,callback)=>{
//   let result=num1+num2;
//   console.log("Sum Num1 + Num2 is", result)
//   callback();
// },()=>{
//   console.log("Good morning");
// })

