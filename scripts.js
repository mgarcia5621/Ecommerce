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
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let modal = document.getElementById("myModal");

let span = document.getElementsByClassName("close")[0];
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


img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
span.onclick = function() {
  modal.style.display = "none";
}