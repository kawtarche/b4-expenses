import {navigate} from "../util.js";

document.addEventListener('DOMContentLoaded', () => {

const closeIconi = document.getElementById('close-icon');

closeIconi.addEventListener('click', () => {

 navigate("/expense-manager/acceuil/home.html");

})
})