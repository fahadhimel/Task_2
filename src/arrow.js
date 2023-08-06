// Exercise 1: Multiply by Two
// Write an arrow function named multiplyByTwo that takes a parameter num.
// Inside the arrow function, return the result of multiplying num by 2.
// Call the arrow function with different numeric values and display the results using console.log.

const multiplyByTwo = (num) => {
  return num * 2;
};
console.log(multiplyByTwo(5));
console.log(multiplyByTwo(50));

// Exercise 2: Check if Even
// Write an arrow function named isEven that takes a parameter number.
// Inside the arrow function, use a ternary operator to return true if the number is even (use the modulo operator %), and false otherwise.
// Call the arrow function with different numbers and display the results using console.log.

const isEven = (number) => {
  return number % 2 == 0 ? true : false;
};

console.log(isEven(5));
console.log(isEven(6));

// Exercise 3: Convert to Uppercase
// Write an arrow function named convertToUppercase that takes a string parameter text.
// Inside the arrow function, use the toUpperCase() method to convert the text to uppercase.
// Return the converted text.
// Call the arrow function with different strings and display the results using console.log.

const convertToUppercase = (text) => {
  return text.toUpperCase();
};
console.log(convertToUppercase("fahad"));

// Exercise 4: Calculate Sum of Squares
// Write an arrow function named sumOfSquares that takes two parameters: num1 and num2.
// Inside the arrow function, calculate the sum of the squares of num1 and num2.
// Return the calculated value.
// Call the arrow function with different pairs of numbers and display the results using console.log.

const sumOfSquares = (num1, num2) => {
  const squares1 = num1 * num1;
  const squares2 = num2 * num2;

  return squares1 + squares2;
};
console.log(sumOfSquares(5, 5));
console.log(sumOfSquares(5, 3));

// Exercise 5: Filter Even Numbers
// Write an arrow function named filterEven that takes an array of numbers parameter.
// Inside the arrow function, use the filter() method to return a new array containing only the even numbers.
// Call the arrow function with different arrays of numbers and display the filtered arrays using console.log.

const filterEven = (arr) => {
  const filterEvenNumber = arr.filter((num) => num % 2 == 0);
  return filterEvenNumber;
};

console.log(filterEven([5, 86, 86, 65, 25, 585, 58, 55, 5, 5, 69, 5, 5]));
