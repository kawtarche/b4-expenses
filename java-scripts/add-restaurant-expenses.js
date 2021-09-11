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

document.addEventListener('DOMContentLoaded', function () {
    const restaurantInput = document.getElementById('restaurant');

    M.Autocomplete.init(restaurantInput, options);
})