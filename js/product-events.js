document.getElementById('tool-content').addEventListener('click', event => {
  const link = event.target.closest('[data-conversion]');
  if (!link) return;

  const detail = {
    event: 'bim_sprint_product_click',
    product: window.location.pathname,
    action: link.dataset.conversion
  };
  if (Array.isArray(window.dataLayer)) window.dataLayer.push(detail);
  window.dispatchEvent(new CustomEvent('bimsprint:conversion', { detail }));
});
