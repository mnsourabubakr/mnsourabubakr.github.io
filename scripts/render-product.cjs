const { escapeHtml: esc, icon, buildWhatsappUrl } = require('../js/tool-landing.js');

const productPackages = {
  pkg01: 'Architectural Automation',
  pkg02: 'Structural Rebar',
  pkg03: 'CAD-to-Revit Structural Modeling',
  pkg04: 'General & Multi-Discipline',
  shared: 'Available in all four packages'
};

const number = new Intl.NumberFormat('en');
function range([min, max]) {
  if (min < 1 && max <= 2) {
    return `${Math.round(min * 60)}–${Math.round(max * 60)} sec`;
  }
  return `${number.format(min)}–${number.format(max)} min`;
}
const image = (asset, options) =>
  `<img src="${esc(asset.src)}" width="${asset.width}" height="${asset.height}" alt="${esc(asset.alt)}" ${options}>`;

const featureRewrites = {
  '01': { 3: 'Apply lateral cover constraints to generated bars.' },
  '03': { 5: 'Select the CAD layer that contains the reinforcement geometry and annotations.' },
  '06': { 0: 'Use CAD plan geometry from the relevant drawing layers as the modeling input.' },
  '13': {
    3: 'Detail legs for slabs, raft foundations, isolated footings, and structural beams.',
    4: 'Use the specified concrete cover when determining the bend geometry.',
    5: 'Review generated legs at changes in thickness, around openings, and at perimeter transitions.'
  },
  '16': { 5: 'Connect to a configured SQL Server instance with Windows Authentication.' }
};

function featureCards(tool) {
  return tool.features.map((item, index) => {
    const feature = featureRewrites[tool.id]?.[index] || item;
    const order = String(index + 1).padStart(2, '0');
    let content;
    if (typeof feature === 'object') {
      content = `<h3>${esc(feature.title)}</h3><p>${esc(feature.text)}</p>`;
    } else {
      const parts = feature.split(/ — |: /);
      const [title, ...detail] = parts;
      content = detail.length && title.length < 64
        ? `<h3>${esc(title)}</h3><p>${esc(detail.join(' — '))}</p>`
        : `<p class="product-feature-only">${esc(feature)}</p>`;
    }
    return `<li><span aria-hidden="true">${order}</span><div>${content}</div></li>`;
  }).join('');
}

function demoLinks(tool) {
  return tool.demoLinks || (tool.videoUrl ? [{ label: 'Watch Demo 1', url: tool.videoUrl, description: tool.name }] : []);
}

function renderDemos(tool, links) {
  if (tool.localDemo) {
    const { src, poster } = tool.localDemo;
    const mediaUrl = `${src}?v=40s`;
    return `
    <section id="product-demos" class="rw-demo-section" aria-labelledby="demos-title">
      <div class="rw-container">
        <div class="rw-section-heading rw-section-heading--light">
          <span class="rw-section-kicker">40-second workflow demo</span>
          <h2 id="demos-title">See ${esc(tool.name)} in Revit</h2>
          <p>Follow the on-screen steps from setup to the modeled result.</p>
        </div>
        <video id="product-demo-player" class="product-demo-player" controls playsinline preload="none" poster="${esc(poster)}" aria-labelledby="demos-title">
          <source src="${esc(mediaUrl)}" type="video/mp4">
          <a href="${esc(mediaUrl)}">Open the MP4 demo</a>
        </video>
      </div>
    </section>`;
  }
  if (!links.length) return '';
  return `
    <section id="product-demos" class="rw-demo-section" aria-labelledby="demos-title">
      <div class="rw-container">
        <div class="rw-section-heading rw-section-heading--light">
          <span class="rw-section-kicker">Video demonstrations</span>
          <h2 id="demos-title">See ${esc(tool.name)} in Revit</h2>
        </div>
        <div class="rw-demo-grid">
          ${links.map((demo, i) => `
          <a class="rw-demo-card" href="${esc(demo.url)}" target="_blank" rel="noopener noreferrer" data-conversion="watch_demo_${i + 1}">
            <div class="rw-demo-visual" aria-hidden="true">
              ${tool.demoImages[i] ? image({ ...tool.demoImages[i], alt: '' }, 'loading="lazy" decoding="async"') : ''}
              <span class="rw-demo-index">0${i + 1}</span><span class="rw-demo-pulse">${icon('play')}</span>
            </div>
            <div class="rw-demo-copy">
              <span class="rw-demo-kicker">Opens in a new tab</span>
              <h3>${esc(demo.description || demo.label)}</h3>
              ${tool.demos?.[i] ? `<p>${esc(tool.demos[i])}</p>` : ''}
              <span class="rw-button rw-button--light">${esc(demo.label)} ${icon('arrow')}</span>
            </div>
          </a>`).join('')}
        </div>
      </div>
    </section>`;
}

