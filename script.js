// Navigation hamburger menu
const menuIcon = document.getElementById('menu-icon');
const navUl = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  navUl.classList.toggle('open');
});

// Close menu when link is clicked (mobile)
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('open');
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Contact form submission (mock, no backend)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  contactForm.reset();
});