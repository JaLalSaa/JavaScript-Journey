// Countdown using a for loop
for (let i = 5; i > 0; i--) {
    console.log(i); // Prints numbers from 5 down to 1
}

// Countdown using a while loop
let number = 10;
while(number >= 0) {
    console.log(number); // Prints numbers from 10 down to 0
    number--; // Decreases number by 1 each iteration
}

// Loop from 1 to 10, skipping even numbers
for (let index = 1; index <= 10; index++) {
    if (index % 2 === 0) { // Check if the number is even
        console.log("Next"); // Print "Next" for even numbers
        continue; // Skip the rest of the loop for this iteration
    }
    console.log(index); // Print odd numbers only
}

// Loop from 1 to 10, stopping at the first even number
for (let index = 1; index <= 10; index++) {
    if (index % 2 === 0) { // Check if the number is even
        console.log("Stop"); // Print "Stop" and exit the loop
        break; // Exit the loop immediately
    }
    console.log(index); // Print numbers until the first even number
}
