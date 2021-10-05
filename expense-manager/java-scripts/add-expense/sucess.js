import {navigate} from "../util.js";

document.addEventListener('DOMContentLoaded', () => {

    const homeIcona = document.getElementById('home-icon');

    homeIcona.addEventListener('click', () => {
        navigate('/expense-manager/acceuil/home.html');
    })

})

