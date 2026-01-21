// AOS init
AOS.init({duration:1000, once:true});

// Navbar toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
