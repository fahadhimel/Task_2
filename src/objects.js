// Exercise 1: Creating an Object
// Create an object representing a person with properties such as name, age, and occupation.
// Display the properties using console.log.

const userObject = { name: "Fahad", age: 22, occupation: "Developer" };
console.log("name :" + userObject.name);
console.log("age :" + userObject.age);
console.log("occupation :" + userObject.occupation);

// Exercise 2: Accessing Object Properties
// Create an object representing a book with properties like title, author, and year.
// Write a function that takes the book object as a parameter and displays its properties using console.log.
console.log("\n");

const bookObject = { title: "book Title", author: "fahad", year: 2023 };

const parameterFunction = (object) => {
  console.log(object.title);
  console.log(object.author);
  console.log(object.year);
};

parameterFunction(bookObject);

// Exercise 3: Adding and Modifying Properties
// Create an empty object.
// Use dot notation or bracket notation to add properties like name, age, and email.
// Modify the name property to a new value and display the updated object using console.log.

let emptyObject = {};
emptyObject.name = "Himel";
emptyObject.age = 22;
emptyObject.email = "fahadhimel@gmail.com";

console.log(emptyObject);

// Exercise 4: Nested Objects
// Create an object representing a student with properties like name, age, and grades (an array of numbers).
// Display the student's information using console.log.

let nestedObject = {
  student: [{ name: "Firoz", age: 25, grades: "A+" }],
};
console.log(nestedObject.student);

// Exercise 5: Deleting Object Properties
// Create an object with several properties.
// Write a function that takes the object and a property name as parameters and deletes the specified property.
// Display the object before and after the property deletion using console.log.

let DeletingObject = { name: "Monir", age: 22 };

console.log(DeletingObject);

(function deleteObjectProperty(DeletingObject) {
  delete DeletingObject.name;
})(DeletingObject);

console.log(DeletingObject);

// Exercise 6: Object Cloning
// Create an object with properties.
// Write a function that creates a copy of the object using the Object.assign() method or the spread operator ({...}).
// Display the original and cloned objects using console.log.

let ObjectCloning = { name: "Ahasan", age: 25 };

console.log({ ...ObjectCloning });

// Exercise 7: Array of Objects
// Create an array of objects, each representing a person with properties like name, age, and location.
// Write a function that iterates through the array and displays information for each person using console.log.

let ArrayofObjects = [
  { name: "himel", age: 22, location: "Dhaka" },
  { name: "Monir", age: 24, location: "Tangail" },
];
const iteratesFunc = () => {};

// Exercise 8: Object Destructuring
// Create an object with properties like name, age, and country.
// Use object destructuring to extract and display these properties using console.log.

const OdjectProperties = { name: "Momin", age: 23, country: "Bangladesh" };
let { name, age, country } = OdjectProperties;
console.log(name, age, country);

// Exercise 9: Object Methods
// Create an object with various properties and values.
// Write a function that iterates over the object using a for...in loop and displays each property and its value using console.log.

const person = { fname: "John", lname: "Doe", age: 25 };

(function objectMethod() {
  let text = "";
  for (let x in person) {
    text += person[x] + " ";
  }
  console.log(text);
})();
