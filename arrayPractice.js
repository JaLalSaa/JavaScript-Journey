// Create an array of colors
let Colors = ["White", "Red", "Pink", "Gary"];

// Check if 'Black' exists in the array (should be false)
console.log(Colors.includes('Black'));

// Replace the color at index 1 ('Red') with 'Black'
Colors[1] = 'Black';

// Check if 'Black' now exists in the array (should be true)
console.log(Colors.includes('Black'));

// Check if 'Red' still exists (should be false because we replaced it)
console.log(Colors.includes('Red'));

// Add 'Red' to the end of the array
Colors.push('Red');
console.log(Colors);

// Get the index of 'Red' in the array
console.log(Colors.indexOf('Red'));

// Remove the last element ('Red') from the array
Colors.pop();
console.log(Colors);

// Add 'purple' to the end, then remove it and store in a variable
Colors.push('purple');
let purpleColor = Colors.pop();
console.log(purpleColor); // prints 'purple'
console.log(Colors);

// Add 'Orange' and 'Yellow' to the start of the array
Colors.unshift('Orange');
Colors.unshift('Yellow');
console.log(Colors);

// Remove the first element from the array
Colors.shift();
console.log(Colors);

// Remove the new first element and store it in a variable
let orangeColor = Colors.shift();
console.log(orangeColor); // prints the removed color
console.log(Colors);

// Replace the color at index 1 with 'Red'
Colors[1] = 'Red';
console.log(Colors);

// Check if Colors is really an array
console.log(Array.isArray(Colors)); // true
