/**
 * document.createElement()
 * element.classList.add()
 * element.innerHTML
 * elemParent.appendChild(elemEnfant)
 * element.remove()
 * setTimeout()
 */

// 1. Je recupere le bouton
const btn = document.querySelector("button");
// 2. Je recupere le conteneur de toasts
const ctnToasts = document.querySelector(".container-toasts");
btn.addEventListener("click", function () {
    
    
    
    
    const nouvelle_elem = document.createElement("div");
    ctnToasts.appendChild(nouvelle_elem);
    
    nouvelle_elem.classList.add("toast")
    const nouvelleBalise_elem = document.createElement("p");
    nouvelleBalise_elem.innerText = "Votre fichier est enregistrer !"
    nouvelle_elem.appendChild(nouvelleBalise_elem);
    
    const test = setTimeout(greting, 1000);

    function greting (){
        console.log("salut")
        toast.remove
    }



    


    
    
    
    
    
    
    // console.log(phrase)
    
});
