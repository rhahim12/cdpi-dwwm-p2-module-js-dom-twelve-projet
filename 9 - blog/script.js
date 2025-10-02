/**
 * Template string `${}`
 * innerHTML ou template
 * += operator
 */

// 1. Je recupere le conteneur de publications
const postsContainer = document.querySelector(".posts");

// 2. Voici ma base de données factise 
const posts =
    [
        {
            titre: "SEO, les bonnes pratiques",
            hashtag: "#SEO",
            link: "#",
            extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
        },
        {
            titre: "Bien, les bonnes pratiques",
            hashtag: "#JS",
            link: "#",
            extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
        },
        {
            titre: "Content, les bonnes pratiques",
            hashtag: "#PHP",
            link: "#",
            extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
        }
    ];

// 3. Je parcours la bdd
posts.forEach(function (post) {
    // 4. Je créer un nouveau post dans le conteneur de post pour chaque post de la BDD
    const titre = document.createElement("H1");

    titre.innerText = post.titre
    titre.style.color = "orange"
    titre.style.fontSize = "40px"

    postsContainer.appendChild(titre)

    const para_elem = document.createElement("p")
    para_elem.innerText = post.extrait
    para_elem.style.fontSize = "20px"
    para_elem.style.color = "black"
    postsContainer.appendChild(para_elem)
    // 
    // 

    const hashtag = document.createElement("div")
    hashtag.classList.add("post-hastag")
    // para = document.innerText("testi")
    // hashtag.appendChild(para)
    postsContainer.appendChild(hashtag)

    console.log(postsContainer)
    // 5. Je l'ajoute dans le conteneur de publication


});