////////////////////////////////////
// 1 - Variables & Operators ////
//////////////////////////////

let age = 19;

switch (true) {
    case age < 12:
        console.log("You are a child");
        break;
    case (age >= 12 && age < 18):
        console.log("You are a teenager");
        break;
    case age >= 18:
        console.log("You are an adult");
        break;
    default:
        console.log("Really :/ ");
}

if (age < 12) {
    console.log("You are a child");
} else if (age >= 12 && age < 18) {
    console.log("You are a teenager");
} else if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("Really :/");
}

////////////////////////////////////
// Arrays ///////////////////////
//////////////////////////////
let fruits = ['Apple', 'Banana', 'Orange'];
fruits.unshift('Mango');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits[2] = 'Grapes';
console.log(fruits);
console.log(fruits.length);

////////////////////////////////////
// Loops (for) ///////////////////////
//////////////////////////////

// Print from 1 to 20
for (let numbers = 1; numbers <= 20; numbers++){
    console.log(numbers);
}

// Only Even Numbers
for (let even = 1; even <= 20; even++) {
    if (even % 2 === 0) {
        console.log(even);
        continue;
    }
}

// Only Odd Numbers
for (let odd = 1; odd <= 20; odd++) {
    if (odd % 2 !== 0) {
        console.log(odd);
        continue;
    }
}

////////////////////////////////////
// Loops + Arrays ///////////////////////
//////////////////////////////

const colors = ['Red', 'Green', 'Blue'];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    if (colors[i] === 'Blue') {
        console.log('Found Blue!');
        break;
    }
}

console.log('With Only "Found Blue!"');

for (i = 0; i < colors.length; i++){
    if (colors[i] === 'Blue') {
        console.log('Found Blue!');
    } else {
        console.log(colors[i]);
    }
}

let Names = ['Jalal', 'Omar', 'Ayman', 'Alex'];

for (let i = 0; i < Names.length; i++) {
    if (Names[i] === 'Alex') {
        console.log(`"${Names[i]}" is not an Arabian name`);
    } else {
        console.log(Names[i]);
    }
}
