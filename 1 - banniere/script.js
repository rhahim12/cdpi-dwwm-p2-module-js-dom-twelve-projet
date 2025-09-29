/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"
const btn_Accept = document.querySelector(".cookies-btn")
const btn_elem = btn_Accept.querySelector(".btn.btn-accept")
// 2. Je recupere la banniere de cookies
const banniere = document.querySelector(".cookies");
console.log(banniere)

// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"
function test(){
    console.log("vrai")
    // On ajoute la classe font-6
banniere.classList.add(style = "opacity: 0");
    // btn_Accept.classList.toggle("test");
    // console.log(btn_Accept.getAttribute("classe"));
    
    // btn_Accept.classList.toggle("test");
    // console.log(btn_Accept.getAttribute("classe"));

};


function hello(){
    console.log("hello guys")

}
