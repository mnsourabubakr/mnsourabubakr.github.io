document.getElementById('tool-content').addEventListener('click', event => {
  const link = event.target.closest('[data-conversion]');
  if (!link) return;

  if (link.hasAttribute('data-play-local-demo') && event.button === 0 &&
      !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
    // The anchor still jumps to the player if the browser blocks playback.
    document.getElementById('product-demo-player')?.play().catch(() => {});
  }

  const detail = {
    event: 'bim_sprint_product_click',
    product: window.location.pathname,
    action: link.dataset.conversion
  };
  if (Array.isArray(window.dataLayer)) window.dataLayer.push(detail);
  window.dispatchEvent(new CustomEvent('bimsprint:conversion', { detail }));
});
