// Ajoute à l'objet document un écouteur sur l'evenemtn DOMContentLoaded.
// quand l'evenement DOMContentLoaded sera lancé, JS executera la fonction login
// DOMContentLoaded = evenement lancé lorque le DOM à été chargé

// methode 1
document.addEventListener('DOMContentLoaded', login);

function login() {


}


// methode 2
document.addEventListener('DOMContentLoaded', () => {

    const identicateurInput = document.getElementById('login-input');
    const passwardInput = document.getElementById('password-input');
    const authentificationBurron = document.getElementById('login-button');

    authentificationBurron.addEventListener('click', () => {
        const a = new Login();
        a.username = identicateurInput.value;
        a.password = passwardInput.value;
        a.connect();
        window.location = 'https://apps.boudfor.fr/b4-expenses/expense-manager/acceuil/home.html';
    })


});

/**
 *  Définir la classe Login
 *   = définir les objet de type Login
 */
class Login {
    username;
    password;

    connect() {
        console.log(this);
    }

}

