# SpendWise — Personal Finance Dashboard

## 📌 Project Overview
**SpendWise** is a responsive, modern personal finance web application designed to help users track, monitor, and analyze their monthly spending across multiple categories (such as food, transport, rent, entertainment, savings, and utilities). It features a clean dashboard interface, dark mode support, and a solid JavaScript foundation that processes financial data and calculates remaining balances.

---

## 🚀 JavaScript Concepts Implemented
To transform SpendWise from a purely static web page into a data-driven application, the following JavaScript concepts were implemented:
* **Variables & Data Types:** Storing numbers, strings, and objects representing financial figures.
* **User Input (`prompt`):** Interacting with the user dynamically to capture custom budget data.
* **Arithmetic Operations:** Performing mathematical calculations for totals and remaining balances.
* **Functions & Scope:** Encapsulating logic into reusable blocks to keep code organized and maintainable.
* **Console API:** Displaying formatted output and financial summaries directly in the browser developer console.

---

## 💡 How Variables Are Being Used
Variables are utilized in `script.js` to store core application data representing the user's financial state. 
* Numbers are used to store individual expense categories (e.g., `foodExpense = 450.50`, `rentExpense = 1250.00`).
* Variables are also used to store calculated outputs, such as `totalExpenses` and `remainingBalance`, making the code dynamic and easy to update.

---

## 📥 How User Input Is Collected
User input is collected dynamically when the webpage loads using the built-in JavaScript `prompt()` method. 
* A pop-up window asks the user to input their total monthly budget.
* The application captures this input as a string, validates it, and converts it into a floating-point number using `parseFloat()` so it can be processed mathematically in subsequent calculations.

---

## 🧮 How Calculations Are Performed
Calculations are executed automatically using basic arithmetic operators within dedicated functions:
1. **Total Expenses Calculation:** The application sums up all individual category expenses (Food + Transport + Rent + Entertainment + Savings + Utilities) to find the aggregate monthly spending.
2. **Remaining Balance Calculation:** The user's total budget/income is subtracted by the total expenses (`Budget - Total Expenses`) to determine how much money is left over or if the user is over budget.

---

## ⚙️ How Functions Help Organize the Code
Functions are used to modularize the application logic and separate concerns:
* **`calculateTotalExpenses()`**: Encapsulates the logic for summing up all expense items.
* **`calculateRemainingBalance()`**: Handles the math for the final financial standing.
By using these reusable functions, the code becomes cleaner, easier to read, and simpler to debug or expand in future updates.