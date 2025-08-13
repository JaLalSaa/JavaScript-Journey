// Name
let myName = "JaLAl";

// Age
let Age = 19;

// Change name
myName = "sky";

// Alive?
let amIalive = true;

// Compare numbers
let isIttrue = 10 < 5; // false

// Student names and ages
let sNames = ["JaLAl", "Hamza", "Alex", "Mohammed"];
let sAge = [19, 17, 20, 22];

// Log first student name
console.log("First student name:", sNames[0]);

// Log fourth student's age
console.log("Fourth student's age:", sAge[3]);

// Novel object
let novels = { title: "the wolf", price: 20 };

// Log novel title
console.log("Novel title:", novels.title);

// Add author
novels.author = "John Snow";

// Log full novel object
console.log(novels);

// Multiple novels
let allNovels = [
    { title: "The Wolf", price: 20 },
    { title: "Ocean Deep", price: 15 },
    { title: "Sky High", price: 25 }
];

// Print all novels
for (let i = 0; i < allNovels.length; i++) {
    console.log("Title:", allNovels[i].title + " - Price: $" + allNovels[i].price);
}

// Novels costing more than $18
console.log("Novels costing more than $18:");
for (let i = 0; i < allNovels.length; i++) {
    if (allNovels[i].price > 18) {
        console.log(allNovels[i].title);
    }
}

// Simple subtraction
let x = 19;
let y = 56;
let sum = x - y;
console.log(sum);
