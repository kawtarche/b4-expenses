document.addEventListener('DOMContentLoaded', () => {


const unitExpense = document.getElementById ('unit-expense');
const expensesList = document.getElementById('expenses-list');

unitExpense.addEventListener('click', () => {
    window.location = "https://apps.boudfor.fr/b4-expenses/expense-manager/add-expense/add-expense.html"
})
expensesList.addEventListener('click',() => {

   window.location ="https://apps.boudfor.fr/b4-expenses/expense-manager/add-expense/add-expense.html"
})

});
