import {navigate} from '../util.js'


document.addEventListener('DOMContentLoaded', () => {


const unitExpense = document.getElementById ('unit-expense');
const expensesList = document.getElementById('expenses-list');

unitExpense.addEventListener('click', () => {
    navigate("/expense-manager/add-expense/add-expense.html")
})
expensesList.addEventListener('click',() => {

    navigate("/expense-manager/add-expense/add-expense.html");
})

});
