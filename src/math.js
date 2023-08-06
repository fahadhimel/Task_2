// Exercise 1: Arithmetic Operations
// Declare two variables with numeric values.
// Use addition, subtraction, multiplication, and division operators to perform these operations on the variables.
// Display the results using console.log.

const ANum1 = 10;
const ANum2 = 20;
console.log(ANum1 + ANum2);
console.log(ANum1 - ANum2);
console.log(ANum1 * ANum2);
console.log(ANum1 / ANum2);

// Exercise 2: Modulus and Exponentiation
// Declare a variable with a number.
// Use the modulus operator to find the remainder when dividing the number by 3.
// Use the exponentiation operator to calculate the square of the number.
// Display the results using console.log.

const MEVariable = 100;
console.log(MEVariable % 3);
console.log(MEVariable ** 3);

// Exercise 3: Increment and Decrement
// Declare a variable with an initial value.
// Use both the pre-increment and post-increment operators to increase the value by 1.
// Use both the pre-decrement and post-decrement operators to decrease the value by 1.
// Display the results using console.log.

let TDinitial = 1;
console.log(++TDinitial);
console.log(TDinitial++);

console.log(--TDinitial);
console.log(TDinitial--);

// Exercise 4: Compound Assignment Operators
// Declare a variable with an initial value.
// Use compound assignment operators (+=, -=, *=, /=) to modify the value of the variable.
// Display the modified value using console.log.

let COPVariable = 5;
console.log((COPVariable += 5));
console.log((COPVariable -= 3));
console.log((COPVariable *= 5));
console.log((COPVariable /= 2));

// Exercise 5: Order of Operations
// Declare variables with numeric values.
// Perform a series of arithmetic operations involving addition, multiplication, and parentheses to create a complex expression.
// Display the result of the expression using console.log.

let OOOVariable1 = 20;
let OOOVariable2 = 30;
console.log(OOOVariable1 + OOOVariable2 - OOOVariable1 / OOOVariable2);

// Exercise 6: Math Functions
// Declare a variable with a numeric value.
// Use the Math.sqrt function to calculate the square root of the value.
// Use the Math.round, Math.floor, and Math.ceil functions to round the value to different precision levels.
// Display the results using console.log.

const MFVariable = 10.6;
console.log("sqrt " + Math.sqrt(MFVariable));
console.log("round " + Math.round(MFVariable));
console.log("floor " + Math.floor(MFVariable));
console.log("cell " + Math.ceil(MFVariable));

// Exercise 7: Random Number Generation
// Use the Math.random function to generate a random decimal number between 0 and 1.
// Convert the random decimal number to a random integer within a specific range using appropriate arithmetic.
// Display the random decimal and integer numbers using console.log.

console.log(Math.ceil(Math.random(10, 15)));
