import {navigate} from "../util.js";

document.addEventListener("DOMContentLoaded", () => {

    const addIconSpan = document.getElementById('add-icon');
    const moreInformationsButton = document.getElementById('more-informations-button');
    const expensesLines = document.getElementById('expenses-lines');
    const expensesResto = document.getElementById('expenses-resto');
    const expensesShop = document.getElementById('expenses-shop');
    const budgetTargetDiv = document.getElementById('budget-target');

    addIconSpan.addEventListener('click', () => {
        navigate("/expense-manager/add-expense/add-expense.html");
    })
    moreInformationsButton.addEventListener('click', () => {
        navigate("/expense-manager/budget/monthly-expense.html");
    })
    expensesLines.addEventListener('click', ()=> {
        navigate("/expense-manager/acceuil/expenses-lines.html");
    })
    expensesResto.addEventListener('click',() => {
        navigate ("/expense-manager/acceuil/expenses-maps-maps.html");
    })
    expensesShop.addEventListener('click', () => {
        navigate ("/expense-manager/acceuil/expenses-maps-maps.html");
    })
    budgetTargetDiv.addEventListener('click', () => {
        navigate ("/expense-manager/budget/details-budget.html");
    })
})