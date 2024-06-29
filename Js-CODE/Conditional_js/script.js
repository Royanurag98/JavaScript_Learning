// Decision control instruction/ conditional statement  in javascript

/*javaScript has three type of conditional statement
1. if 
2. else
3. else if   */
                  //if else
// Person is eligible for voting or not ?
        let age=+prompt("Enter the age");
        if(age<18)
        console.log(`Person is not eligible for voting because person age is ${age} `);
        else
        console.log(`Person is eligible for voting because person age is ${age} `);

 // use logical operator to find whether the age of a person lies between 10 and 20?
        let personAge=+prompt("Enter the Person Age");
        if(personAge>10 && personAge<20)
        console.log(" Yes Person Age lies between 10 and 20 ");
        else
        console.log(" No Person Age lies between 10 and 20 ");

// Find number is odd or even
        //parseint() is used to convert the string value into a integer value.
        // We can also use + operatot to convert string value into integer.

         let Num1 = +prompt("Enter the number");
         // let x=parseInt(Num1);
         // let x=+Num1 
         let Num2 = +prompt("Enter the number");
         //let y=parseInt(Num2);
         // let y=+Num2;
         if(Num1%2==0)
         console.log("Number is Even");
         else{
            console.log("Number is odd");
         }
         // let c=x+y;
         let d=Num1+Num2;
         console.log("Sum of Num1 + Num2 :", d);


// Ternary operator
         let age1 =+prompt("Enter the age Operson");
         age>20?console.log("Adult"):console.log("Not adult");
         let result= age>20?"Adult":"Not Adult";
         console.log(result);

// Get user to input a number using Prompt() and check given number is multiple of 5 or not?
        let Num=+prompt("Enter a Number :");
        // x=parseInt(Num)
        if(Num%5==0)
        console.log("Yes given number is multiple of 5");
        else
        console.log("N0 given number is not multiple of 5");

                    // else if
// Write a program to which can give a greads to students according to their score?
      // 80 - 100 -->A
      // 70 - 79 --> B
      // 60 - 69 --> C
      // 50 - 59 --> D
      // 0 - 49  --> Fail
      let Marks=+prompt("Enter the Student Marks :");
        if(Marks>=80 && Marks<=100)
        console.log("Gread A");
       else if(Marks>=70 && Marks<80)
        console.log("Gread B");
        else if(Marks>=60 && Marks<70)
        console.log("Gread C");
        else if(Marks>=50 && Marks<60)
        console.log("Gread D");
        else
        console.log("Fail")