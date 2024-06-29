//Loops can execute a block of code again and gain.

// Sum of first n natural number?
        let sum=0;
        for(let i=1;i<=5;i++){
            sum= sum+i;    
        }
        document.write("Sum of 1 to 5 is :" ,sum ,"<br>");

// And you can also leve expression 1 (like when your values are set before the loop starts):
        let sum1=0;
        let i=1;
        for( ;i<=5;i++){
            sum1= sum1+i;    
        }
        document.write("Sum of 1 to 5 is :" ,sum1 ,"<br>"); 

// you can also omit expression 2, you must provide a break inside the loop.Otherwise the loop will never end.This will crash your browser.*/
        let sum2=0;
        for( let i=1; ;i++){
            sum2= sum2+i; 
            if(i==5) 
            break  
        }
        document.write("Sum of 1 to 5 is :" ,sum2 ,"<br>");

// you can also be omitted expression 3. but you have to include increment of value inside the loop:
        let sum3=0;
        for( let i=1; i<=5; ){
            sum3= sum3+i;  
            i++;
        }
        document.write("Sum of 1 to 5 is :" ,sum3);

        
// Print all even number 0 to 100
        let x = prompt("Enter the Number where you start for printing even number");
        num1=parseInt(x);
        let y = prompt("Enter the Number where you start for printing even number");
        num2=parseInt(y);
        for(let i=num1; i<num2; i++)
        {
        if(i%2==0);
        document.write(i," ");
     }
