/* Tutorial 4
Example 1 JavaScript code
*/
console.log("Jeffry's Output from Example 1");

let Num1 = Number (prompt("Enter a number:"))
let Num2 = Number (prompt("Enter a second number:"))
let Operand = prompt("Enter the operator(+,-,*, or /):")

function calculator(Num1,Num2,Operand){
    if (Operand == '+'){
        result = Num1+Num2;
    }
    else if (Operand == '-'){
        result = Num1 - Num2;
    }
    else if (Operand == '*'){
        result = Num1 * Num2;
    }
    else if (Operand == '/'){
        result = Num1 / Num2;
    }
    return result;
}

console.log(Num1, Operand, Num2,"=",calculator(Num1,Num2,Operand));