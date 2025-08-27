# 📚 Bookstore Project  

Create a program that does the following:  

---

### ➕ Add, ✏️ Edit, 🗑️ Delete, and 👀 Display Books  
The program should be able to store a new book with the following information:  

1. 🔢 Book ID  
2. 📖 Book Title  
3. ✍️ Author  
4. 💲 Price  
5. 📦 Quantity  

💡 **Help (1):** To store book information, you can use **arrays**, specifically **2D arrays**.  

---

### 🔍 Ability to Search for a Book  
The program should allow searching for a book by:  

1. 🔢 Book ID  
2. 📖 Book Title  
3. ✍️ Author  

💡 **Help (2):** For searching, you can use **loops** to traverse the entire array, then check using **if conditions**.  

---

### 🛒 Sell a Book & 🧾 Export an Invoice  
The program should allow selling one or more books and generating an invoice, with attention to:  

1. ✅ Verifying that there is enough stock of the book to be sold.  
2. 📉 If enough stock exists, reduce the inventory according to the requested quantity.  

💡 **Help (3):** To issue an invoice, you need **inputs** and then perform validation.  
> 📝 *Note: Inputs are pre-defined in the program; you don’t have to request them from the user during execution.*  

**Inputs:**  
1. 📖 Book Title: the title of the book to purchase.  
2. 🔢 Requested Quantity.  
3. 💳 Available Balance: the buyer’s current balance.  

**Validation Conditions:**  
1. 📦 The book must be available.  
2. 🔢 The requested quantity must be in stock.  
3. 💰 The customer’s balance must be sufficient to purchase the requested quantity.  

---

### 📊 Example Book Table  

| 📦 Quantity | 💲 Price | ✍️ Author             | 📖 Book Title        | 🆔 ID |
|------------:|---------:|-----------------------|----------------------|------:|
| 13          | 80.0     | Simon Sinek           | Start with Why       | 1     |
| 22          | 59.9     | J. Clark Scott        | But How Do It Know   | 2     |
| 5           | 50.0     | Robert Cecil Martin   | Clean Code           | 3     |
| 12          | 45.0     | Peter Thiel           | Zero to One          | 4     |
| 9           | 39.9     | Kyle Simpson          | You Don’t Know JS    | 5     |
