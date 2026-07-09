
// Eldu's Closet Website Script


// Mobile Menu

function toggleMenu(){

const nav = document.getElementById("nav");

nav.classList.toggle("active");

}




// Close menu after clicking a link

document.querySelectorAll("nav a").forEach(link=>{


link.addEventListener("click",()=>{


document.getElementById("nav")
.classList.remove("active");


});


});







// Scroll Animation

const animatedElements = document.querySelectorAll(
"section, .card, .steps div, .features div"
);



animatedElements.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="all .8s ease";

});





function reveal(){


animatedElements.forEach(item=>{


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
reveal
);


reveal();







// Current Year Footer

const year =
new Date().getFullYear();


const footerText =
document.querySelector("footer p:last-child");


if(footerText){

footerText.textContent =
"© " + year + " Eldu's Closet";

}
