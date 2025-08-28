// ==============================
// Function 1: Print numbers from 0 to 3
// ==============================
function printNumbers() {
    for (let i = 0; i <= 3; i++) {
        console.log(i);
    }
}
printNumbers();


// ==============================
// Function 2: Print numbers up to a given limit
// ==============================
function Numbers(to) {
    for (let i = 1; i <= to; i++) {
        console.log(i);
    }
}
Numbers(5);


// ==============================
// Function 3: Add two numbers (print result)
// ==============================
function add(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
add(5, 70);


// ==============================
// Function 4: Add two numbers (return result)
// ==============================
function add1(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    return result;
}
let value = add1(4, 4);
console.log(value);


// ==============================
// Function 5: Combine functions (add then multiply)
// ==============================
function multiplication(num){
    console.log(num * 2);
}

function add2(firstNum, secondNum){
    return firstNum + secondNum; 
}

multiplication(add2(7, 3));


// ==============================
// Function 6: Print numbers from 1 to 15, but stop at 10
// ==============================
function printSomething() {    
    for (let i = 1; i <= 15; i++) {
        if (i > 10) {
            return;
        }
        console.log(i);
    }
}

printSomething();
