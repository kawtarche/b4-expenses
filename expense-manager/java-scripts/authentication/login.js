// Ajoute à l'objet document un écouteur sur l'evenemtn DOMContentLoaded.
// quand l'evenement DOMContentLoaded sera lancé, JS executera la fonction login
// DOMContentLoaded = evenement lancé lorque le DOM à été chargé
import {navigate} from "./util.js";

//document.addEventListener('DOMContentLoaded',login());

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById('login-button');
    const newAccountButton = document.getElementById('new-account-button');

    loginButton.addEventListener('click', () => {
        navigate("/expense-manager/acceuil/home.html");
    })
    newAccountButton.addEventListener('click', () => {
        navigate("/expense-manager/add-expense/add-expense.html");
    })
});


/**
 *  Définir la classe Login
 *   = définir les objet de type Login
 */
//class Login {
  //  username;
 //   password;

  //  connect() {
  //      console.log(this);
  //  }

//}

