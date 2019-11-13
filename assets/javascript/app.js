
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const box = document.querySelector('.box');

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
      console.log('animate nav-links');
      if (link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle('toggle');

      // Search bar disappearing when burger is toggled
    if (box.style.display === 'none') {
      console.log ('checking tb');
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
};

$(document).ready(() => {
  navSlide();
});