let openNav = document.querySelector(".hamburger")
let closeNav = document.getElementById("mySideNav")
let mySideNav = document.getElementById("mySidenav")
let openBtn = document.querySelector(".openbtn")
let closeBtn = document.querySelector(".navbar2")
let overlay = document.getElementById('overlay')
let button = document.getElementById('btn-add')
const container = document.querySelector('body')
count = 0;

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

// button.onclick = function() {
//   count+= 1;
//   button.innerHTMl = "0" + count;
// }