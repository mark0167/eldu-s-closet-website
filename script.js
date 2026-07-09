
// Eldu's Closet V3 Script


// Mobile Menu

function toggleMenu(){

const nav = document.getElementById("nav");

nav.classList.toggle("active");

}




// Close mobile menu after clicking

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

document.getElementById("nav")
.classList.remove("active");

});

});







// Scroll Reveal Animation

const revealItems = document.querySelectorAll(
".category, .product-card, .features div, .steps div, .gallery img"
);



revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="all .8s ease";

});





function reveal(){


revealItems.forEach(item=>{


const top =
item.getBoundingClientRect().top;


if(top < window.innerHeight - 80){


item.style.opacity="1";

item.style.transform="translateY(0)";


}


});


}




window.addEventListener(
"scroll",
reveal
);



reveal();








// Update Footer Year

const year =
new Date().getFullYear();



const footer =
document.querySelector("footer p:last-child");



if(footer){

footer.textContent =
"© " + year + " Eldu's Closet";

}
