
// Eldu's Closet V2 Script


// Mobile Menu

function toggleMenu(){

const nav = document.getElementById("nav");

nav.classList.toggle("active");

}





// Close menu after clicking links

document.querySelectorAll("nav a").forEach(link=>{


link.addEventListener("click",()=>{

document.getElementById("nav")
.classList.remove("active");

});


});








// Scroll Reveal Animation


const items = document.querySelectorAll(
".category, .products div, .features div, .steps p"
);



items.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="all .8s ease";

});






function revealItems(){


items.forEach(item=>{


const position =
item.getBoundingClientRect().top;


if(position < window.innerHeight - 80){


item.style.opacity="1";

item.style.transform="translateY(0)";


}


});


}




window.addEventListener(
"scroll",
revealItems
);



revealItems();








// Update Footer Year

const year =
new Date().getFullYear();


const footer =
document.querySelector("footer p:last-child");



if(footer){

footer.textContent =
"© " + year + " Eldu's Closet";

}
