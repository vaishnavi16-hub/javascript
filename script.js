// Expense Tracker Script
document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Render existing expenses on page load
    renderExpenses();

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim());

        if (name !== '' && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name: name,
                amount: amount
            };

            expenses.push(newExpense);
            saveExpensesToLocal();
            renderExpenses();
            expenseForm.reset();
        }
    });

    function calculateTotal() {
        return expenses.reduce((sum, exp) => sum + exp.amount, 0);
    }

    function saveExpensesToLocal() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    function renderExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach(exp => {
            const li = document.createElement('li');
            li.textContent = `${exp.name} - $${exp.amount}`;

            // Create Cancel button
            const cancelBtn = document.createElement('button');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.style.marginLeft = '10px';
            cancelBtn.style.cursor = 'pointer';

            cancelBtn.addEventListener('click', () => {
                removeExpense(exp.id);
            });

            li.appendChild(cancelBtn);
            expenseList.appendChild(li);
        });

        totalAmountDisplay.textContent = calculateTotal();
    }

    function removeExpense(id) {
        expenses = expenses.filter(exp => exp.id !== id);
        saveExpensesToLocal();
        renderExpenses();
    }
});
