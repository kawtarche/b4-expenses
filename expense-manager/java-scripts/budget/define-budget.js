import {navigate} from "../util.js";

document.addEventListener('DOMContentLoaded', ()=> {

    const budgetInput = document.getElementById('budget');
    const closeIconSpan = document.getElementById('close-icon');
    const chevronIconSpan = document.getElementById('chevron-icon');
    const validateIcona = document.getElementById('validate-icon');

    budgetInput.addEventListener('change', () => {
    checkBudget();
    })
    closeIconSpan.addEventListener('click', ()=> {
     navigate('/expense-manager/acceuil/home.html');
    })
    chevronIconSpan.addEventListener('click', ()=> {
        navigate('/expense-manager/budget/details-budget.html');
    })
    validateIcona.addEventListener('click', () => {
        navigate('/expense-manager/acceuil/home.html');
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