// Exercise 1: Calculate Area of a Rectangle
// Create a function called calculateRectangleArea that takes two parameters: width and height.
// Inside the function, calculate and return the area of the rectangle (area = width * height).
// Call the function with different values for width and height and display the results using console.log.

function calculateRectangleArea(width, height) {
  return width * height;
}
console.log(calculateRectangleArea(10, 20));

// Exercise 2: Greeting Function
// Create a function called greetUser that takes a parameter name.
// Inside the function, construct and return a greeting message that includes the provided name.
// Call the function with different names and display the greetings using console.log.

function greetUser(name) {
  console.log("Hellow " + name + ", Welcome to your new Office");
  console.log(`Hellow ${name}, Welcome to your new Office`);
}
greetUser("Fahad Himel");

// Exercise 3: Even or Odd
// Create a function called isEven that takes a parameter number.
// Inside the function, determine if the number is even or odd by checking if the remainder when divided by 2 is 0.
// Return true if the number is even, and false if it's odd.
// Call the function with different numbers and display the results using console.log.

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}
console.log(isEven(5));
console.log(isEven(20));

// Exercise 4: BMI Calculator
// Create a function called calculateBMI that takes two parameters: weight (in kilograms) and height (in meters).
// Inside the function, calculate and return the BMI (BMI = weight / (height * height)).
// Call the function with different values for weight and height and display the calculated BMI using console.log.

function calculateBMI(weight, height) {
  return weight / (height * height);
}
console.log(calculateBMI(10, 20));
console.log(calculateBMI(30, 50));

// Exercise 5: Temperature Converter
// Create a function called convertCelsiusToFahrenheit that takes a parameter celsius.
// Inside the function, calculate and return the temperature in Fahrenheit (F = C * 9/5 + 32).
// Call the function with different Celsius values and display the converted Fahrenheit temperatures using console.log.

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log("Fahrenheit temperatures is :" + convertCelsiusToFahrenheit(5));
console.log("Fahrenheit temperatures is :" + convertCelsiusToFahrenheit(10));
