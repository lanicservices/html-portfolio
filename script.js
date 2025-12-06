// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navMenu && navToggle) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Contact form validation and fake submit
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const required = ['name', 'email', 'service', 'message'];
    for (const field of required) {
      if (!data.get(field)) {
        formNote.textContent = 'Please complete all required fields.';
        return;
      }
    }
    // Replace this with your backend endpoint
    formNote.textContent = 'Thanks! Your message has been sent. We will get back to you shortly.';
    form.reset();
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
