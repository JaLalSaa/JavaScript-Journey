/*/////////////////////////////
/// 1. Grades System //////
*////////////////////////

let grades = [95, 82, 67, 45, 33, 100, 77];
let aGrade = 0;
let fGrade = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 90) {
        console.log(`${grades[i]} = A`);
        aGrade++;
    } else if (grades[i] >= 80) {
        console.log(`${grades[i]} = B`);
    } else if (grades[i] >= 70) {
        console.log(`${grades[i]} = C`);
    } else if (grades[i] >= 50) {
        console.log(`${grades[i]} = D`);
    } else {
        console.log(`${grades[i]} = F`);
        fGrade++;
    }
}

console.log(`${aGrade} students got A`);
console.log(`${fGrade} students got F`);

/*///////////////////////////////
/// 2. Max & Min Finder //////
*/////////////////////////

let nums = [4, 10, 2, 99, 23, 5];
let max = nums[0];
let min = nums[0];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
    if (nums[i] < min) {
        min = nums[i];
    }
}

console.log("Maximum number is:", max);
console.log("Minimum number is:", min);

/*/////////////////////////////
/// 3. Reverse Array //////// 
*/////////////////////////

let letters = ["a", "b", "c", "d", "e"];

for (let i = letters.length - 1; i >= 0; i--) {
    console.log(letters[i]);
}

/*////////////////////////////////////
/// 4. Multiplication Tables ////// 
*///////////////////////////////
for (let number = 1; number <= 5; number++) {
    console.log(`Multiplication Table for ${number}:`);

    for (let i = 1; i <= 5; i++) {
        console.log(`${number} x ${i} = ${number * i}`);

        console.log('');
    }
}