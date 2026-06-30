// BIM Sprint — Main JS
document.addEventListener('DOMContentLoaded', () => {
  // Nav scroll effect
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // Mobile menu
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (mobileMenu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      });
    });
  }

  // Accordion
  document.querySelectorAll('.acc-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = header.classList.contains('open');
      // Close all
      document.querySelectorAll('.acc-header').forEach(h => {
        h.classList.remove('open');
        h.nextElementSibling.classList.remove('open');
      });
      // Toggle current
      if (!isOpen) {
        header.classList.add('open');
        body.classList.add('open');
      }
    });
  });

  // Auto-open accordion from URL hash
  const hash = window.location.hash;
  if (hash && hash.startsWith('#pkg')) {
    const target = document.querySelector(hash);
    if (target) {
      const header = target.querySelector('.acc-header') || target.closest('.acc-header');
      if (header) {
        header.classList.add('open');
        header.nextElementSibling.classList.add('open');
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
      }
    }
  }

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.why-card, .about-card, .tool-preview-card, .acc-header, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // Add animate-in class styles
  const style = document.createElement('style');
  style.textContent = '.animate-in { opacity: 1 !important; transform: none !important; }';
  document.head.appendChild(style);
});
