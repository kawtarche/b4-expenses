const options = {
    data: {
        'McDonald': null,
        'Subway': null,
        'Indiana': null,
        'Big papa': null,
        'culture thai': null,
        'otacos': 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c9/Otacos_logo.svg/langfr-280px-Otacos_logo.svg.png'
    },
    minLength: 1
}

document.addEventListener('DOMContentLoaded',  () => {
    const restaurantInput = document.getElementById('restaurant');
    M.Autocomplete.init(restaurantInput, options);

// vérifier le nombre saisie dans le champs prix
 const priceInput = document.getElementById('price');
document.addEventListener('change', () => {

checkPrice();

    })

// Afficher les élements saisies

const titleInput = document.getElementById('title');
const dateInput = document.getElementById("date");
const commentTextarea = document.getElementById('comment');
const submitA = document.getElementById('submit');

submitA.addEventListener('click',() => {
    const expense = new Expense();
    expense.title = titleInput.value;
    expense.restaurant = restaurantInput.value;
    expense.date = dateInput.value;
    expense.price = priceInput.value;
    expense.comment = commentTextarea.value;
    expense.submit();
    window.location ="https://apps.boudfor.fr/b4-expenses/expense-manager/add-expense/sucess.html"; // Quand je clique sur le bouton dépense restaurant (écran 1) il y'a l'écran add-restaurant-expenses qui s'affiche mais l'écran succès ne s'affiche pas après
    // Mais quand je vais directement à l'écran 8 là je peux aller directement à l'écran 9
})


})

function checkPrice() {
    const priceInput = document.getElementById('price');
    const priceErrorMessage = document.getElementById('price-error-message');
    if(priceInput.value>0){
        console.log(priceInput.value);
        priceInput.className = 'valid';
        priceErrorMessage.className = 'hide'


    }else{
        console.log(priceInput.value);
       priceInput.className ='invalid';
       priceErrorMessage.className =' error show';

    }
}

class Expense {
    title;
    restaurant;
    date;
    price;
    comment;

    submit() {
     console.log(this);
    }
}


