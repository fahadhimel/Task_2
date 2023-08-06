// Exercise 1: while Loop
// Declare a variable with an initial value (e.g., 1).
// Use a while loop to print the values of the variable from the initial value up to a certain limit (e.g., 10).
// Increment the variable within the loop.
// Display the values using console.log.

let initial = 1;
while (initial <= 10) {
  console.log(initial);
  initial++;
}

// Exercise 2: for Loop
// Use a for loop to iterate through the numbers from 1 to 5.
// Display each number using console.log.

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Exercise 3: Looping through an Array
// Declare an array of strings with multiple items.
// Use a for loop to iterate through the array and display each item using console.log.

const loopArr = [5, 96, 55, 58, 5, 58, 8, 54, 558, 285, 8, 658, 7];

for (let i = 0; i < loopArr.length; i++) {
  console.log(`loopArr indez [${i}] = ${loopArr[i]}`);
}

// Exercise 4: Sum of Numbers
// Use a while loop to calculate the sum of numbers from 1 to 10.
// Display the final sum using console.log.

let sum = 0;
let count = 1;
while (count <= 10) {
  sum += count;
  count++;
}
console.log(sum);

// Exercise 5: Odd Numbers
// Use a for loop to display all odd numbers between 1 and 20.
// Hint: You can use the modulo operator (%) to check if a number is odd.

for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// Exercise 6: Nested Loop
// Use nested for loops to create a pattern of asterisks. Start with a single asterisk and increase the number of asterisks in each row.
// Display the pattern using console.log.

let star = "";
for (let i = 1; i <= 10; i++) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  console.log(star);
  star = "";
}

// Exercise 7: Infinite Loop Prevention
// Use a while loop to simulate a user input scenario. Continuously prompt the user for input until they provide a specific keyword (e.g., "exit" or "quit").
// Use a conditional statement to break out of the loop when the user provides the keyword.

let Condition = true;

while (Condition) {
  let UserValue = prompt("Enter the value: ").toLocaleLowerCase();

  if (UserValue == "exit" || UserValue == "quit") {
    Condition = false;
  }
  console.log(UserValue);
}
