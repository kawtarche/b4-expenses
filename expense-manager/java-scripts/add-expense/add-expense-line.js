const options = {
    data: {
        'COCA-COLA': null,
        'PRESIDENT': null,
        'DANETTE': null,
        'DANAO': null,
        'BOURSIN': null,
        'ACTIVIA': 'https://logos-marques.com/wp-content/uploads/2021/06/Activia-logo.png'
    },
    minLength: 1
}

document.addEventListener('DOMContentLoaded', function () {
    const produitInput = document.getElementById('produit');

    M.Autocomplete.init(produitInput, options);

    const priceInput = document.getElementById('prix');
    priceInput.addEventListener('change', () => {
        checkPrice();
    })
    const submitInput = document.getElementById('submit');

    submitInput.addEventListener('click', () => {

       const detailsExpenses = new DetailsExpenses();

        detailsExpenses .product = produitInput.value;
        detailsExpenses .price =  priceInput.value;
        detailsExpenses .submit();

    })
})

function checkPrice() {
    const priceInput = document.getElementById('prix');
    const priceErrorMessage= document.getElementById ('price-error-message');
    if (priceInput.value < 0) {
        console.log(priceInput.value);
        priceInput.className = 'invalid';
        priceErrorMessage.className = 'error show';

    } else {
        console.log(priceInput.value);
        priceInput.className = 'valid';
        priceErrorMessage.className = 'hide';
    }
}

class DetailsExpenses {
   product;
   price;

   submit(){
     console.log(this);
   }

}