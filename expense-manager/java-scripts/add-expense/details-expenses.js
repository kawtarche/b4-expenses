import {navigate} from "../util.js";

document.addEventListener('DOMContentLoaded', () => {
    const chevronIconSpan = document.getElementById("chevron-icon");
    document.addEventListener('click', () => {
        navigate("/expense-manager/acceuil/expenses-lines.html");
    })
})
