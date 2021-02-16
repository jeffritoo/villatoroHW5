/* Tutorial 4
Example 2 JavaScript code
*/

console.log("Jeffry's Output from Tutorial 4 Example 5");

let original = String (prompt("Is it a Palindrome? (Enter a Phrase):"))

backwards = new String();

for (let i = 0; i < original.length; i--){
    backwards += original.charAt(i);
}

console.log(backwards);