// Exercise 1: Basic Comparisons
// Declare two variables with numeric values.
// Use the equality (==) and inequality (!=) operators to compare the values.
// Use the strict equality (===) and strict inequality (!==) operators to compare the values.
// Display the results of each comparison using console.log.

const comNum1=10;
const comNum2=20;
console.log(comNum1==comNum2);
console.log(comNum1!=comNum2);
console.log(comNum1===comNum2);
console.log(comNum1!==comNum2);

// Exercise 2: String Comparisons
// Declare two variables with string values.
// Use the equality and inequality operators to compare the string values.
// Use the comparison operators (<, >, <=, >=) to compare the lengths of the strings.
// Display the results of each comparison using console.log.

const strVariable1="20";
const strVariable2="50";
console.log(strVariable1==strVariable2);
console.log(strVariable1!=strVariable2);
console.log(strVariable1>strVariable2);
console.log(strVariable1<strVariable2);
console.log(strVariable1<=strVariable2);
console.log(strVariable1>=strVariable2)


// Exercise 3: Logical Operators
// Declare three variables with boolean values.
// Use the logical AND (&&) and logical OR (||) operators to combine the boolean values in different ways.
// Use the logical NOT (!) operator to negate the boolean value of one of the variables.
// Display the results of each combination using console.log.

const logikalVariable1=true;
const logikalVariable2=false;
const logikalVariable3=true;

console.log(logikalVariable1&&logikalVariable2);
console.log(logikalVariable1||logikalVariable2);
console.log(!logikalVariable1)



// Exercise 4: Complex Comparisons
// Declare variables with numeric values.
// Create complex comparison expressions involving arithmetic operations and comparison operators.
// Use parentheses to control the order of operations in the expressions.
// Display the results of each expression using console.log.
const complexVariable=20;

console.log((10+10)==complexVariable||30-10===complexVariable)


// Exercise 5: Comparing Different Types
// Declare variables with different data types, such as a number and a string.
// Use equality and inequality operators to compare these variables.
// Observe how JavaScript handles type coercion when comparing different types.
// Display the results of each comparison using console.log.

const DifferentTypeVariable1=100;
const DifferentTypeVariable2="50";
console.log(DifferentTypeVariable1==DifferentTypeVariable2);
console.log(DifferentTypeVariable1!=DifferentTypeVariable2);

// Exercise 6: Conditional Statements
// Declare a variable with a numeric value.
// Use an if statement to check if the value is greater than a certain threshold.
// If the condition is met, display a message indicating the value is above the threshold. Otherwise, display a different message.

const ConditionalVariable=30;
if(ConditionalVariable>20){
    console.log("The Condition is true");
}



// Exercise 7: Comparing Arrays
// Declare two arrays with different values.
// Use the equality operator to compare the arrays directly.
// Notice how JavaScript compares arrays by their reference.
// Compare the individual elements of the arrays using loops or other methods.
// Display the results of the comparisons using console.log.

const Comparingarr1=[85];
const Comparingarr2=[85,52,66,5,8]
console.log(Comparingarr1==Comparingarr2);

for(let i=0; i<Comparingarr1.length; i++){
    for(let j=0;j<Comparingarr2.length;j++){
        if(Comparingarr1[i]===Comparingarr2[j]){
            console.log(`Comparingarr1 index [${i}] and Comparingarr2 index [${j}] are true`);
        }else{
            console.log(`Comparingarr1 index [${i}] and Comparingarr2 index [${j}] are false`);
        }

    }
}
