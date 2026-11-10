const mobilePackageLayout = window.matchMedia('(max-width: 767px)');
const reducedPackageMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

for (const list of document.querySelectorAll('.catalog-page .package-tools')) {
  const cards = [...list.children];
  const packageRow = list.closest('.package-row');
  const packageName = packageRow.querySelector('h2').textContent.trim();
  list.id = `${packageRow.id}-tools`;
  list.classList.add('is-carousel');
  list.classList.toggle('has-unpaired-card', cards.length % 2 === 1);

  const controls = document.createElement('div');
  controls.className = 'package-carousel-controls';
  controls.hidden = true;
  controls.innerHTML = `
    <button class="package-carousel-arrow" type="button">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 5-7 7 7 7"/></svg>
    </button>
    <div class="package-carousel-track" aria-hidden="true"><span class="package-carousel-thumb"></span></div>
    <button class="package-carousel-arrow" type="button">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg>
    </button>`;
  list.after(controls);

  const [previous, next] = controls.querySelectorAll('button');
  const thumb = controls.querySelector('.package-carousel-thumb');
  previous.setAttribute('aria-label', `Previous tools in ${packageName}`);
  next.setAttribute('aria-label', `Next tools in ${packageName}`);
  previous.setAttribute('aria-controls', list.id);
  next.setAttribute('aria-controls', list.id);

  function updateControls() {
    const maxScroll = list.scrollWidth - list.clientWidth;
    controls.hidden = !mobilePackageLayout.matches || maxScroll < 2;
    if (controls.hidden) return;

    const thumbWidth = list.clientWidth / list.scrollWidth;
    const progress = Math.max(0, Math.min(1, list.scrollLeft / maxScroll));
    thumb.style.width = `${thumbWidth * 100}%`;
    thumb.style.left = `${progress * (1 - thumbWidth) * 100}%`;
    previous.setAttribute('aria-disabled', list.scrollLeft <= 1);
    next.setAttribute('aria-disabled', list.scrollLeft >= maxScroll - 1);
  }

  function moveByGroup(direction) {
    const maxScroll = list.scrollWidth - list.clientWidth;
    const firstLeft = cards[0].getBoundingClientRect().left;
    const groups = cards.filter((_, index) => index % 2 === 0)
      .map(card => Math.min(maxScroll, card.getBoundingClientRect().left - firstLeft));
    const target = direction > 0
      ? groups.find(left => left > list.scrollLeft + 1)
      : groups.findLast(left => left < list.scrollLeft - 1);
    if (target === undefined) return;

    list.scrollTo({ left: target, behavior: reducedPackageMotion.matches ? 'instant' : 'smooth' });
  }

  previous.addEventListener('click', () => moveByGroup(-1));
  next.addEventListener('click', () => moveByGroup(1));
  list.addEventListener('scroll', updateControls, { passive: true });
  mobilePackageLayout.addEventListener('change', updateControls);
  new ResizeObserver(updateControls).observe(list);
  updateControls();
}
