// Eldu's Closet V4 Script


// Mobile Navigation

function toggleMenu(){

const nav = document.getElementById("nav");

nav.classList.toggle("active");

}




// Close menu after selecting a page

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

const nav = document.getElementById("nav");

nav.classList.remove("active");

});

});








// Scroll Animation

const elements = document.querySelectorAll(
".category, .product-card, .features div, .steps div, .community"
);



elements.forEach(element=>{

element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="all .8s ease";

});





function showElements(){


elements.forEach(element=>{


const position =
element.getBoundingClientRect().top;


if(position < window.innerHeight - 80){


element.style.opacity="1";

element.style.transform="translateY(0)";


}


});


}



window.addEventListener(
"scroll",
showElements
);


showElements();








// Update copyright year

const year = new Date().getFullYear();


const footer =
document.querySelector("footer p:last-child");


if(footer){

footer.textContent =
"© " + year + " Eldu's Closet";

}
