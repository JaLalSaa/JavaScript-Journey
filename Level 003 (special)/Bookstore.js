let books =[];

// ==============================
// Function 1: Add a new book to the library
// ==============================
function addBook(id, title, author, price, quantity) {
    books.push([id, title, author, price, quantity]);
    console.log(`✅ "${title}" has been added`);
}

// Adding some initial books
addBook(1, "Start with why", "Simon Sinek", 80.0, 13);
addBook(2, "But how do it know", "J.Clark Scott", 59.9, 22);
addBook(3, "clean code", "unknown", 50.0, 5);
addBook(4, "Zero to one", "Peter Thiel", 45.0, 12);
addBook(5, "You don't know JS", "Kyle Simpson", 39.9, 9);
addBook(6, "QUICKSILVER", "Callie Hart", 23.10, 8);

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

            console.log(`✅ The book with ID ${id} has been successfully updated.`);
            return books[i]; 
        }
    }
    console.log(`❌ No book found with ID ${id}.`);
    return null;
}

// Example edit
editBook(3, "Clean code", "Robert Cecil Martin", 45.5, 12);
console.log(books);

// ==============================
// Function 3: Delete a book by ID or Title
// ==============================
function deleteBook(value) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === value || books[i][1] === value) {
            console.log(`🗑️ The book "${books[i][1]}" (ID: ${books[i][0]}) has been successfully deleted.`);
            books.splice(i, 1);
            return books;
        }
    }
    console.log(`❌ No book found with ID/Title "${value}".`)
}

// Example delete
deleteBook(6); // delete book by ID
console.log(books);


// ==============================
// Function 5: Show book information by ID or Title
// ==============================
function bookInfo(value) {
    let found = false; 

    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === value || books[i][1] === value) {
            console.log(`📚 Book found:`);
            console.log(`   🔑 ID: ${books[i][0]}`);
            console.log(`   📖 Title: ${books[i][1]}`);
            console.log(`   ✍️ Author: ${books[i][2]}`);
            console.log(`   💰 Price: ${books[i][3]}`);
            console.log(`   📦 Quantity: ${books[i][4]}`); 
            found = true;
            break;
        }
    }   

    if (!found) {
        console.log(`❌ No book found with ID/Title "${value}".`);
    }
}

// Example usage of bookInfo
bookInfo(1); // search by ID.


// ==============================
// Function 5: Search for a book by criteria (id, title, author)
// ==============================
function bookSearch(criteria, value) {
    for (let i = 0; i < books.length; i++) {
        if (
            (criteria === "id" && books[i][0] === value) ||
            (criteria === "title" && books[i][1] === value) ||
            (criteria === "author" && books[i][2] === value)
        ) {
            console.log("✅ Book found:");
            console.log(`Book ID: ${books[i][0]}`);
            console.log(`Title: ${books[i][1]}`);
            console.log(`Author: ${books[i][2]}`);
            console.log(`Price: ${books[i][3]}`);
            console.log(`Quantity: ${books[i][4]}`);
            return books[i];
        }
    }
    console.log("❌ The book does not exist.");
    return null;
}

// Example usage
bookSearch("title", "You don't know JS");


// ==============================
// Function 6: Sell a book and export an invoice
// ==============================
