
var worker = new Worker("worker.js");

worker.onmessage = function(event) {
  // Receive result from the worker
  var result = event.data;
  console.log('Result received from worker:', result);
};

// Send data to the worker
var dataToSend = 5;
worker.postMessage(dataToSend);

const textBox=document.querySelector(".text");
const troughBtn1=document.querySelector(".btn1")
const troughBtn2=document.querySelector(".btn2")
const troughInput1=document.querySelector(".input1")
const troughInput2=document.querySelector(".input2")
const resultBox=document.querySelector(".result")
const cler=document.querySelector(".cbtn")
let User1=document.querySelector(".user1")
User1.innerText=name.toUpperCase();
let User2=document.querySelector(".user2")
let us2="ROBO";
User2.innerText=us2;


var name=prompt("Enter the Name of First Player");
troughBtn1.innerText=name.toUpperCase();
// let player2=prompt("Enter the Name of Second Player");
let textBtn="ROBO";
troughBtn2.innerText=textBtn;

textBox.style.color="white";
textBox.style.fontSize="20px";
var getData1="";
var getData2="";


var map={};
map['🦋']=1;
map['🐞']=2;
map['🐛']=3;
map['📃']=4;
map['✂']=5;
map['🔪']=6;
map['🐁']=7;
map['🐍']=8;
map['🐇']=9;
map['🐒']=10;
map['🐆']=11;
map['🦍']=12;
map['🦖']=13;
map['🐘']=14;
map['🧱']=15;

troughBtn1.addEventListener("click",()=>{
    let itemBuccket1=["🧱","🔪","✂","📃","🐁","🐘","🐇","🐛","🐆","🐒","🦍","🦋","🐞","🦖","🐍"];
     getData1 = itemBuccket1[Math.floor(Math.random()*itemBuccket1.length)];
    console.log(getData1)
     troughInput1.innerText= getData1;
     troughInput1.style.textDecoration="none";
     
     result();

    
});

troughBtn1.addEventListener("mouseup",()=>{
    let itemBuccket2=["🧱","🔪","✂","📃","🐁","🐘","🐇","🐛","🐆","🐒","🦍","🦋","🐞","🦖","🐍"];
     getData2 = itemBuccket2[Math.floor(Math.random()*itemBuccket2.length)];
    console.log(getData2)
    setTimeout(()=>{
        troughInput2.innerText= getData2;
    },1000)
    result();
});
troughBtn2.addEventListener("click",()=>{
    let itemBuccket2=["🧱","🔪","✂","📃","🐁","🐘","🐇","🐛","🐆","🐒","🦍","🦋","🐞","🦖","🐍"];
     getData2 = itemBuccket2[Math.floor(Math.random()*itemBuccket2.length)];
    console.log(getData2)
    troughInput2.innerText= getData2;
    result();
    
});

let result=()=>{
    if(getData1!="" && getData2!=""){
       
        if(map[getData1]==map[getData2]){
           setTimeout( ()=>{
            resultBox.innerText="MATCH HAS BEEN DRAWEN" ;
           },3000)
         
            // alert("MATCH HAS BEEN DRAWEN");
            alert.style.width="100px";
        }
        else if(map[getData1]>map[getData2]){
            let user1=0;
            // alert("FIRST TEAM WON");
            setTimeout( ()=>{
                resultBox.innerText=`${name.toUpperCase()} YOU WON THE MATCH` 
                
               },3000)
               Count1= user1;
               console.log(` User1 win`);
             
        }
        
        else{
            let user2=0;
            // alert("SECOND TEAM WON");
            setTimeout( ()=>{
                resultBox.innerText=`${textBtn} WON THE MATCH`;  
               },3000)
               total= user2++;
               console.log(` User2 win`);
           
        }
      
       
    }

}

cler.addEventListener("click",()=>{
    console.log("hello")
     getData1="";
        getData2="";
        troughInput1.innerText="";
        troughInput2.innerText="";
})


