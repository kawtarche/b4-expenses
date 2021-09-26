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


    // 1. get HTMLElement that represent input#quantity and we store it quantityInput
    const quantityInput = document.getElementById('quantity');
    const quantityErrorMessage = document.getElementById('quantity-error-message');
    // 2. add event listener to quantityInput
    quantityInput.addEventListener('change', () => {
        // 3. get the value of quantity input
        const quantity = quantityInput.value;
        if (quantity <= 0) {
            console.log(quantityInput.value);
            quantityInput.className = 'invalid';
            quantityErrorMessage.className = 'error show ';

        } else {
            console.log(quantityInput.value);
            quantityInput.className = 'valid';
            quantityErrorMessage.className = 'hide ';
        }
    })


    // Problem: Execute actions when client change the input#prix value.
    // Solution: For that, you add the event listener 'change' on input#prix
    const priceInput = document.getElementById('prix');
    const priceErrorMessageP = document.getElementById('price-error-message');
    priceInput.addEventListener('change', () => {
        // Execute actions when client change the input#prix value.
        const price = priceInput.value;
        /* console.log('price');*/
        if (price <= 0) {
            console.log(priceInput.value)
            priceInput.className = "invalid";
            priceErrorMessageP.className = 'error show';
        } else {
            console.log(priceInput.value)
            priceInput.className = "valid";
            priceErrorMessageP.className = 'hide';
        }
    })

    const titleInput = document.getElementById('titre');
    const commentTextArea = document.getElementById('comment');
    const submitA = document.getElementById('submit');

    submitA.addEventListener('click',() => {
        const expense = new Expense();
        expense.title = titleInput.value;
        expense.product = produitInput.value;
        expense.quantity = quantityInput.value;
        expense.price = priceInput.value;
        expense.comment =commentTextArea.value;
        expense.submit();
    })
});

class Expense {
    title;
    product;
    quantity;
    price;
    comment;

    submit() {
        console.log(this);
    }

}
