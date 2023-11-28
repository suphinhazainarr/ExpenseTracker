const TotalInput = document.getElementById('total-input');
const setBudgetBtn = document.getElementById('setBudget');
const totalBudget = document.getElementById('total-budget');
let calculatedBalance;
let currentExpense;
const productName = document.getElementById('product-name');
const productCost = document.getElementById('product-cost');
const checkAmountBtn = document.getElementById('checkAmount-button');
const productList = document.querySelector('.product-list');
const balance = document.getElementById('balance');
const expense = document.getElementById('expense');

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
    currentExpense = parseInt(expense.textContent);

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

function editItem(item) {
    const listItem = item.parentNode.parentNode;
    const productName = listItem.querySelector('.product-name');
    const productPrice = listItem.querySelector('.product-price');

    const newName = prompt('Enter new product name', productName.textContent);
    const newPrice = parseFloat(prompt('Enter new product price', productPrice.textContent.slice(1)));

    if (newName && !isNaN(newPrice)) {
        const prevProductCost = parseFloat(productPrice.textContent.slice(1));
        const editedExpense = parseInt(expense.textContent) - prevProductCost + newPrice;
        const editedBalance = parseInt(totalBudget.textContent) - editedExpense;
        
        productName.textContent = newName;
        productPrice.textContent = `$${newPrice.toFixed(2)}`;
        expense.textContent = `${editedExpense}`;
        balance.textContent = `${editedBalance}`;
    } else {
        alert('Please enter valid name and price.');
    }
}

function deleteItem(item) {
    const listItem = item.parentNode.parentNode;
    const deletedProductCost = parseFloat(listItem.querySelector('.product-price').textContent.slice(1));
    const updatedExpense = parseInt(expense.textContent) - deletedProductCost;
    const updatedBalance = parseInt(totalBudget.textContent) - updatedExpense;

    productList.removeChild(listItem);
    expense.textContent = `${updatedExpense}`;
    balance.textContent = `${updatedBalance}`;
}

productList.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-edit')) {
        editItem(event.target);
    } else if (event.target.classList.contains('fa-trash-alt')) {
        deleteItem(event.target);
    }
});
