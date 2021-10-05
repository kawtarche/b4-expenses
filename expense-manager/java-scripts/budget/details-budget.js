import {navigate} from "../util.js";
document.addEventListener('DOMContentLoaded', ()=> {
const closeiconSpan = document.getElementById('close-icon');
const historyBudgetsa = document.getElementById('history-budgets');
const defineBudgeta = document.getElementById('define-budget');

closeiconSpan.addEventListener('click', () => {
   navigate('/expense-manager/acceuil/home.html');
})
historyBudgetsa.addEventListener('click', () => {
    navigate('/expense-manager/budget/monthly-expense.html');
})
defineBudgeta.addEventListener('click', () => {
    navigate('/expense-manager/budget/budget-define.html');
})


})
