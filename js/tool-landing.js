// Build-time template. Run node scripts/build-room-wizard.cjs after editing.
module.exports = (function () {
  const WHATSAPP_NUMBER = '201068970898';

  const iconPaths = {
    layers: '<path d="M12 3 3.5 7.5 12 12l8.5-4.5L12 3Z"/><path d="m3.5 12 8.5 4.5 8.5-4.5"/><path d="m3.5 16.5 8.5 4.5 8.5-4.5"/>',
    match: '<rect x="3" y="4" width="7" height="7" rx="1.5"/><rect x="14" y="13" width="7" height="7" rx="1.5"/><path d="M10 7.5h4a3 3 0 0 1 3 3V13"/><path d="m14.5 10.5 2.5 2.5 2.5-2.5"/>',
    cube: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4.3 7.7 7.7 4.4 7.7-4.4M12 12.1V21"/>',
    batch: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><path d="m15 17 2 2 4-5"/>',
    table: '<path d="M4 5h16v14H4zM4 10h16M10 5v14"/>',
    shield: '<path d="M12 3 5 6v5c0 4.7 2.9 8.1 7 10 4.1-1.9 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
    columns: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16M3 9h18"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/>',
    check: '<path d="m4 12 5 5L20 6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    play: '<path d="m9 7 8 5-8 5V7Z"/>',
    whatsapp: '<path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z"/><path d="M8.2 7.8c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l1 2.3c.1.3.1.5-.1.7l-.7.8c-.2.2-.2.4-.1.6.7 1.4 1.8 2.5 3.2 3.2.2.1.4.1.6-.1l.9-1c.2-.2.4-.3.7-.2l2.2 1c.3.1.4.3.4.5 0 .3-.1 1.5-1.1 2.1-.7.4-1.6.7-2.6.4-1.2-.3-2.8-1-4.6-2.6-1.4-1.3-2.5-2.9-3-4.2-.5-1.1-.1-2.5.5-3.2.3-.3.7-.5 1.1-.3Z"/>'
  };

  function icon(name, className = '') {
    const paths = iconPaths[name] || iconPaths.check;
    return `<svg class="${className}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderFeature(feature, index) {
    const names = ['layers', 'match', 'cube', 'batch', 'table', 'shield', 'columns', 'link'];
    const isPrimary = index < 4 ? ' rw-feature-card--primary' : '';
    const title = typeof feature === 'object' ? feature.title : `Capability ${index + 1}`;
    const text = typeof feature === 'object' ? feature.text : feature;
    return `
      <article class="rw-feature-card${isPrimary}">
        <div class="rw-feature-icon">${icon(names[index])}</div>
        <div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(text)}</p>
        </div>
      </article>`;
  }

  function buildWhatsappUrl() {
    const message = 'Hello BIM Sprint, I would like to request a demo of Room Wizard for Revit.';
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  function structuredData(tool, pageUrl, imageUrl, siteBase) {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Room Wizard',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Windows',
      softwareRequirements: 'Autodesk Revit',
      description: tool.seo?.description || tool.desc,
      image: imageUrl,
      url: pageUrl,
      publisher: {
        '@type': 'Organization',
        name: 'BIM Sprint',
        url: siteBase
      }
    };
  }

  function renderToolLandingPage(tool) {
    const landing = tool.landing;
    const whatsappUrl = buildWhatsappUrl();

    const features = (tool.features || []).map(renderFeature).join('');

    const workflow = (landing.workflow || []).map((step, index) => `
      <li class="rw-workflow-step">
        <span class="rw-step-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.text)}</p>
        </div>
      </li>`).join('');

    const demos = tool.demoLinks.map((demo, index) => `
      <a class="rw-demo-card" href="${escapeHtml(demo.url)}" target="_blank" rel="noopener noreferrer" data-conversion="watch_demo_${index + 1}" aria-labelledby="rw-demo-action-${index} rw-demo-name-${index}">
        <div class="rw-demo-visual" aria-hidden="true">
          <span class="rw-demo-index">0${index + 1}</span>
          <span class="rw-demo-pulse">${icon('play')}</span>
        </div>
        <div class="rw-demo-copy">
          <span class="rw-demo-kicker">Facebook · Opens in a new tab</span>
          <h3 id="rw-demo-name-${index}">${escapeHtml(demo.description || demo.label)}</h3>
          <p>${escapeHtml(demo.caption)}</p>
          <span class="rw-button rw-button--light" id="rw-demo-action-${index}">${escapeHtml(demo.label)} ${icon('arrow')}</span>
        </div>
      </a>`).join('');

    const comparisonRows = (tool.rows || []).map(row => `
      <tr>
        <th scope="row">${escapeHtml(row[0])}</th>
        <td headers="rw-manual"><span class="rw-manual-mark" aria-hidden="true">Manual Revit workflow</span>${escapeHtml(row[1])}</td>
        <td headers="rw-with-tool"><span class="rw-product-mark" aria-hidden="true">With Room Wizard</span>${escapeHtml(row[2])}</td>
      </tr>`).join('');

    return `
      <section class="rw-hero" aria-labelledby="room-wizard-title">
        <div class="rw-hero-grid"></div>
        <div class="rw-orb rw-orb--one"></div>
        <div class="rw-orb rw-orb--two"></div>
        <div class="rw-container rw-hero-layout">
          <div class="rw-hero-copy">
            <a class="rw-back" href="tools.html">${icon('arrow')}<span>Back to all tools</span></a>
            <span class="rw-eyebrow">Architectural Automation · Revit Add-in</span>
            <h1 id="room-wizard-title">${escapeHtml(landing.headline)} <span>${escapeHtml(landing.headlineAccent)}</span></h1>
            <p class="rw-hero-text">${escapeHtml(landing.heroText)}</p>
            <div class="rw-hero-actions">
              <a class="rw-button rw-button--primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" data-conversion="request_demo_hero">
                ${icon('whatsapp')}<span>${escapeHtml(landing.primaryCta)}</span>
              </a>
              <a class="rw-button rw-button--ghost" href="#room-wizard-demos" data-conversion="view_demos_hero">
                ${icon('play')}<span>${escapeHtml(landing.secondaryCta)}</span>
              </a>
            </div>
          </div>
          <div class="rw-hero-product" aria-label="Room Wizard interface preview">
            <div class="rw-product-window">
              <div class="rw-window-bar">
                <span></span><span></span><span></span>
                <strong>Room Wizard · Revit Workspace</strong>
              </div>
              <a class="rw-product-image" href="${escapeHtml(tool.image)}" target="_blank" rel="noopener noreferrer" data-conversion="view_interface">
                <img src="${escapeHtml(tool.image)}" width="1629" height="925" alt="Room Wizard interface showing current finishes, layer setups, and room controls" fetchpriority="high"/>
                <span>View full-size screenshot ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="rw-demo-section" id="room-wizard-demos" aria-labelledby="room-wizard-demo-title">
        <div class="rw-container">
          <div class="rw-section-heading rw-section-heading--light">
            <span class="rw-section-kicker">Video demonstrations</span>
            <h2 id="room-wizard-demo-title">See Room Wizard in Revit</h2>
          </div>
          <div class="rw-demo-grid">${demos}</div>
        </div>
      </section>

      <section class="rw-section rw-workflow-section" aria-labelledby="room-wizard-workflow">
        <div class="rw-container">
          <div class="rw-section-heading">
            <span class="rw-section-kicker">The workflow</span>
            <h2 id="room-wizard-workflow">From existing finishes to new floors</h2>
            <p>Review what’s already modeled in one room table, reuse a setup for similar rooms, and apply each room’s design when it’s ready.</p>
          </div>
          <ol class="rw-workflow-list" role="list">${workflow}</ol>
        </div>
      </section>

      <section class="rw-section rw-features-section" aria-labelledby="room-wizard-features">
        <div class="rw-container">
          <div class="rw-section-heading rw-section-heading--split">
            <div>
              <span class="rw-section-kicker">Capabilities that stay connected</span>
              <h2 id="room-wizard-features">From custom design to final apply.</h2>
            </div>
            <p>Set materials and thicknesses per layer, check the design in 3D, then model the finishes for one room or a selection.</p>
          </div>
          <div class="rw-features-grid">${features}</div>
        </div>
      </section>

      <section class="rw-section rw-comparison-section" aria-labelledby="room-wizard-comparison">
        <div class="rw-container">
          <div class="rw-section-heading">
            <span class="rw-section-kicker">Workflow comparison</span>
            <h2 id="room-wizard-comparison">Manual Revit workflow vs. Room Wizard</h2>
          </div>
          <div class="rw-comparison-wrap">
            <table class="rw-comparison-table" role="table" aria-labelledby="room-wizard-comparison">
              <thead role="rowgroup"><tr role="row"><th scope="col">Task</th><th id="rw-manual" scope="col">Manual Revit workflow</th><th id="rw-with-tool" scope="col">With Room Wizard</th></tr></thead>
              <tbody>${comparisonRows}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="rw-closing-section" aria-labelledby="room-wizard-cta">
        <div class="rw-container rw-closing-card">
          <div class="rw-closing-glow"></div>
          <div>
            <span class="rw-section-kicker">${escapeHtml(landing.packageName)} package</span>
            <h2 id="room-wizard-cta">Bring Room Wizard to your Revit workflow</h2>
            <p>Message BIM Sprint to request a demo or ask about Revit compatibility, licensing, and support. To request the package, open ${escapeHtml(landing.packageName)}, choose Add to Request, then open Request List.</p>
          </div>
          <div class="rw-closing-actions">
            <a class="rw-button rw-button--accent" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" data-conversion="request_demo_final">
              ${icon('whatsapp')}<span>${escapeHtml(landing.primaryCta)}</span>
            </a>
            <a class="rw-text-link" href="${escapeHtml(landing.packageUrl)}" data-conversion="view_package">View ${escapeHtml(landing.packageName)} ${icon('arrow')}</a>
          </div>
        </div>
      </section>`;

  }

  return { renderToolLandingPage, structuredData, escapeHtml };
})();
