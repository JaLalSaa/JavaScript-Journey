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
// Function 4: Show book information by ID or Title
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
bookInfo(1); // search by ID

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
function buyAbook(title, quantity, balance) {
    for (let i = 0; i < books.length; i++) {
        if (title === books[i][1]) {
            let price = books[i][3];
            let availableQty = books[i][4];
            let totalCost = price * quantity;

            if (quantity > availableQty) {
                console.log(`❌ Sorry, only ${availableQty} copies of "${title}" are available.`);
                return;
            }

            if (balance < totalCost) {
                console.log(`❌ Insufficient balance. You need $${totalCost}, but you only have $${balance}.`);
                return;
            }

            books[i][4] -= quantity;
            balance -= totalCost;

            console.log(`✅ You bought ${quantity} copy/copies of "${title}" for $${totalCost}.`);
            console.log(`💰 Remaining balance: $${balance}`);
            console.log(`📚 Remaining stock of "${title}": ${books[i][4]}`);
            return;
        }
    }
    console.log(`❌ Book titled "${title}" was not found in the library.`);
}

// Example purchase
buyAbook("Clean code", 1, 90);

/* ==============================
    How to use this Library Program:
==============================

1️⃣ Add a book:
   - Call addBook(id, title, author, price, quantity)
   - Example: addBook(7, "New Book", "Author Name", 30.5, 10);

2️⃣ Edit a book:
   - Call editBook(id, title, author, price, quantity)
   - Example: editBook(3, "Updated Title", "Updated Author", 40, 8);

3️⃣ Delete a book:
   - Call deleteBook(id or title)
   - Example: deleteBook(2) or deleteBook("Clean code");

4️⃣ Show book info:
   - Call bookInfo(id or title)
   - Example: bookInfo(1) or bookInfo("Zero to one");

5️⃣ Search a book:
   - Call bookSearch(criteria, value)
   - criteria: "id", "title", or "author"
   - Example: bookSearch("title", "You don't know JS");

6️⃣ Buy a book:
   - Call buyAbook(title, quantity, balance)
   - Example: buyAbook("Clean code", 2, 100);

✅ Notes:
   - All book data is stored in the 'books' array.
   - Each book is stored as [id, title, author, price, quantity].
   - Functions handle printing messages for success or errors.
*/
