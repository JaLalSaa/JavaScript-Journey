let books =[];

// ==============================
// Function 1: Add a new book to the library
// ==============================
function addBook(id, title, author, price, quantity) {
    books.push([id, title, author, price, quantity]);
    console.log(`${title} has been added`);
}

// Adding some initial books
addBook(1, "Start with why", "Simon Sinek", 80.0, 13);
addBook(2, "But how do it know", "J.Clark Scott", 59.9, 22);
addBook(3, "Clean code", "Robert Cecil Martin", 50.0, 5);
addBook(4, "Zero to one", "Peter Thiel", 45.0, 12);
addBook(5, "You don't know JS", "Kyle Simpson", 39.9, 9);

// ==============================
// Function 2: Edit an existing book by ID
// ==============================
function editBook(id, title, author, price, quantity) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === id) {
            books[i][1] = title;
            books[i][2] = author; 
            books[i][3] = price;
            books[i][4] = quantity;
            return books[i]; 
        }
    }
    return null; 
}

// Example edit
editBook(3, "Clean code", "Robert Cecil Martin", 45.5, 4);
console.log(books);

// ==============================
// Function 3: Delete a book by ID or Title
// ==============================
function deleteBook(value) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === value || books[i][1] === value) {
            books.splice(i, 1); 
            return books;
        }
    }
}

// Example delete
deleteBook(2); // delete book by ID
console.log(books);

// ==============================
// Function 4: Show book information by ID or Title
// ==============================
function bookInfo(value) {
    let found = false;

    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === value || books[i][1] === value) {
            console.log(`Book ID: ${books[i][0]}`);
            console.log(`Title: ${books[i][1]}`);
            console.log(`Author: ${books[i][2]}`);
            console.log(`Price: ${books[i][3]}`);
            console.log(`Quantity: ${books[i][4]}`); 
            found = true;
            break;
        } 
        else if (!found) {
            console.log("Book not found");
        }
    }
}

// Example usage of bookInfo
bookInfo(1); // search by ID
bookInfo("Clean Code"); // search by Title

// ==============================
// Function 5: Search for a book by criteria (id, title, author)
// ==============================
function bookSearch(criteria, value){
    for (let i = 0; i < books.length; i++) {
        if (criteria === "id" && books[i][0] === value) {
            return books[i];
        } else if (criteria === "title" && books[i][1] === value) {
            return books[i];
        }  else if (criteria === "author" && books[i][2] === value) {
            return books[i];
        }
    }
    return null; // if book not found
}

// Example search
let result = bookSearch("id", 1); // search by ID
if (result) {
    console.log("The book was found;\n", result);
} else {
    console.log("The book does not exist");
}
