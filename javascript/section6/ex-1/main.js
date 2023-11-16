

const mathOperations = require('./mathOperations');

const num1 = 10;
const num2 = 5;

const sum = mathOperations.add(num1, num2);
const difference = mathOperations.subtract(num1, num2);
const product = mathOperations.multiply(num1, num2);
const quotient = mathOperations.divide(num1, num2);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
