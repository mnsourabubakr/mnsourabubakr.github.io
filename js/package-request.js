// BIM Sprint — Package request workflow
(() => {
  const packageButtons = [...document.querySelectorAll('.package-request-btn')];
  const requestTriggers = [...document.querySelectorAll('[data-open-request-list]')];
  const requestCounts = [...document.querySelectorAll('[data-request-count]')];
  const requestClear = document.getElementById('request-list-clear');
  const store = window.BimSprintPackageSelection;
  if (!store || !requestTriggers.length) return;

  document.body.insertAdjacentHTML('beforeend', `
    <div class="request-modal" hidden id="package-request-modal">
      <button aria-label="Close request form" class="request-modal-backdrop" data-close-request tabindex="-1" type="button"></button>
      <section aria-labelledby="request-modal-title" aria-modal="true" class="request-dialog" role="dialog">
        <header class="request-dialog-header">
          <div><span class="request-dialog-kicker">Package Request</span><h2 id="request-modal-title">Review Your Request</h2></div>
          <button aria-label="Close request form" class="request-modal-close" data-close-request type="button">×</button>
        </header>
        <form id="package-request-form" novalidate>
          <div class="request-form-section">
            <div class="request-form-heading"><h3>Selected Packages</h3><span id="selected-package-count">0 selected</span></div>
            <div class="selected-package-list" id="selected-package-list"></div>
          </div>
          <div class="request-fields-grid">
            <label class="request-field"><span>Full Name</span><input autocomplete="name" id="request-name" name="name" required type="text"></label>
            <label class="request-field"><span>Email Address</span><input autocomplete="email" id="request-email" name="email" required type="email"></label>
            <label class="request-field"><span>Phone / WhatsApp</span><input autocomplete="tel" id="request-phone" name="phone" pattern="[+0-9\\(\\) .\\-]{7,}" required type="tel"></label>
            <fieldset class="request-field request-customer-type">
              <legend>Customer Type</legend>
              <label><input checked name="customerType" type="radio" value="Individual"> Individual</label>
              <label><input name="customerType" type="radio" value="Company"> Company</label>
            </fieldset>
            <label class="request-field request-company-field" hidden><span>Company Name</span><input autocomplete="organization" id="request-company" name="company" type="text"></label>
          </div>
          <p aria-live="polite" class="request-form-status" id="request-form-status"></p>
          <button class="request-submit-btn" type="submit">Prepare WhatsApp Request <span>→</span></button>
        </form>
        <div class="request-ready" hidden id="request-ready">
          <div class="request-ready-icon">✓</div>
          <h3 tabindex="-1">Your WhatsApp request is ready</h3>
          <p>Open WhatsApp below, review the prepared message, then press Send.</p>
          <div class="request-ready-actions"><a class="request-action-whatsapp" href="#" id="request-whatsapp-action" rel="noopener noreferrer" target="_blank">Open WhatsApp</a></div>
          <button class="request-edit-btn" id="request-edit-btn" type="button">← Edit Request</button>
        </div>
      </section>
    </div>`);

  const modal = document.getElementById('package-request-modal');
  const dialog = modal?.querySelector('.request-dialog');
  const form = document.getElementById('package-request-form');
  const selectedList = document.getElementById('selected-package-list');
  const selectedCount = document.getElementById('selected-package-count');
  const formStatus = document.getElementById('request-form-status');
  const companyField = modal?.querySelector('.request-company-field');
  const companyInput = document.getElementById('request-company');
  const readyPanel = document.getElementById('request-ready');
  const whatsappAction = document.getElementById('request-whatsapp-action');
  const editButton = document.getElementById('request-edit-btn');
  const packageChoiceNotice = document.getElementById('package-choice-notice');
  const firstPackage = document.getElementById('pkg01');

  const OWNER_WHATSAPP = '201068970898';
  let selectedPackages = store.read();
  let lastFocusedElement = null;
  let noticeHideTimer = null;
  let noticeScrollTimer = null;

  function selectedPackageNames() {
    return [...selectedPackages].map(store.packageName);
  }

  function updatePackageButtons() {
    packageButtons.forEach(button => {
      const isSelected = selectedPackages.has(button.dataset.packageId);
      button.classList.toggle('is-added', isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
      button.querySelector('span').textContent = isSelected ? 'Added to Request' : 'Add to Request';
      button.querySelector('path').setAttribute('d', isSelected ? 'm5 12 4 4L19 6' : 'M12 5v14M5 12h14');
    });
  }

  function renderSelection() {
    const names = selectedPackageNames();
    requestCounts.forEach(count => { count.textContent = String(names.length); });
    requestTriggers.forEach(trigger => trigger.classList.toggle('has-items', names.length > 0));
    if (requestClear) requestClear.disabled = names.length === 0;
    selectedCount.textContent = `${names.length} selected`;
    selectedList.replaceChildren();

    if (!names.length) {
      const empty = document.createElement('p');
      empty.className = 'selected-package-empty';
      empty.textContent = firstPackage
        ? 'No packages selected yet. Close this window and choose Add to Request beside a package.'
        : 'No packages selected yet. Close this window and choose Request Package.';
      selectedList.append(empty);
      return;
    }

    selectedPackages.forEach(id => {
      const item = document.createElement('div');
      item.className = 'selected-package-item';
      const name = store.packageName(id);
      item.innerHTML = `<span>${name}</span><button type="button" data-remove-package="${id}" aria-label="Remove ${name}">Remove</button>`;
      selectedList.append(item);
    });
  }

  function updateSelection() {
    if (!store.write(selectedPackages)) refreshSelection();
  }

  function refreshSelection() {
    updatePackageButtons();
    renderSelection();
  }

  function openModal(trigger = document.activeElement) {
    lastFocusedElement = trigger;
    form.hidden = false;
    readyPanel.hidden = true;
    formStatus.textContent = '';
    renderSelection();
    modal.hidden = false;
    document.body.classList.add('request-modal-open');
    setTimeout(() => modal.querySelector('.request-modal-close')?.focus(), 0);
  }

  function promptForPackage() {
    if (!packageChoiceNotice || !firstPackage) return;
    clearTimeout(noticeHideTimer);
    clearTimeout(noticeScrollTimer);
    packageChoiceNotice.hidden = false;
    requestAnimationFrame(() => packageChoiceNotice.classList.add('is-visible'));

    noticeHideTimer = setTimeout(() => {
      packageChoiceNotice.classList.remove('is-visible');
      noticeScrollTimer = setTimeout(() => {
        packageChoiceNotice.hidden = true;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        firstPackage.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      }, 220);
    }, 1800);
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('request-modal-open');
    if (lastFocusedElement?.hidden) {
      const rail = lastFocusedElement.closest('[data-tool-package]');
      const fallback = rail?.querySelector('.tool-package-picker, .tool-package-action');
      fallback?.focus({ preventScroll: true });
    } else {
      lastFocusedElement?.focus({ preventScroll: true });
    }
  }

  function syncCompanyField() {
    const isCompany = form.elements.customerType.value === 'Company';
    companyField.hidden = !isCompany;
    companyInput.required = isCompany;
    if (!isCompany) companyInput.value = '';
  }

  packageButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.packageId;
      selectedPackages = store.read(selectedPackages);
      if (selectedPackages.has(id)) selectedPackages.delete(id);
      else selectedPackages.add(id);
      updateSelection();
    });
  });

  requestTriggers.forEach(trigger => trigger.addEventListener('click', () => {
    if (!selectedPackages.size) {
      promptForPackage();
      return;
    }
    openModal(trigger);
  }));
  requestClear?.addEventListener('click', () => {
    selectedPackages.clear();
    updateSelection();
  });
  modal.querySelectorAll('[data-close-request]').forEach(button => button.addEventListener('click', closeModal));
  modal.querySelectorAll('input[name="customerType"]').forEach(input => input.addEventListener('change', syncCompanyField));

  selectedList.addEventListener('click', event => {
    const removeButton = event.target.closest('[data-remove-package]');
    if (!removeButton) return;
    selectedPackages.delete(removeButton.dataset.removePackage);
    updateSelection();
    (selectedList.querySelector('[data-remove-package]') || modal.querySelector('.request-modal-close')).focus();
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    formStatus.textContent = '';

    if (!selectedPackages.size) {
      formStatus.textContent = 'Select at least one package before preparing the request.';
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      formStatus.textContent = 'Please complete the required customer details.';
      return;
    }

    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    const email = String(data.get('email')).trim();
    const phone = String(data.get('phone')).trim();
    const customerType = String(data.get('customerType'));
    const company = String(data.get('company') || '').trim();
    const packages = selectedPackageNames();
    const message = [
      'BIM Sprint Package Request',
      '',
      `Full Name: ${name}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Customer Type: ${customerType}`,
      ...(company ? [`Company Name: ${company}`] : []),
      '',
      'Selected Packages:',
      ...packages.map((packageName, index) => `${index + 1}. ${packageName}`),
      '',
      'Please contact me with package details, pricing, and the next steps.'
    ].join('\n');

    whatsappAction.href = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
    form.hidden = true;
    readyPanel.hidden = false;
    readyPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    readyPanel.querySelector('h3').focus();
  });

  editButton.addEventListener('click', () => {
    readyPanel.hidden = true;
    form.hidden = false;
    form.querySelector('input')?.focus();
  });

  document.addEventListener('keydown', event => {
    if (modal.hidden) return;
    if (event.key === 'Escape') {
      closeModal();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = [...dialog.querySelectorAll('button:not([hidden]),a:not([hidden]),input:not([hidden])')]
      .filter(element => !element.disabled && element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  syncCompanyField();
  refreshSelection();
  if (location.hash === '#request-list-trigger' && selectedPackages.size) openModal();
  store.onChange(() => {
    selectedPackages = store.read(selectedPackages);
    refreshSelection();
  });
})();
