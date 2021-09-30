import {navigate} from '../util.js'

// afficher le message HELLO WORLD avant le télechargement de la page
document.addEventListener('DOMContentLoaded', ()=> {
const homeExpenseSection = document.getElementById('home-expense');
const restaurantExpenseSection = document.getElementById('restaurant-expense');

homeExpenseSection.addEventListener('click', () => {
    navigate('/expense-manager/add-expense/choose-household-expenses-types.html');
})
restaurantExpenseSection.addEventListener('click', () => {
   navigate('/expense-manager/add-expense/add-restaurant-expense.html');
})

});



