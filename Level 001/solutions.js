// ===================== Operators & Operations =====================
/* Exercise 1 */
let x = 9;
let sum = x % 2;
console.log(sum);
/* Exercise 2 */
let y = 2;
y *= 3;
console.log(y);
/* Exercise 3 */
let score = 75;
if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail")
}

// ===================== Conditions =====================
/* Exercise 1 */
let num = 11;

if (num % 2 === 0) {
    console.log(`${num} is even`);
} else if (num % 2 !== 0) {
    console.log(`${num} is odd`);
} else {
    console.log("zero");
}
/* Exercise 2 */
let age = 17;
if (age < 12) {
    console.log("Child")
} else if (age >= 12 && age < 18) {
    console.log("Teenager");
} else {
    console.log("Adult");
}
/* Exercise 3 */
let day = "friday";

switch (day) {
    case "friday": 
        console.log("Yes, it is.");
        break;
    default:
        console.log("It's Friday");
}

// ===================== For loop =====================
/* Exercise 1 */
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
/* Exercise 2 */
let number = 5;
for (let i = 1; i <= 10; i++) {
    let mlt = number * i;
    console.log(`${number} * ${i} = ${mlt}`);
}
/* Exercise 3 */
let names = ['Ali', 'Sara', 'Khalid', 'Omar'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
} 

// ===================== Arrays =====================
/* Exercise 1 */
let colors = ['red', 'green', 'blue'];
colors.push('yellow');
colors.shift();
console.log(colors.length);
console.log(colors)
/* Exercise 2 */
console.log(colors.includes('green'));
/* Exercise 3 */
let numbers = [3, 10, 8, 5, 2];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 5) {
        console.log(numbers[i]);
    }
} 

// ===================== Mix =====================
/* Exercise 1 */
let temp = [33, 90, 72, 60, 45];
let pass = 0;
let fail = 0;

for (let i = 0; i < temp.length; i++) {
    if (temp[i] < 50) {
        console.log(`${temp[i]} → Fail`);
        fail++;
    } else if (temp[i] >= 50) {
        console.log(`${temp[i]} → Pass`);
        pass++;
    }
}

console.log(`Total pass: ${pass}`);
console.log(`Total fail: ${fail}`);
