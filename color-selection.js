const colorPallet = ['red', 'green', 'blue'];
let color = 5;

// -------------------------------
// 1 - Using if…else for each case
// -------------------------------
if (color === 1) {
    console.log(colorPallet[0]); // If color is 1, print 'red'
} else if (color === 2) {
    console.log(colorPallet[1]); // If color is 2, print 'green'
} else if (color === 3) {
    console.log(colorPallet[2]); // If color is 3, print 'blue'
} else {
    console.log("Not available"); // Any other number
}

// -------------------------------
// 2 - Using a single condition with index
// -------------------------------
if (color >= 1 && color <= colorPallet.length) {
    console.log(colorPallet[color - 1]); // Access the correct color using index
} else {
    console.log("Not available"); // Number is out of range
}

// -------------------------------
// 3 - Using switch…case
// -------------------------------
switch (color) {
    case 1:
        console.log(colorPallet[0]); // If color is 1, print 'red'
        break;
    case 2:
        console.log(colorPallet[1]); // If color is 2, print 'green'
        break;
    case 3:
        console.log(colorPallet[2]); // If color is 3, print 'blue'
        break;
    default:
        console.log("Not available"); // Any other number
}
