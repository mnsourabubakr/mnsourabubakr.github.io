// BIM Sprint — Package request workflow
(() => {
  const packageButtons = [...document.querySelectorAll('.package-request-btn')];
  const requestTrigger = document.getElementById('request-list-trigger');
  const requestCount = document.getElementById('request-count');
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

  if (!packageButtons.length || !requestTrigger || !modal || !form) return;

  const STORAGE_KEY = 'bimSprintPackageRequest';
  const OWNER_WHATSAPP = '201068970898';
  const packageMap = new Map(packageButtons.map(button => [button.dataset.packageId, button.dataset.packageName]));
  let selectedPackages = new Set(loadSelection());
  let lastFocusedElement = null;

  function loadSelection() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(saved) ? saved.filter(id => packageMap.has(id)) : [];
    } catch {
      return [];
    }
  }

  function saveSelection() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...selectedPackages]));
    } catch {
      // The request still works when browser storage is unavailable.
    }
  }

  function selectedPackageNames() {
    return [...selectedPackages].map(id => packageMap.get(id)).filter(Boolean);
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
    requestCount.textContent = String(names.length);
    requestTrigger.classList.toggle('has-items', names.length > 0);
    selectedCount.textContent = `${names.length} selected`;
    selectedList.replaceChildren();

    if (!names.length) {
      const empty = document.createElement('p');
      empty.className = 'selected-package-empty';
      empty.textContent = 'No packages selected yet. Close this window and choose Add to Request beside a package.';
      selectedList.append(empty);
      return;
    }

    selectedPackages.forEach(id => {
      const item = document.createElement('div');
      item.className = 'selected-package-item';
      item.innerHTML = `<span>${packageMap.get(id)}</span><button type="button" data-remove-package="${id}" aria-label="Remove ${packageMap.get(id)}">Remove</button>`;
      selectedList.append(item);
    });
  }

  function updateSelection() {
    saveSelection();
    updatePackageButtons();
    renderSelection();
  }

  function openModal() {
    lastFocusedElement = document.activeElement;
    form.hidden = false;
    readyPanel.hidden = true;
    formStatus.textContent = '';
    renderSelection();
    modal.hidden = false;
    document.body.classList.add('request-modal-open');
    setTimeout(() => modal.querySelector('.request-modal-close')?.focus(), 0);
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('request-modal-open');
    lastFocusedElement?.focus?.();
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
      if (selectedPackages.has(id)) selectedPackages.delete(id);
      else selectedPackages.add(id);
      updateSelection();
    });
  });

  requestTrigger.addEventListener('click', openModal);
  modal.querySelectorAll('[data-close-request]').forEach(button => button.addEventListener('click', closeModal));
  modal.querySelectorAll('input[name="customerType"]').forEach(input => input.addEventListener('change', syncCompanyField));

  selectedList.addEventListener('click', event => {
    const removeButton = event.target.closest('[data-remove-package]');
    if (!removeButton) return;
    selectedPackages.delete(removeButton.dataset.removePackage);
    updateSelection();
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
  updateSelection();
})();
