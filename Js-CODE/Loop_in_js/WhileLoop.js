//>while loop.
  //    => First check the condition then execute a block of code.

// Sum of first n natural number?
let sum=0;
let num=+prompt("Enter the number");
console.log(`Sun of first ${num} natural number is`);
while(num>0){
    sum=sum+num;
    num--;
}
console.log(sum)

// We can use Formula for sum of n natural number Sn=(n*(n+1))/2
let num2=+prompt("Enter the number");
 let Sn  = (num2*(num2+1))/2;
 console.log(`Sun of first ${num2} natural number is ${Sn}`)


// Create a game where you start any random game number . ask the user to
// keep guessing the game number until the user enter the correct value?

        let gussNumber= 25;
        let num3= +prompt("Enter you number");
        while (userInput != gussNumber){
             userInput=prompt("Sorry your Guess Number is not matched with robo Guss again");
        }
        document.write("Conguralations you entered write number")

