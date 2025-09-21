/**
 * element.parentElement
 * element.remove()
 */

// 1. Je recupere le forumlaire de saisi d'un nouvelle tache
const form = document.querySelector("#form");
// 2. Je recupere le conteneur des taches
const listTasks = document.querySelector(".list-tasks");

// 3. Lorsque le formulaire est soumis
form.addEventListener("submit",function(e){
    
    // ...
    
    
    // Je reset le contenu du formulaire pour eviter que le texte reste une fois la tache crée (ergonomique)
    form.reset();
});

