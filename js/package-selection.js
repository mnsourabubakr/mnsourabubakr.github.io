(() => {
  const key = 'bimSprintPackageRequest';
  const updates = new EventTarget();
  const packages = new Map([
    ['pkg01', 'Architectural Automation'],
    ['pkg02', 'Structural Rebar'],
    ['pkg03', 'CAD-to-Revit Structural Modeling'],
    ['pkg04', 'General & Multi-Discipline']
  ]);

  function read(fallback = []) {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || '[]');
      return new Set(Array.isArray(saved) ? saved.filter(id => packages.has(id)) : []);
    } catch {
      return new Set(fallback);
    }
  }

  function write(selection) {
    try {
      localStorage.setItem(key, JSON.stringify([...selection]));
    } catch {
      return false;
    }
    updates.dispatchEvent(new Event('change'));
    return true;
  }

  function onChange(sync) {
    updates.addEventListener('change', sync);
    window.addEventListener('pageshow', sync);
    window.addEventListener('storage', event => {
      if (event.key === key || event.key === null) sync();
    });
  }

  window.BimSprintPackageSelection = { read, write, onChange, packageName: id => packages.get(id) };

  const requestedPackage = new URLSearchParams(window.location.search).get('package');
  for (const rail of document.querySelectorAll('[data-tool-package]')) {
    const railPackage = rail.dataset.toolPackage;
    const packageId = railPackage === 'shared' && packages.has(requestedPackage) ? requestedPackage : railPackage;
    if (!packages.has(packageId) && packageId !== 'shared') continue;

    let picker;
    if (packageId === 'shared') {
      picker = document.createElement('select');
      picker.className = 'tool-package-picker';
      picker.setAttribute('aria-label', 'Choose a package for Model Navigator');
      picker.append(new Option('Choose a package', ''));
      for (const [id, name] of packages) picker.append(new Option(name, id));
      rail.append(picker);
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'tool-demo-link tool-package-action';
    const status = document.createElement('span');
    status.className = 'tool-package-status';
    status.setAttribute('role', 'status');
    status.hidden = true;
    const list = document.createElement('button');
    list.type = 'button';
    list.className = 'tool-package-list';
    list.dataset.openRequestList = '';
    list.setAttribute('aria-controls', 'package-request-modal');
    list.setAttribute('aria-haspopup', 'dialog');
    list.hidden = true;
    rail.append(button, status, list);
    rail.hidden = false;

    const currentId = () => picker ? picker.value : packageId;
    function sync() {
      const id = currentId();
      const selected = read();
      const added = selected.has(id);
      button.disabled = !id;
      button.setAttribute('aria-disabled', String(!id || added));
      button.textContent = added ? 'Package Added ✓' : 'Request Package';
      button.setAttribute('aria-label', id ? (added ? `Package Added: ${packages.get(id)}` : `Request Package: ${packages.get(id)}`) : 'Request Package');
      list.hidden = !selected.size;
      list.textContent = `View Request List (${selected.size})`;
    }

    button.addEventListener('click', () => {
      const id = currentId();
      const selected = read();
      if (!id || selected.has(id)) return;
      selected.add(id);
      if (!write(selected)) {
        status.textContent = 'Could not save this package. Try again with browser storage enabled.';
        status.hidden = false;
        return;
      }
    });
    picker?.addEventListener('change', () => {
      status.hidden = true;
      sync();
    });
    onChange(() => {
      status.hidden = true;
      sync();
    });
    sync();
  }
})();
