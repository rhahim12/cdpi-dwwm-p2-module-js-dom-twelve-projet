/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley
const smiley= document.querySelector("i")


// 2. Je recupere le bouton ABONNER
const abonner = document.querySelector(".btn-sub")
console.log(abonner)
// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur
abonner.classList.add("Abonné")
// 4. J'ecoute le clique sur l'icone smiley
smiley.addEventListener('click', () => {
    smiley.classList.toggle('is-visble')
})
function smile(){
    smiley.classList.remove("face-meh")
    smiley.classList.add("fa-smile-wink happy");
 
}



// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ
abonner.addEventListener('click', () => {
    // abonner.classList.toggle('is-visible1')

});



function add(){
    // On inverse la présence de la classe text-content
    
    // abonner.classList.add("olalala")
abonner.innerText("abonné-vous")
    abonner.classList.toggle(add_Text);
    // abonner.innerText("abonné vous")               
    // console.log(abonner.getAttribute("class"));     // => "font-6"// On inverse la présence de la classe text-content
    
    // abonner.classList.toggle("text-content");               
    // console.log(abonner.getAttribute("class"));     // => "font-6 text-content"
    
}
