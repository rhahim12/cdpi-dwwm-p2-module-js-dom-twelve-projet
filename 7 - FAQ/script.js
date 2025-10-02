/**
 * firstChild
 * lastChild
 * childNodes
 * nextSibiling MAIS preferez nextElementSibiling pour eviter de selectionner les passages à la ligne
 * previousSibiling MAIS preferez previousElementSibiling  pour eviter de selectionner les passages à la ligne
 * 
 */

// 1. Je recupere toutes les questions
const questions = document.querySelectorAll(".question");

const reponses = document.querySelectorAll(".reponse")
// 2. Je parcours toutes les questions
questions.forEach(function(question){
    // 3. Lors du click sur la question
    question.addEventListener("click",function(){

        // 4. Je recupere la reponse correspondante et le chevron correspondante
        question.nextElementSibling.classList.toggle("show-reponse")
        

        console.log(reponse[1])
        // ..
    });
});



const conteneur = document.querySelector(".reponse");

// Récupérer le premier élément enfant
const premier = conteneur.firstElementChild;
// Récupérer le dernier élément enfant
const dernier = conteneur.lastElementChild;

// Récupérer l'élément suivant au premier
const deuxieme = premier.nextElementSibling;
// Récupérer l'élément précédent au dernier
const troisieme = dernier.previousElementSibling;


questions[1].addEventListener("click",function(){
    dernier.classList.toggle("show-reponse")
    // console.log(premier)
})