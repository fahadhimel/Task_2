// Exercise 1: && (AND) Operator
// Declare two variables with boolean values.
// Write an if statement using the && operator to check if both variables are true.
// If the condition is met, use console.log to display a success message.

const andVariable1 = true;
const andVariable2 = false;
if (andVariable1 && andVariable2) {
  console.log("andVariable True");
} else {
  console.log("andVariable false");
}

// Exercise 2: || (OR) Operator
// Declare two variables with boolean values.
// Write an if statement using the || operator to check if at least one of the variables is true.
// If the condition is met, use console.log to display a message indicating that at least one condition is satisfied.

const orVariable1 = true;
const orVariable2 = false;
if (andVariable1 || andVariable2) {
  console.log("orVariable True");
} else {
  console.log("orVariable false");
}

// Exercise 3: ! (NOT) Operator
// Declare a variable with a boolean value.
// Use the ! operator to negate the value of the variable.
// Write an if statement to check if the negated value is true.
// Display a message using console.log indicating the original and negated values.
const notvariable1 = false;
if (!notvariable1) {
  console.log("negated value is true.");
}

// Exercise 4: Combining Logical Operators
// Declare three variables with boolean values.
// Write an if statement using a combination of && and || operators to create a more complex condition.
// Display a message using console.log to indicate whether the combined condition is true or false.

const CombiningVariable1 = true;
const CombiningVariable2 = false;
const CombiningVariable3 = true;
if ((CombiningVariable1 && CombiningVariable2) || CombiningVariable3) {
  console.log("Combining Logical Variable are true");
}

// Exercise 5: Short-Circuit Evaluation
// Declare a variable with a string value.
// Use the && operator to check if the variable is truthy and has a length greater than 0.
// If the condition is met, use console.log to display a message indicating that the string is not empty.

const ShortCircuitVariable = "fahad";
if (ShortCircuitVariable && ShortCircuitVariable.length > 0) {
  console.log("the string is not empty");
}

// Exercise 6: Logical Operators in Ternary Operator
// Declare a variable with a numeric value.
// Use the ternary operator ? along with the && operator to determine whether the value is positive and even.
// Display a message using console.log indicating whether the condition is met.

const logOperInTerOpe = 40;
logOperInTerOpe
  ? logOperInTerOpe % 2 == 0 && console.log("the value is positive and even.")
  : null;

// Exercise 7: Complex Logical Expressions
// Declare variables with numeric values representing test scores and a boolean value representing whether a student completed an assignment.
// Write an if statement using logical operators to check if the student's average score is above a certain threshold and they completed the assignment.
// Display a message using console.log indicating whether the student passed or not.

const ComplexVariable1 = 50;
const ComplexVariable2 = true;
if (ComplexVariable1 > 40 && ComplexVariable2) {
  console.log("student passed");
} else {
  console.log("student not passed");
}
