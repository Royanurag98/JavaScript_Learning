let btn1=document.querySelector("#btn1");
btn1.onclick= () => {
 let d= alert("Welcome in tes series");
  document.write("Sum of two value");
  let Val1=prompt("Enter the first value :");
  let x=parseInt(Val1);
  let  Val2= prompt("Enter the Second value :");
  let y=parseInt(Val2);
   let sum=x+y;
   document.write("Sum of Val1 + Val2 is : ",sum);

};
let box=document.querySelector(".box");
box.onmouseover = () => {
alert("Your luccky number is");
let y=Math.random()*100;
document.write(y);
}