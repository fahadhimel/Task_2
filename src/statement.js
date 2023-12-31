// Exercise 1: Grade Conversion
// Declare a variable to represent a numeric grade (e.g., 85).
// Use a switch statement to convert the numeric grade to a letter grade (A, B, C, etc.).
// Display the letter grade using console.log.

const gradeVariable = 85;
switch (gradeVariable < 100) {
  case gradeVariable > 90:
    console.log("A+");
    break;
  case gradeVariable > 80:
    console.log("A");
    break;
  case gradeVariable > 70:
    console.log("B+");
    break;
  case gradeVariable > 60:
    console.log("B");
    break;
  case gradeVariable > 50:
    console.log("C");
    break;
  case gradeVariable > 40:
    console.log("D");
    break;
  default:
    console.log("F");
}

// Exercise 2: Language Greeting
// Declare a variable to represent a language code (e.g., "en" for English, "es" for Spanish).
// Use a switch statement to display a greeting message in the appropriate language based on the code.
// Include cases for different language codes and a default case for unknown codes.
// Display the greeting using console.log.

const English = "en";
const Spanish = "es";

switch (English) {
  case "es":
    console.log("welcome to Spanish Language");
    break;
  case "en":
    console.log("welcome to English Language");
    break;

  default:
    console.log("unknown codes");
}

// Exercise 3: Day Type
// Declare a variable to represent a day of the week (e.g., 5 for Friday).
// Use a switch statement to determine whether the day is a weekday or a weekend day.
// Display a message indicating whether it's a weekday or a weekend day using console.log.

const FridayVariable = 5;

let day;
switch (FridayVariable) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);
