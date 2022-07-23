const container = document.querySelector('body');
const plus = document.querySelector('.plus');
let openNav = document.querySelector(".hamburger");
let closeNav = document.getElementById("mySideNav");
let mySideNav = document.getElementById("mySidenav");
let openBtn = document.querySelector(".openbtn");
let closeBtn = document.querySelector(".navbar2");
let overlay = document.getElementById('overlay');
let num = document.querySelector('.num');
let minus = document.querySelector('.minus');
let a = 0;

plus.addEventListener("click", () => {
  a++;
  // a =  (a < 10) ? "0" + a : a;
  num.innerText = a;
  
});

minus.addEventListener("click", () => {
    if(a > 0) {
      a--;
      // a = (a < 10) ? "0" + a : a;
      num.innerText = a;
      console.log(a)
    }
});



function myFunction() {
  if (openNav.style.display === "block") {
    openNav.style.display = "none";
  } else {
    openNav.style.display = "block"
  }
}

openNav.addEventListener('click', () => {
  if (mySideNav.style.display === "block") {
    mySideNav.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
    overlay.style.display = "none";
  } else {
    mySideNav.style.display = "block";
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    overlay.style.display = "block";
    
  }
  console.log('Clicked hamburger');
})



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  let i = 1;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

