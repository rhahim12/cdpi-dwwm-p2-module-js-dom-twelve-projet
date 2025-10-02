/**
 * let
 * element.getAttribute()
 * element.setAttribute()
 * ++ operator
 * operateur ternaire
 */

// 1. Je recupere toutes les petites vignettes
const vignettes = document.querySelectorAll(".small");
// 2. Je recupere la grande photo
const fullImg = document.getElementById("full");

// 3. Je recupere le bouton AJOUTER
const btnAdd = document.querySelector(".btn-add");

// 4. Je recupere la balise vide de message d'ajout du panier
const panierMsg = document.querySelector(".panier-msg");
// 5. Je crée une variable qui contient le nombre de produits ajoutées ua panier
let panier = 0;


const p_elem = document.createElement("p")
panierMsg.appendChild(p_elem)

btnAdd.addEventListener("click",function(){
    // panierMsg.innerHTML("test")
    panier++;
    p_elem.innerText = "Vous avez " +panier+ " produit dans votre panier."

    // panierMsg.inneText = panier;
    


    console.log(panier)
})







vignettes.forEach(function(vignette){ 

    vignette.addEventListener("click", function(){
        const urlVignette = vignette.getAttribute("src");
        fullImg.setAttribute("src", urlVignette)
        console.log(url)
        // console.log(test)
    });
});
    // ...