function renderComparison(tool) {
  const [studyTitle, assumptions] = tool.study;
  const example = tool.exampleImage;
  return `
    <section class="rw-section rw-comparison-section" id="workflow-comparison" aria-labelledby="comparison-title">
      <div class="rw-container">
        <div class="rw-section-heading">
          <span class="rw-section-kicker">Workflow comparison</span>
          <h2 id="comparison-title">Manual Revit vs. ${esc(tool.name)}</h2>
        </div>
        <div class="rw-comparison-wrap">
          <table class="rw-comparison-table" role="table" aria-labelledby="comparison-title">
            <thead role="rowgroup"><tr role="row"><th scope="col">Task</th><th scope="col" id="rw-manual">Manual Revit workflow</th><th scope="col" id="rw-with-tool">With ${esc(tool.name)}</th></tr></thead>
            <tbody>
              ${tool.rows.map(([task, manual, automated]) => `
              <tr><th scope="row">${esc(task)}</th><td headers="rw-manual"><span class="rw-manual-mark" aria-hidden="true">Manual Revit workflow</span>${esc(manual)}</td><td headers="rw-with-tool"><span class="rw-product-mark" aria-hidden="true">With ${esc(tool.name)}</span>${esc(automated)}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
        <section class="rw-time-study product-study" aria-labelledby="rw-time-title" aria-describedby="rw-time-note">
          <header class="rw-time-study-heading">
            <span class="rw-section-kicker">Illustrative time comparison</span>
            <h3 id="rw-time-title">${esc(studyTitle)}</h3>
            <p id="rw-time-note">${esc(assumptions)} These are planning estimates. Actual times depend on the model and setup.</p>
          </header>
          <figure class="product-evidence">
            <a href="${esc(example.src)}" target="_blank" rel="noopener noreferrer" data-conversion="view_comparison_image">${image(example, 'loading="lazy" decoding="async"')}</a>
            <figcaption>${esc(example.alt)}</figcaption>
          </figure>
          <div class="rw-time-comparisons">
            ${tool.scenarios.map(([label, manual, automated, manualWork, toolWork], i) => {
              const saved = [manual[0] - automated[1], manual[1] - automated[0]];
              return `
              <section class="rw-time-group" aria-labelledby="estimate-${i}">
                <h4 id="estimate-${i}">${esc(label)}</h4>
                <div class="rw-time-cards">
                  <div class="rw-time-card"><h5>Manual in Revit</h5><p class="rw-time-number">${range(manual)}</p><p>${esc(manualWork)}</p></div>
                  <div class="rw-time-card rw-time-card--wizard"><h5>${esc(tool.name)}</h5><p class="rw-time-number">${range(automated)}</p><p>${esc(toolWork)}</p></div>
                </div>
                ${saved[0] > 0 ? `<p class="rw-time-savings"><strong>${range(saved)} estimated savings</strong></p>` : ''}
              </section>`;
            }).join('')}
          </div>
        </section>
      </div>
    </section>`;
}

function renderProduct(tool) {
  const productPackage = productPackages[tool.packageId];
  const shared = tool.packageId === 'shared';
  const links = demoLinks(tool);
  const demoCount = tool.localDemo ? 1 : links.length;
  const demoTarget = demoCount ? '#product-demos' : '#workflow-comparison';
  const playInline = tool.localDemo ? ' data-play-local-demo' : '';
  const whatsapp = buildWhatsappUrl(tool.name);
  const [valueTitle, valueText] = tool.value;
  const [headline, emphasis] = tool.headline;

  return `
    <section class="rw-hero product-hero" aria-labelledby="product-title">
      <div class="rw-hero-grid"></div>
      <div class="rw-orb rw-orb--one"></div>
      <div class="rw-container rw-hero-layout">
        <div class="rw-hero-copy">
          <a class="rw-back" href="tools.html">${icon('arrow')}<span>Back to all tools</span></a>
          <p class="rw-eyebrow">${esc(productPackage)} · Revit Add-in</p>
          <h1 id="product-title">${esc(tool.name)}</h1>
          <p class="product-promise">${esc(headline)} <strong>${esc(emphasis)}</strong></p>
          <p class="rw-hero-text">${esc(tool.lead)}</p>
          <div class="rw-hero-actions">
            <a class="rw-button rw-button--primary" href="${whatsapp}" target="_blank" rel="noopener noreferrer" data-conversion="request_demo_hero">${icon('whatsapp')}<span>Request Demo on WhatsApp</span></a>
            <a class="rw-button rw-button--ghost" href="${demoTarget}" data-conversion="${demoCount ? 'view_demos_hero' : 'view_workflow_hero'}"${playInline}>${icon(demoCount ? 'play' : 'arrow')}<span>${tool.localDemo ? 'Watch Demo' : links.length ? 'Watch Demos' : 'Compare Workflows'}</span></a>
          </div>
        </div>
        <figure class="rw-hero-product">
          <div class="rw-product-window">
            <div class="rw-window-bar"><span></span><span></span><span></span><strong>${esc(tool.heroLabel || `${tool.name} · Autodesk Revit`)}</strong></div>
            <a class="rw-product-image" href="${esc(tool.heroImage.src)}" target="_blank" rel="noopener noreferrer" data-conversion="view_interface">
              ${image(tool.heroImage, 'fetchpriority="high"')}<span>View full-size screenshot ↗</span>
            </a>
          </div>
        </figure>
      </div>
    </section>
    <section class="rw-section product-features" aria-labelledby="features-title">
      <div class="rw-container">
        <div class="rw-section-heading">
          <span class="rw-section-kicker">Key features</span>
          <h2 id="features-title">${esc(valueTitle)}</h2>
          <p>${esc(valueText)}</p>
        </div>
        <ul class="product-feature-grid">${featureCards(tool)}</ul>
      </div>
    </section>
    ${renderDemos(tool, links)}
    ${renderComparison(tool)}
    <section class="rw-closing-section" aria-labelledby="closing-title">
      <div class="rw-container rw-closing-card">
        <div class="rw-closing-glow"></div>
        <div>
          <span class="rw-section-kicker">${esc(productPackage)}${shared ? '' : ' package'}</span>
          <h2 id="closing-title">See how ${esc(tool.name)} fits your workflow</h2>
          <p>Tell us what you’re modeling or reviewing in Revit. We can walk through the workflow and discuss compatibility, licensing, and support. Use Request Package to add the package to your request list.</p>
        </div>
        <div class="rw-closing-actions">
          <a class="rw-button rw-button--accent" href="${whatsapp}" target="_blank" rel="noopener noreferrer" data-conversion="request_demo_final">${icon('whatsapp')}<span>Request Demo</span></a>
          <a class="rw-text-link" href="tools.html${shared ? '' : '#' + tool.packageId}" data-conversion="view_package">${shared ? 'View all packages' : 'View package'} ${icon('arrow')}</a>
        </div>
      </div>
    </section>
    <nav class="tool-demo-actions tool-detail-actions rw-demo-shortcuts product-shortcuts" aria-label="${esc(tool.name)} demos and package request" data-demo-count="${demoCount}" data-tool-package="${tool.packageId}"${demoCount ? '' : ' hidden'}>
      ${tool.localDemo
        ? `<a class="tool-demo-link" href="#product-demos" data-conversion="watch_demo_floating_1" data-play-local-demo>${icon('play')}<span>Watch Demo</span></a>`
        : links.map((demo, i) => `<a class="tool-demo-link" href="${esc(demo.url)}" target="_blank" rel="noopener noreferrer" data-conversion="watch_demo_floating_${i + 1}" title="${esc(demo.description || demo.label)}">${icon('play')}<span>${esc(demo.label)}</span></a>`).join('')}
    </nav>`;
}

module.exports = { renderProduct };
