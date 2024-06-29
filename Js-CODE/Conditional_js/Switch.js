// Switch Case Statement.
/*
The switch statement is used to perform different actions based on different conditions
This is how it works:
         >The switch expression is evaluated once.
         >The value of the expression is compared with the values of each case.
         >If there is a match, the associated block of code is executed.
         >If there is no match, the default code block is executed.*/

//Break Keyword :-
/*The keyword break can be used in loop body or in switch body.
  The purpose of break is to terminate the execution of control when case is matched.
  Note:
 If you not use the break statement, the next case will be executed even if the evaluation does not match the case.*/ 

//Default Keyword
//The default keyword specifies the code to run if there is no case match:

  let day=+prompt("Enter the value");
  
       switch(day)
       {
     
            case 0:
            console.log("Today is sunday");
            break;
            case 1:
            console.log("Today is  Monday");
            break;
            case 2:
            console.log("Today is Tuesday");
            break;
            case 3:
            console.log("Today is Sunday");
            break;
            case 4:
            console.log("Today is Wednessday");
            break;
            case 4:
            console.log("Today is Thirsday ");
            break;
            case 5:
            console.log("Today is Friday");
            break; 
            case 6:
            console.log("Today is Saturday");
            break;
          
            default:
                alert(" You Enter envalid day");    
       }
      
   