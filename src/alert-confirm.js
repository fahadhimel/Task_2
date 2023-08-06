// Exercise 1: Alert

// Create an HTML file with a button.
// Add a click event listener to the button that triggers an alert with a message of your choice.

const Alert=document.getElementById("alert");
Alert.addEventListener("click",()=>{
    alert("Welcome")
})

// Exercise 2: Prompt

// Create an HTML file with a button.
// Add a click event listener to the button that triggers a prompt asking the user for their name.
// Store the user's input in a variable and display an alert with a personalized greeting using their name.

const Prompt=document.getElementById("prompt");
Prompt.addEventListener("click",()=>{
    const name=prompt("Enter name: ");
    alert(`Welcome ${name}`);
})

// Exercise 3: Confirm

// Create an HTML file with a button.
// Add a click event listener to the button that triggers a confirm dialog with a question like "Are you sure you want to delete this?"
// Display an alert with the result of the confirm (whether the user clicked "OK" or "Cancel").
const Confirm=document.getElementById("confirm");
Confirm.addEventListener("click",()=>{
    const check=confirm("Are you sure you want to delete this?");
    alert(check?"Ok":"Cancel");
})


// Exercise 4: Combination of Alert, Prompt, and Confirm

// Create an HTML file with a button.
// Add a click event listener to the button that triggers a series of dialogs:
// Use prompt to ask the user for their age.
// Use confirm to ask if they are sure about their age.
// Display an alert with a message that varies based on whether the user confirmed their age or not.

const Combination=document.getElementById("combination");

Combination.addEventListener("click",()=>{
    const userAge=prompt("Enter age: ");
    const checkAge=confirm(`sure, you are ${userAge} ?`)
    checkAge ? alert("Confirmation successfully") : alert("Confirmation Unsuccessfully")
});

// Exercise 5: Interactive Game

// Create an HTML file with a button.
// Add a click event listener to the button that starts an interactive guessing game:
// Use prompt to ask the user to guess a number between 1 and 10.
// Compare their guess to a predefined correct number and display an alert indicating whether they guessed correctly or not.

const gameBtn=document.getElementById("gameBtn");
gameBtn.addEventListener("click",()=>{
    let gnum=5;
    const guessedNumber=prompt("Enter number :");
    guessedNumber==gnum?alert("The number you guessed is correctly"):alert(`The number you guessed is incorrect. The number is ${gnum}.`);

})

