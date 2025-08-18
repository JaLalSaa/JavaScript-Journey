// -------------------------------
// Using if…else statements
// -------------------------------
let number = 15;

if (typeof number !== "number" || isNaN(number)) {
    console.log(`${number} is not a number`);
} else if (number > 0) {
    console.log(`${number} is a Positive Number`);
} else if (number < 0) {
    console.log(`${number} is a Negative Number`);
} else {
    console.log(`${number} is Zero`);
}


// -------------------------------
// Using ternary operator
// -------------------------------
let x = 45;

let result = 
    typeof x !== "number" || isNaN(x) ? `${x} is not a number`
    : x > 0 ? `${x} is a positive number`
    : x < 0 ? `${x} is a negative number`
    : `Your number is zero`;

console.log(result);
