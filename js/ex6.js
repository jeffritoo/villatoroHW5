/* Tutorial 4
Example 2 JavaScript code
*/

console.log("Jeffry's Output from Example 6");

var randNum = Math.floor((Math.random()*100)+1);

console.log(randNum);

let usrGuess = Number(prompt("Guess a number between 1 and 100:"))


const guessGame = (entry) =>{

    var attempts = 0;

    if(entry == randNum){
        return true;
    }
    else if(entry>randNum){
        attempts+=1;
        message2 = console.log("Your guess:",entry,"is too high!" );
        return message2;
    }
    
    else if(entry<randNum) {
        attempts+=1;
        message = console.log("Your guess:",entry,"is too low!" );
        return message;
    }

    return attempts;
}

if (guessGame(usrGuess) == true){
    console.log("You've guess correctly!");
    console.log("It took you",attempts,"attempts")
}






