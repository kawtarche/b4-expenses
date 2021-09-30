/**
 *  fonctions utilitaires
 */

/**
 * fonction de navigation
 * @input: destination
 * @output: void
 * @action: 
 *  - rediriger vers la page avec le lien en paramètre.
 * exemple: cet appel va reriger l'utilisateur vers l'écran /expense-manager/acceuil/home.html
 *  navigate('/expense-manager/acceuil/home.html');
 */

export function navigate(link) {
    // instructions pour la navigation
    console.log('navigate to: ' + link);    
    window.location.href = link;
}

