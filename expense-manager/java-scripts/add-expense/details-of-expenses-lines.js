import {navigate} from "../util.js";

// afficher le message ' Hello, ma page web s'est télechargée'
document.addEventListener('DOMContentLoaded', () => {
    const validateBtna = document.getElementById('validate-btn');
    const newLineBtna = document.getElementById('new-line-btn');
    const closeIconi = document.getElementById('close-icon');
    const chevronLeftIconi = document.getElementById('chevron-left-icon');

    validateBtna.addEventListener('click', () => {
        navigate("/expense-manager/add-expense/sucess.html");
    })
    newLineBtna.addEventListener('click', () => {
        navigate("/expense-manager/add-expense/add-expense-line.html");
    })
    closeIconi.addEventListener('click', () => {
        navigate("/expense-manager/acceuil/home.html");
    })
    chevronLeftIconi.addEventListener('click', () => {
        navigate("/expense-manager/add-expense/add-expense-list.html");
    })

});


