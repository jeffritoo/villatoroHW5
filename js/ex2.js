/* Tutorial 4
Example 2 JavaScript code
*/
console.log("Jeffry's Output from Example 2");

const r = Number(prompt("Enter the circle radius:"));

const circle = {
    radius: r
}


function circumference(radius){
    return 2 * Math.PI * this.radius;
}

function area(radius){
    return Math.PI * (this.radius**2);
}

circle.circumference()

console.log("It's circumference is:", circle.circumference());

console.log("It's area is:", circle.area());
