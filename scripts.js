let openNav = document.querySelector(".hamburger");
let closeNav = document.getElementById("mySideNav");
let mySideNav = document.getElementById("mySidenav");
let openBtn = document.querySelector(".openbtn");
let closeBtn = document.querySelector(".navbar2");
let overlay = document.getElementById('overlay');
const container = document.querySelector('body');
let totalCount = document.getElementById('decrement-btn');
let incrementCount = document.getElementById('increment-btn')
let count = 0
let counter = 0;
let decrementCount = 0;

totalCount.innerHTML = count;
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
}
const handleDecrement = () => {
  count--;
  totalCount.innerHTML = count;
  console.log(count)
};

function handleIncrement() {
  incrementCount.addEventListener("click", handleIncrement);
  decrementCount.addEventListener("click", handleDecrement);
}


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

