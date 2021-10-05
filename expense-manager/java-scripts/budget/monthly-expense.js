import {navigate} from "../util.js";

document.addEventListener('DOMContentLoaded', ()=> {
  const close = document.getElementById('close');
 close.addEventListener('click', () => {
    navigate('/expense-manager/acceuil/home.html');
 })
})
