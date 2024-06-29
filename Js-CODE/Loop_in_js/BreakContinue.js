//Break Keyword :-
/*The keyword break can be used in loop body or in switch body.
  The purpose of break keyword is to terminate the execution of control from the loop body or Switch body when case is 
  matched or condition is true.*/
  let x=5;
  for(let i=0; i<x; i++){
  if(i==3){
  break;
  }   
  console.log(i);
  }
//Continue Keyword :-
/* The purpose of continue keyword is to leave the particular statement when condition is true and again execution 
 of control  jump to the next statement .*/
 let Sum_Of_Natural_Number=0;

  for(let i=0;i<5;i++){
  if(i==2){
  continue; //leave 2 .
  }
  Sum_Of_Natural_Number=Sum_Of_Natural_Number+i;
  }
  console.log(` Sum of Natural number is ${Sum_Of_Natural_Number}`);
