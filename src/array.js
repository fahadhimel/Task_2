// Exercise 1: Sum of Array Elements
// Create an array of numbers.
// Write a loop to calculate and display the sum of all the elements in the array.

const sumArray = [52, 54, 25, 54, 55, 5, 5, 5, 54, 5, 5, 52];
let sumarr = 0;
for (let x in sumArray) {
  sumarr += sumArray[x];
}
console.log(sumarr);

// Exercise 2: Average of Array Elements
// Create an array of numbers.
// Calculate the average (mean) of all the elements in the array.
// Display the average using console.log.
const AverageArray = [52, 54, 25, 54, 55, 5, 5, 5, 54, 5, 5, 52];
let maxNum = Math.max(...AverageArray);
console.log(maxNum / 2);

// Exercise 3: Largest Number in Array
// Create an array of numbers.
// Find and display the largest number in the array.

const LargestNumber = [52, 54, 25, 54, 55, 5, 5, 5, 54, 5, 5, 52];
console.log(Math.max(...LargestNumber));

// Exercise 4: Remove Duplicates
// Create an array with duplicate values.
// Write a function that removes duplicates from the array and returns a new array with unique values.
const DuplicatesArray = [7, 5, 25, 25, 2, 52, 5, 2, 52, 9];
let uniqueChars = [...new Set(DuplicatesArray)];
console.log(uniqueChars);

// Exercise 5: Find Index of Element
// Create an array of strings.
// Write a function that takes a string parameter and returns the index of that string in the array. If not found, return -1.

const FindIndexArray = ["fahad", "himel", "Firus", "Ahasan"];

const findFunction = (find) => {
  for (let i in FindIndexArray) {
    if (find === FindIndexArray[i]) {
      return i;
    }
  }
  return -1;
};
console.log(findFunction("Firus"));

// Exercise 6: Array Reversal
// Create an array of elements.
// Write a function that reverses the order of the elements in the array and returns the reversed array.

const reversalArray = [2, 4, 6, 8, 10];
console.log(reversalArray.reverse());

// Exercise 7: Filter Even Numbers
// Create an array of numbers.
// Write a function that filters out and returns a new array containing only the even numbers from the original array.

const originalArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const evenArray = originalArray.filter((fil) => fil % 2 == 0);
console.log(evenArray);

// Exercise 8: Array Concatenation
// Create two arrays of elements.
// Write a function that concatenates the two arrays and returns a new combined array.
const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60, 70, 80, 90, 100];
console.log(arr1.concat(arr2));

// Exercise 9: Array Mapping
// Create an array of numbers.
// Write a function that maps over the array and returns a new array containing the square of each number.

const arrMap = [11, 22, 33, 44, 55, 66, 77];

const squarearr = arrMap.map((value) => Math.pow(value, 2));
console.log(squarearr);

// Exercise 10: Array Sorting
// Create an array of strings.
// Write a function that sorts the array in alphabetical order and returns the sorted array.

const arrayAlpha = ["f", "g", "a", "d", "e", "b", "c"];
console.log(arrayAlpha.sort());
