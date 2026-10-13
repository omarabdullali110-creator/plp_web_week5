/* ==========================================================================
   SpendWise — JavaScript Foundation Assignment
   ========================================================================== */

// 1. Setup check confirmation
console.log("SpendWise script loaded successfully!");

// 2. Store Application Data
let monthlyBudget = 3500.00; 

let foodExpense = 450.50;
let transportExpense = 145.00;
let rentExpense = 1250.00;
let entertainmentExpense = 70.00;
let savingsExpense = 900.00;
let utilitiesExpense = 155.20;

// 3. Collect User Input
let userInput = prompt("Enter your total monthly budget:", "3500");
let userBudget = !isNaN(userInput) && userInput !== null ? parseFloat(userInput) : monthlyBudget;

// 5. Create Reusable Functions
function calculateTotalExpenses(food, transport, rent, entertainment, savings, utilities) {
    return food + transport + rent + entertainment + savings + utilities;
}

function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

// 4. Perform Budget Calculations
let totalExpenses = calculateTotalExpenses(
    foodExpense, 
    transportExpense, 
    rentExpense, 
    entertainmentExpense, 
    savingsExpense, 
    utilitiesExpense
);

let remainingBalance = calculateRemainingBalance(userBudget, totalExpenses);

// 6. Display Results in Browser Console
console.log("\n===================================");
console.log("       SPENDWISE SUMMARY           ");
console.log("===================================");
console.log(`User Profile: Abdullahi Ali`);
console.log(`Total Budget:      $${userBudget.toFixed(2)}`);
console.log(`Total Expenses:    $${totalExpenses.toFixed(2)}`);
console.log(`Remaining Balance: $${remainingBalance.toFixed(2)}`);
console.log("===================================");