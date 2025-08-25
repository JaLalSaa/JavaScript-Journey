// We have a simple array
const colors = ['red', 'white', 'blue'];

/* =======================
    1. for loop
    Most commonly used, needs an index
======================= */
console.log("Using for loop:");
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]); // print the current element
}

/* =======================
    2. for...of loop
    Easier if you just need elements without the index
======================= */
console.log("\nUsing for...of loop:");
for (let color of colors) {
    console.log(color); // directly print the element
}

/* =======================
    3. while loop
    Runs as long as the condition is true
======================= */
console.log("\nUsing while loop:");
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++; // important to increment, otherwise infinite loop
}

/* =======================
    4. do...while loop
    Executes the loop at least once before checking the condition
======================= */
console.log("\nUsing do...while loop:");
i = 0;
do {
    console.log(colors[i]);
    i++;
} while (i < colors.length);
