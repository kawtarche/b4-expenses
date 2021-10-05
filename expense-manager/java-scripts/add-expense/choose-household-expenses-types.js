import {navigate} from "../util.js";

document.addEventListener('DOMContentLoaded', () => {

const unitExpense = document.getElementById ('unit-expense');
const expensesList = document.getElementById('expenses-list');
const iconChevronLefti = document.getElementById('icon-chevron-left');
const closeIconi = document.getElementById('close-icon');


unitExpense.addEventListener('click', () => {
    navigate("/expense-manager/add-expense/add-expense.html");
})
expensesList.addEventListener('click',() => {
   navigate("/expense-manager/add-expense/add-expense-list.html");
})
closeIconi.addEventListener('click', () => {
        navigate("/expense-manager/acceuil/home.html");
    })
iconChevronLefti.addEventListener('click', () => {
    navigate("/expense-manager/add-expense/choose-expenses-type.html");
})

});
