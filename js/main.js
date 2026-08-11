// BIM Sprint — Main JS

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  if (nav) {
    const updateNav = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
  }

  // Accessible mobile menu — one event handler only.
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = () => {
    if (!hamburger || !mobileMenu) return;
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
  };
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = !mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      hamburger.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });
    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', event => {
      if (!mobileMenu.classList.contains('open')) return;
      if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) closeMenu();
    });
  }

  // Package accordions.
  const headers = [...document.querySelectorAll('.acc-header')];
  const closeAllAccordions = () => headers.forEach(header => {
    header.classList.remove('open');
    header.setAttribute('aria-expanded', 'false');
    const body = header.nextElementSibling;
    if (body) body.classList.remove('open');
  });
  headers.forEach((header, index) => {
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'false');
    const body = header.nextElementSibling;
    if (body) {
      if (!body.id) body.id = `package-panel-${index + 1}`;
      header.setAttribute('aria-controls', body.id);
    }
    const toggle = () => {
      const wasOpen = header.classList.contains('open');
      closeAllAccordions();
      if (!wasOpen) {
        header.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        if (body) body.classList.add('open');
      }
    };
    header.addEventListener('click', toggle);
    header.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    });
  });

  // Open a package linked from the Ready-to-Use service page or home page.
  const hash = window.location.hash;
  if (hash && /^#pkg0[1-4]$/.test(hash)) {
    const target = document.querySelector(hash);
    const header = target?.querySelector('.acc-header');
    const body = header?.nextElementSibling;
    if (header && body) {
      closeAllAccordions();
      header.classList.add('open');
      header.setAttribute('aria-expanded', 'true');
      body.classList.add('open');
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    }
  }

  // Current year in all footers.
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
