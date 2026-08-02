(() => {
  'use strict';

  const menuButton = document.querySelector('[data-menu-button]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  if (menuButton && mobileNav) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
    };
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      mobileNav.classList.toggle('is-open', !open);
    });
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const filterRoot = document.querySelector('[data-tool-filters]');
  const cards = [...document.querySelectorAll('[data-tool-card]')];
  if (filterRoot && cards.length) {
    const search = filterRoot.querySelector('[data-tool-search]');
    const selects = [...filterRoot.querySelectorAll('[data-filter]')];
    const reset = filterRoot.querySelector('[data-filter-reset]');
    const count = document.querySelector('[data-tool-count]');
    const empty = document.querySelector('[data-empty-state]');

    const applyFilters = () => {
      const query = (search.value || '').trim().toLowerCase();
      const values = Object.fromEntries(selects.map(select => [select.dataset.filter, select.value]));
      let visible = 0;
      cards.forEach(card => {
        const matchesText = !query || card.dataset.search.includes(query);
        const matchesDiscipline = !values.discipline || card.dataset.discipline === values.discipline;
        const matchesCategory = !values.category || card.dataset.category === values.category;
        const matchesSuite = !values.suite || card.dataset.suite === values.suite;
        const show = matchesText && matchesDiscipline && matchesCategory && matchesSuite;
        card.hidden = !show;
        if (show) visible += 1;
      });
      if (count) count.textContent = String(visible);
      if (empty) empty.hidden = visible !== 0;
    };

    search.addEventListener('input', applyFilters);
    selects.forEach(select => select.addEventListener('change', applyFilters));
    reset.addEventListener('click', () => {
      search.value = '';
      selects.forEach(select => { select.value = ''; });
      applyFilters();
      search.focus();
    });
  }

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    const emailButton = form.querySelector('[data-send-email]');
    const whatsappButton = form.querySelector('[data-send-whatsapp]');
    const status = form.querySelector('[data-form-status]');
    const params = new URLSearchParams(window.location.search);
    const requestedTool = params.get('tool');
    const requestedService = params.get('service');
    const serviceField = form.elements.service;
    const detailsField = form.elements.details;

    if (requestedTool) {
      serviceField.value = 'Ready-to-Use Revit Add-in';
      detailsField.value = `I am interested in the ${requestedTool.replaceAll('-', ' ')} add-in.\n\nRevit version:\nNumber of users:\nWorkflow details:`;
    } else if (requestedService) {
      detailsField.value = `I want to discuss: ${requestedService.replaceAll('-', ' ')}.\n\nCurrent workflow:\nExpected result:\nRevit version / platform:\nTypical project scale:`;
    }

    const prepare = () => {
      if (!form.reportValidity()) return null;
      const data = new FormData(form);
      const lines = [
        `Name: ${data.get('name')}`,
        `Company: ${data.get('company') || 'Not provided'}`,
        `Email: ${data.get('email')}`,
        `Phone / WhatsApp: ${data.get('phone') || 'Not provided'}`,
        `Service: ${data.get('service')}`,
        `Revit version / platform: ${data.get('platform') || 'Not provided'}`,
        '',
        'Workflow and desired result:',
        data.get('details')
      ];
      return {
        subject: `BIM Sprint request — ${data.get('service')}`,
        body: lines.join('\n')
      };
    };

    emailButton.addEventListener('click', () => {
      const message = prepare();
      if (!message) return;
      status.textContent = 'Opening your email application with the prepared request…';
      window.location.href = `mailto:mnsourabubakr95@gmail.com?subject=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(message.body)}`;
    });

    whatsappButton.addEventListener('click', () => {
      const message = prepare();
      if (!message) return;
      status.textContent = 'Opening WhatsApp with the prepared request…';
      window.open(`https://wa.me/201068970898?text=${encodeURIComponent(message.subject + '\n\n' + message.body)}`, '_blank', 'noopener');
    });
  }
})();
