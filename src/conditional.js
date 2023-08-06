// Exercise 1: Simple if Statement
// Declare a variable with a numeric value.
// Write an if statement to check if the value is greater than 10.
// If the condition is met, use console.log to display a message indicating that the value is greater than 10.

var num = 100;
if (num > 10) {
  console.log("the value is greater than 10");
}

// Exercise 2: if...else Statement
// Declare a variable with a numeric value.
// Write an if...else statement to check if the value is even or odd.
// Display a message using console.log indicating whether the value is even or odd.

var num2 = 22;
if (num2 & 1) {
  console.log("value is odd");
} else {
  console.log("value is even");
}

// Exercise 3: if...else if...else Statement
// Declare a variable with a numeric value representing a student's score.
// Write an if...else if...else statement to assign a grade based on the score ranges:
// Score >= 90: "A"
// Score >= 80: "B"
// Score >= 70: "C"
// Score >= 60: "D"
// Otherwise: "F"
// Display the grade using console.log.

let Score = 100;

if (Score >= 90) {
  console.log("A grade");
} else if (Score >= 80) {
  console.log("B grade");
} else if (Score >= 70) {
  console.log("C grade");
} else if (Score >= 60) {
  console.log("D grade");
} else {
  console.log("F");
}

// Exercise 4: Conditional (Ternary) Operator
// Declare a variable with a numeric value.
// Use the conditional (ternary) operator ? to determine whether the value is positive or negative.
// Display a message using console.log indicating the sign of the value.

let num3 = 50;
num3 < 0
  ? console.log("the value is negative")
  : console.log("the value is positive");

// Exercise 5: Nested if Statements
// Declare two variables, one representing a user's age and another representing whether they have a driver's license (true or false).
// Write nested if statements to check if the user is eligible to drive:
// If the user is 18 or older and has a driver's license, display a message that they can drive.
// If the user is 16 or older but doesn't have a driver's license, display a message to apply for a license.
// If the user is younger than 16, display a message that they cannot drive.

const age = 20;
const license = false;

if (license) {
  if (age >= 18) {
    console.log("They can drive.");
  } else {
    console.log("they cannot drive.");
  }
} else {
  console.log("apply for a license.");
}

// Exercise 6: Using prompt and Conditional Statements
// Use the prompt function to ask the user for their age.
// Write an if...else statement to check if the user is old enough to vote (18 or older).
// Display a message using console.log indicating whether the user can vote or not.

const userAge = prompt("Enter age :");
if (userAge >= 18) {
  console.log("the user can vote");
} else {
  console.log("the user cannot vote");
}

console.log(userAge);
