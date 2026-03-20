/* ============================================
   LA CASA DE LOS PASTELES — main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── BURGER MENU ── */
  const burger     = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close menu when a mobile nav link is clicked
  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  /* ── NAV SCROLL SHADOW ── */
  window.addEventListener('scroll', () => {
    document.getElementById('navbar')
      .classList.toggle('scrolled', window.scrollY > 30);
  });

  /* ── SCROLL REVEAL (IntersectionObserver) ── */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(
    '.reveal, .esp-card, .showcase-card, .resena-card'
  ).forEach(el => observer.observe(el));

});
