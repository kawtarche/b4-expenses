// afficher le message Hello, ma page web est chargé
document.addEventListener("DOMContentLoaded", () => {

// retourner ce que l'utilisateur a saisi
    const quantity = document.getElementById('quantite');
    const quantityErrorMessage = document.getElementById('quantity-error-message');
    quantity.addEventListener('change', () => {
        console.log(quantity.value); // la valeur de l'objet HTMLElement stocké dans quanity
        if (quantity.value < 0) {
            console.log(quantity.value);
            quantity.className = 'invalid';
            quantityErrorMessage.className = 'error show';
        } else {
            quantity.className = 'valid';
            quantityErrorMessage.className = 'hide';
        }
    });

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
    const quantityInput = document.getElementById('quantite');
    const priceInput = document.getElementById('prix');
    const remarqueInput = document.getElementById('remark');
    const newExpenseInput = document.getElementById('new-expense');
    newExpenseInput.addEventListener('click', () => {
        const expenseForm = new ExpenseForm();
        expenseForm.title = titleInput.value;
        expenseForm.quantity = quantityInput.value;
        expenseForm.price = priceInput.value;
        expenseForm.date = dateInput.value;
        expenseForm.remark = remarqueInput.value;
        expenseForm.submit();
    })

});

// ecrire la fonciton

class ExpenseForm {
    title;
    quantity;
    price;
    date;
    remark;

    submit() {
        console.log(this);
    }

}