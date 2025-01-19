const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}




const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const propertyCards = document.querySelector('.property-cards');
let isDown = false;
let startX;
let scrollLeft;

propertyCards.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - propertyCards.offsetLeft;
    scrollLeft = propertyCards.scrollLeft;
});

propertyCards.addEventListener('mouseleave', () => {
    isDown = false;
});

propertyCards.addEventListener('mouseup', () => {
    isDown = false;
});

propertyCards.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - propertyCards.offsetLeft;
    const walk = (x - startX) * 2; // Percepatan geseran
    propertyCards.scrollLeft = scrollLeft - walk;
});

// Untuk perangkat sentuh (mobile)
let touchStartX;
let touchScrollLeft;

propertyCards.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX - propertyCards.offsetLeft;
    touchScrollLeft = propertyCards.scrollLeft;
});

propertyCards.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touchMoveX = e.touches[0].pageX - propertyCards.offsetLeft;
    const walk = (touchMoveX - touchStartX) * 2; // Percepatan geseran
    propertyCards.scrollLeft = touchScrollLeft - walk;
});