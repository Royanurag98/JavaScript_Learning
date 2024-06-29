let button=document.querySelectorAll(".btn");
let resetBtn=document.querySelector(".resetBtn");
let startBtn=document.querySelector(".startBtn");
let msg=document.querySelector(".msg");
let msgtext=document.querySelector(".msgtext");
let Turn0="true";
const winningPattern=[
     [0, 1, 2],
     [0, 3, 6],
     [0, 4, 8],
     [1, 4, 7],
     [2, 5, 8],
     [2, 4, 6],
     [3, 4, 5],
     [6, 7, 8],
];
const resetGame= ()=>{
    Turn0="true";
    enableBoxes();
    msg.classList.add("hide");
}

button.forEach((btn) => {
    btn.addEventListener("click",()=>{
    if(Turn0===true){
        btn.innerText = "0";
        Turn0=false;
    }
    else {
        btn.innerText = "x";
        Turn0=true; 
    }
    btn.disabled = true;
     checkWinner();

    });
});
const disableBoxes= () =>{
    for(let resetBtn of button){
        resetBtn.disabled= "true";
    }
}
const enableBoxes= () =>{
    for(let startBtn of button){
        startBtn.disabled= "false";
        startBtn.innerText="";
    }
}
const showWinner = (winner) =>{
    msgtext.innerText= ` Congratulation , Winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();

}
const checkWinner = () =>{
  for (let pattern of winningPattern )  {
    let pos1val = button[pattern[0]].innerText;
    let pos2val = button[pattern[1]].innerText;
    let pos3val = button[pattern[2]].innerText;

    if (pos1val !="" && pos2val != "" && pos3val !=""){
        if (pos1val===pos2val && pos2val===pos3val){
            console.log("Winner",pos1val)
            showWinner(pos1val);
        }
    }
  }
}
startBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);