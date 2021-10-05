import {navigate} from '../util.js';

document.addEventListener('DOMContentLoaded', () => {
    const targetButtona = document.getElementById('target-button'); // définir un objectif de budget
    const addExpensea = document.getElementById('add-expense'); // ajouter une dépense

    targetButtona.addEventListener('click', () => {
    navigate('/expense-manager/budget/budget-define.html');
    })

    addExpensea.addEventListener('click', () => {
    navigate('/expense-manager/add-expense/add-expense.html');
    })


})