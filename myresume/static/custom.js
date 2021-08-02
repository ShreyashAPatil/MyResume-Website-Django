
const colors = document.getElementsByClassName('colors');

let i;
for (i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', changecolor)
}

function changecolor() {
    let color = this.getAttribute('data-color');
    document.documentElement.style.setProperty('--color', color);
}




//NAVIGATION
var count = 0;
function opennav() {
    if (count == 0) {
        document.getElementById("nav").style.height = "260px";
        document.getElementById("icon").style.color = "#3399ff";
        document.getElementById("nav").style.borderRadius = "0px";
        count++;
    } else {
        document.getElementById("nav").style.height = "45px";
        document.getElementById("icon").style.color = "#000";
        document.getElementById("nav").style.borderRadius = "40px";
        count = 0;
    }
}





//MY WORKS SLIDER

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}










