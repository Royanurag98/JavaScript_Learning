const Calculator=( x,y)=>{
    let C=x**2 + y**2
    if(C==4){
        return `This point is  liying on the circle`
    }
    else  return `This point is not liying on the circle`
  
}

let x=  +prompt("Enter the first num")
let y=    +prompt("Enter the second num")
let res=Calculator(x,y)

console.log(res);
