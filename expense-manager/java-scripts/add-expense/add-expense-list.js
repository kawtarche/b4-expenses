import {navigate} from "../util.js";

document.addEventListener("DOMContentLoaded", () => {


    // stocké dans la variable price, l'objet qui représente l'element html avec l'ID price


    const price = document.getElementById('prix');

    // ajouter l'écouteur d'évenment "change" sur le tag #prix

    price.addEventListener('change', () => {
        // action à exécuter lorsque l'évenement change est executé sur l'évenement price

        if (price.value >= 0) {
            price.className = "valid";
        } else {
            price.className = "invalid";
            console.error('Le prix ne peut pas être negatif');
        }

    });

//  modifier la valeur de l'input #date

    const dateInput = document.getElementById('date');// awal 7aja kandir hya je recupere et je stock
    dateInput.addEventListener('change', () => {
        const today = new Date();
        const date = new Date(dateInput.value);
        if (date <= today) {
            dateInput.className = "valid";
        } else {
            dateInput.className = "invalid";
            console.error('La date ne peut pas être supérieur à la date du jour');
        }
    })


    const titleInput = document.getElementById('title');
    const priceInput = document.getElementById('prix');
    const remarqueInput = document.getElementById('remark');
    const newExpenseInput = document.getElementById('new-expense');

    newExpenseInput.addEventListener('click', () => {
        const expenseForm = new ExpenseForm();
        expenseForm.title = titleInput.value;
        expenseForm.price = priceInput.value;
        expenseForm.date = dateInput.value;
        expenseForm.remark = remarqueInput.value;
        expenseForm.submit();
        navigation("/b4-expenses/expense-manager/add-expense/sucess.html");
    })
    const iconClosei = document.getElementById('icon-close');
    const iconChevronLefti = document.getElementById('icon-chevron-left');
    const newExpensea = document.getElementById('new-expense');

    iconClosei.addEventListener('click', () => {
        navigate("/expense-manager/acceuil/home.html");
    })
    iconChevronLefti.addEventListener('click', () => {
        navigate("/expense-manager/add-expense/choose-household-expenses-types.html");

    })
    newExpensea.addEventListener('click', () => {
        navigate("/expense-manager/add-expense/add-expense-line.html");
    })

});

// ecrire la fonciton

class ExpenseForm {
    title;
    price;
    date;
    remark;

    submit() {
        console.log(this);
    }

}