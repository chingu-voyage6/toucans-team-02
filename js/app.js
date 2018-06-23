// Navigation toggle
let mainNav = document.getElementById("main-nav");
let navbarToggle = document.querySelector(".navbar-toggle");

navbarToggle.addEventListener("click", function() {
  if (this.classList.contains("active")) {
    mainNav.style.display = "none";
    this.classList.remove("active");
  } else {
    mainNav.style.display = "flex";
    this.classList.add("active");
  }
});
//planets slideshow
var slideIndex = 0,slides,dots,i;
displaySlides();

function displaySlides() {
    slides= document.getElementsByClassName("planet");
    dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    } //loop
        
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(displaySlides, 4000);
}
function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}//return to first planet 
    else if(slideIndex<1){slideIndex = slides.length}//go to last planet
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
}