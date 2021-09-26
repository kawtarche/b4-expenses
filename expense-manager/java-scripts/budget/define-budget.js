document.addEventListener('DOMContentLoaded', ()=> {
    const budgetInput = document.getElementById('budget');
    budgetInput.addEventListener('change', () => {
    checkBudget();

    })

    function checkBudget() {
        const budgetInput = document.getElementById('budget');
        const budgetErrorMessage = document.getElementById('budget-error-message');
        if (budgetInput.value < 0) {
            console.log(budgetInput.value);
            budgetInput.className = 'invalid';
            budgetErrorMessage.className = " error show ";
        } else {
            console.log(budgetInput.value);
            budgetInput.className = 'valid';
            budgetErrorMessage.className = " hide ";
        }
    }
})