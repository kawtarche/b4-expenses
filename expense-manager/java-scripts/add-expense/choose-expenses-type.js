
// afficher le message HELLO WORLD avant le télechargement de la page
document.addEventListener('DOMContentLoaded', ()=> {
const homeExpenseSection = document.getElementById('home-expense');
const restaurantExpenseSection = document.getElementById('restaurant-expense');

homeExpenseSection.addEventListener('click', () => {
    window.location = "https://apps.boudfor.fr/b4-expenses/expense-manager/add-expense/choose-household-expenses-types.html";


})
restaurantExpenseSection.addEventListener('click', () => {
   window.location ="https://apps.boudfor.fr/b4-expenses/expense-manager/add-expense/add-restaurant-expense.html";

})

    });



