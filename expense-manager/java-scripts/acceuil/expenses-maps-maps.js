import {navigate} from "../util.js";

document.addEventListener('DOMContentLoaded', () => {
    const chevronIconSpan = document.getElementById("chevron-icon");
    chevronIconSpan.addEventListener('click', () => {
        navigate('/expense-manager/acceuil/home.html');
    })
})

