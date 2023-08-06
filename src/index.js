"use strict";
// Global Scope
// Create a variable with global scope, and then print it to the console by using it inside a Function
var global;

function myFunc() {
  console.log(global);
}
// myFunc()

// Function Scope
// Create a function, and then create a variable inside that function. Print the variable to the console:
// 1. inside the function (both before and after the declaration) // 2. outside the function to see the difference

function myFunc2() {
  console.log(functionScopeVariable);
  var functionScopeVariable = "hello";
  console.log(functionScopeVariable);
}
// myFunc2()
//console.log(functionScopeVariable);

// Block Scope
// Create a function, and then create a variable inside an if statement in that function.
// Print the variable to the console inside the block and outside the block to see the difference
// Note: StackBlitz may hide the error from you; you can look in the page's developer tools to see the answer, or copy this section to an HTML page

function myFunc3() {
  if (true) {
    let BlockScope = "fghj";
    // console.log(BlockScope);
  }
  console.log(BlockScope);
}
// myFunc3();

// var, let, const
// Declare a variable with each of the above keywords, two for const (one that has a number, string, or boolean and one object or array)
// Try to alter the value of each variable and see what happens in each scenario
// On the object or array, try adding to the array or altering an attribute on the object as well as reassigning the value

var variable1;
let variable2;
const variable3 = true;
const object_variable = { name: "Fahad Himel" };
const obj2 = object_variable;
variable1 = 20;
variable2 = "himel";
// variable3=false;
object_variable.name = "Himel";
console.log("variable3", variable3);
console.log("object_variable", object_variable);
console.log("obj2", obj2);

// Value vs. Reference
// Declare a variable with a value of a number, string, or boolean, then copy it to another Variable
// Log both variables, then change the value of one and log them again
// Declare a variable with a value of an object or an array, then copy it to another Variable
// Log both variables, then change the value of an attribute on one object or add an item to one array and log them again

let variable4 = 50;
var Variable5 = variable4;
console.log(variable4);
console.log(Variable5);
console.log((Variable5 = 40));

const arrvari = [1, 2, 3, 4, 5];
const arrvari2 = arrvari;
console.log(arrvari);
console.log(arrvari2);
arrvari[2] = 20;
console.log(arrvari);
console.log(arrvari2);
