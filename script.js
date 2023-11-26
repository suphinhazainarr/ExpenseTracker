const TotalInput = document.getElementById('total-input');
const setBudgetBtn = document.getElementById('setBudget');
const totalBudget = document.getElementById('total-budget');
const expense = document.getElementById('expense');

setBudgetBtn.addEventListener('click', () => {
    const newBudgetValue = parseInt(TotalInput.value);
    const currentExpense = parseInt(expense.textContent);

    if (!isNaN(newBudgetValue) && !isNaN(currentExpense)) {
        const calculatedBalance = newBudgetValue - currentExpense;

        totalBudget.textContent = `${newBudgetValue}`;
        balance.textContent = `${calculatedBalance}`;
    } else {
        alert("Please enter valid numeric values.");
    }
});


