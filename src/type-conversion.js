// Exercise 1: String to Number Conversion
// Declare a variable with a string value that represents a number, like "42".
// Use the 'parseInt' or 'parseFloat' function to convert the string to a number.
// Perform some arithmetic operation with the number, like adding 10 to it, and display the result using console.log.

let stringnum = "42.2";
console.log(10 + parseInt(stringnum));
console.log(10 + parseFloat(stringnum));

// Exercise 2: Number to String Conversion
// Declare a variable with a number value, like 123.
// Convert the number to a string using the toString method or by concatenating an empty string ("") to the number.
// Concatenate the string with another string and display the result using console.log.

const numberString = 123;
console.log(numberString.toString() + "456");

// Exercise 3: Implicit Type Conversion
// Declare a variable with a string value, like "5".
// Declare another variable with a number value, like 3.
// Perform an arithmetic operation between the string and the number, like "5" * 3.
// Display the result and explain whether JavaScript implicitly converted the string to a number for the operation.

const stringValue = "5";
const numberValue = 3;
console.log(stringValue * numberValue);

// Exercise 4: Boolean Conversion
// Declare a variable with a truthy value, like 1 or "hello".
// Use the Boolean function to convert the value to a boolean.
// Display the original value and the converted boolean value using console.log.

const BCVariabkle = 1;
console.log(BCVariabkle);
console.log(Boolean(1));

// Exercise 5: Array to String Conversion
// Declare an array with multiple elements, like [1, 2, 3].
// Convert the array to a string using the toString method or by using the join method.
// Display the original array and the converted string using console.log.

const arrStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrStr.toString());
//console.log(arrStr.join())
