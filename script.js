const TotalInput = document.getElementById('total-input');
const setBudgetBtn = document.getElementById('setBudget');
const totalBudget = document.getElementById('total-budget');
const expense = document.getElementById('expense');
const balance = document.getElementById('balance');
const productName = document.getElementById('product-name');
const productCost = document.getElementById('product-cost');
const checkAmountBtn = document.getElementById('checkAmount-button');
const productList = document.querySelector('.product-list');
let calculatedBalance; // Declared globally
let currentExpense;

setBudgetBtn.addEventListener('click', () => {
    const newBudgetValue = parseInt(TotalInput.value);
    currentExpense = parseInt(expense.textContent);

    if (!isNaN(newBudgetValue) && !isNaN(currentExpense)) {
        calculatedBalance = newBudgetValue - currentExpense;

        totalBudget.textContent = `${newBudgetValue}`;
        balance.textContent = `${calculatedBalance}`;
    } else {
        alert("Please enter valid numeric values.");
    }
});

checkAmountBtn.addEventListener('click', () => {
    const newProduct = productName.value;
    const newProductCost = parseInt(productCost.value);
    currentExpense = parseInt(expense.textContent); // Update currentExpense

    if (newProduct && !isNaN(newProductCost) && !isNaN(calculatedBalance)) {
        const listItem = document.createElement('li');

        const productNameSpan = document.createElement('span');
        productNameSpan.className = 'product-name';
        productNameSpan.textContent = newProduct;

        const productPriceSpan = document.createElement('span');
        productPriceSpan.className = 'product-price';
        productPriceSpan.textContent = `$${newProductCost}`;

        const editButton = document.createElement('span');
        editButton.className = 'edit-button';
        editButton.innerHTML = '<i class="fas fa-edit" id="editIcon"></i>';
        
        const deleteButton = document.createElement('span');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '<i class="fas fa-trash-alt" id="deleteIcon"></i>';

        listItem.appendChild(productNameSpan);
        listItem.appendChild(productPriceSpan);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        productList.appendChild(listItem);

        expense.textContent = currentExpense + newProductCost;
        calculatedBalance = parseInt(totalBudget.textContent) - parseInt(expense.textContent);
        balance.textContent = `${calculatedBalance}`;

        productName.value = '';
        productCost.value = '';
    } else {
        alert("Please enter valid product name, cost, and set a budget first.");
    }
});
