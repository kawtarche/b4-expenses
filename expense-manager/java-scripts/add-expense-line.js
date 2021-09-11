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
})