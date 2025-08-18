// Define a 2D array (array of arrays)
const values = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Access and print the element in the 2nd row (index 1) and 3rd column (index 2)
console.log(values[1][2]);  // Output: 6


// Create a string
let message = 'THis is a JavaScript code';

// Split the string into an array of words (using space " " as separator)
let result = message.split(' ');
console.log(result);  // Example: ["THis", "is", "a", "JavaScript", "code"]

// Join the array back into a single string (words separated by space)
let joinedMessage = result.join(' ');
console.log(joinedMessage);  // "THis is a JavaScript code"
