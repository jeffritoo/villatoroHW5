/* Tutorial 4
Example 2 JavaScript code
*/

console.log("Jeffry's Output from Example 3");

const values = [3,11,7,2,9,10];

const arrSum = arr => arr.reduce((a,b) => a + b, 0)

result = arrSum(values);

const arrMin = arr => Math.min(...arr);

resultMin = arrMin(values);

const arrMax = arr => Math.max(...arr);

resultMax = arrMax(values);

console.log("The sum off all elements is:", result)
console.log("The Maximum of the array is:", resultMax)
console.log("The Minimum of the array is:", resultMin)

