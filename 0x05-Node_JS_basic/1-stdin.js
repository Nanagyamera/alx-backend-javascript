const readline = require('readline');

// Create a readline interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the initial message
console.log("Welcome to Holberton School, what is your name?");

// Read user input
rl.on('line', (name) => {
  if (name.toLowerCase() === 'exit') {
    // If the user enters "exit", close the program
    console.log("This important software is now closing");
    rl.close();
  } else {
    // Display the user's name
    console.log(`Your name is: ${name}`);
  }
});

// Display a message when the program starts
console.log("Type 'exit' to end the program.");
