 //    let RandomNum= Math.floor(Math.random()*100);
    //    let UserGuess;
    //    while (UserGuess != RandomNum  ){
    //      UserGuess = parseInt(prompt("Enter your number"));
         
    //    }
    //    if(RandomNum > UserGuess)
    //      alert("Random Number is greter then your Guess")
    //      else
    //     alert("Random Number is less then your Guess")
    //     aletr("Try again");

    //    document.write("You win");
    let RandomNum= Math.floor(Math.random()*10);
    let UserGuess;
    var Count=0;
    while(RandomNum != UserGuess){
        UserGuess = parseInt(prompt("Enter your number"));
         Count++;

        if(RandomNum > UserGuess)
            alert("Random Number is greter then your Guess");
        else if (UserGuess==RandomNum){
            alert("Random Number is matched  your Guess");
            break;
        }
         else
            alert("Random Number is less then your Guess");
    }
    document.write("Conguralations , You win the match <br>");
    document.write("Your Predection Count is :",Count);
        
    