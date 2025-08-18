// Using if…else statements
let Num = 10;

// Check if the number is positive, negative, or zero
if (Num > 0) {
    console.log(`${Num} is a Positive Number`);  // Number is greater than 0
} else if (Num < 0) {
    console.log(`${Num} is a Negative Number`);  // Number is less than 0
} else {
    console.log(`The number is zero`);              // Number is exactly 0
}


// Using ternary operator
let x = -15;
// Ternary operator works like a shortcut for if…else
// Syntax: condition ? value_if_true : value_if_false
let result =
    x > 0 ? `${x} is a positive number`  
    : x < 0 ? `${x} is a negative number`
    : `The number is zero`;                    

console.log(result);
