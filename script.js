/* =====================================================
   TGM PORTFOLIO - SHARED SCRIPT (used by every page)
   ===================================================== */

// Mobile menu (hamburger)
const menuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

function setMenu(open) {
    navLinks.classList.toggle('active', open);
    menuBtn.setAttribute('aria-expanded', String(open));
}
menuBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('active')));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Nav shadow after scrolling
const navbar = document.getElementById('navbar');
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
window.addEventListener('scroll', onScroll);
onScroll();

// Fade-in on scroll
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// Hero "scroll" cue (home page only)
const cue = document.querySelector('.scroll-cue');
if (cue) {
    cue.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
