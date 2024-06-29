let obj={
    Name:"Anurag",
    Roll:56,
    Reg:2332233,
}

let fun=({Name,Roll,Reg})=>{ // Destructuring of objeect
   console.log(Name);
   console.log(Roll);
   console.log(Reg);
}
fun(obj);