/* Tutorial 4
Example 2 JavaScript code
*/

console.log("Jeffry's Output from Example 4");

var words = new Array();

let aWord = String (prompt("Enter a word (STOP to exit):"))


while (aWord.toUpperCase() !== "STOP"){
    aWord = String (prompt("Enter a word (stop to exit):"));
    words.push(aWord);

    if (aWord.toUpperCase() == "STOP"){
        console.log("You've prompted the system to stop!")
    }
}

console.log(words)