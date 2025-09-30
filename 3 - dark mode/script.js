/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/
const smiley = document.querySelector("i")
console.log(smiley)

const html = document.querySelector("html")
console.log(html)

smiley.addEventListener('click', () => {

    // smiley.classList.toggle('fa-moon')
    // smiley.classList.toggle('darkmode')
    // console.log("reussi")
});

div_elem = document.querySelector(".switch")
console.log(div_elem)

const class_all_arr = document.querySelectorAll("*")
// console.log(class_all)

class_all_arr.forEach(class_obj => {
    // console.log(class_obj)
    console.log(class_all_arr[13])
    
   


    div_elem.addEventListener('click', () => {
        class_obj.classList.toggle("darkmode")  
        
    });
})

div_elem.addEventListener('click', () =>{
    smiley.classList.toggle('fa-moon')
    

})