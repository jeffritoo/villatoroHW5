/* Tutorial 4
Example 2 JavaScript code
*/

console.log("Jeffry's Output from Example 5");

let original = String (prompt("Is it a Palindrome? (Enter a Phrase):"))

const isPalindrome = (entry) =>{

    for(let i=0; i<entry.length; i++){

        if(entry[i] !== entry[entry.length -1 - i]) {
            return false;
        }
        return true;
    }
}

const isAvowel = (entry) =>{

    entry = entry.toUpperCase();

    var vowel = 'AEIOU';

    var counter = 0;

    for(var i=0; i<entry.length; i++){
        if(vowel.indexOf(entry[i]) !==-1){
            counter+=1;
        }
    }
    return counter;
}


if (isPalindrome(original) == true){
    console.log("Your entry", original, "is a palindrome");
}
    else{
        console.log("Your entry:", original.toUpperCase(), "is not a palindrome")
    }

console.log("The number of vowels in your entry:", isAvowel(original));