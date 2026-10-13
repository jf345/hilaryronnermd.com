// Header scroll effect
const header = document.querySelector('.site-header');
if (header) window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30));

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');
if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Contact form handler
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const success = document.querySelector('.form-success');
    btn.disabled = true; btn.textContent = 'Sending…';
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/mjgjwann', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.reset();
        if (success) success.style.display = 'block';
      } else {
        btn.textContent = 'Error — please call us';
      }
    } catch(err) {
      btn.textContent = 'Error — please call us';
    }
    btn.disabled = false;
    if (btn.textContent === 'Sending…') btn.textContent = 'Send Message';
  });
}
