document.getElementById('tool-content').addEventListener('click', event => {
  const link = event.target.closest('[data-conversion]');
  if (!link) return;

  const detail = {
    event: 'room_wizard_conversion_click',
    action: link.dataset.conversion,
    destination: new URL(link.href).pathname
  };
  if (Array.isArray(window.dataLayer)) window.dataLayer.push(detail);
  window.dispatchEvent(new CustomEvent('bimsprint:conversion', { detail }));
});
