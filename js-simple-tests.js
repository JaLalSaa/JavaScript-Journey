let x = 19;

if (x % 2 === 0) {          // check if even
    console.log(`${x} is even`);
} else {
    console.log(`${x} is odd`);
}

let temp = 25;

if (temp > 20 && temp < 30) {  // check if temp is nice
    console.log("Nice weather");
}

let age = 20;

let accessAllowed = age > 19 ? "adult" : "underage"; // ternary check
console.log(accessAllowed);
