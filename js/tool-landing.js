// Build-time template. Run node scripts/build-room-wizard.cjs after editing.
module.exports = (function () {
  const WHATSAPP_NUMBER = '201068970898';

  const iconPaths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    play: '<path d="m9 7 8 5-8 5V7Z"/>',
    whatsapp: '<path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z"/><path d="M8.2 7.8c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l1 2.3c.1.3.1.5-.1.7l-.7.8c-.2.2-.2.4-.1.6.7 1.4 1.8 2.5 3.2 3.2.2.1.4.1.6-.1l.9-1c.2-.2.4-.3.7-.2l2.2 1c.3.1.4.3.4.5 0 .3-.1 1.5-1.1 2.1-.7.4-1.6.7-2.6.4-1.2-.3-2.8-1-4.6-2.6-1.4-1.3-2.5-2.9-3-4.2-.5-1.1-.1-2.5.5-3.2.3-.3.7-.5 1.1-.3Z"/>'
  };

  function icon(name) {
    const paths = iconPaths[name];
    return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
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

    const demoShortcuts = tool.demoLinks.map((demo, index) => `
      <a class="tool-demo-link" href="${escapeHtml(demo.url)}" target="_blank" rel="noopener noreferrer" data-conversion="watch_demo_floating_${index + 1}" aria-label="${escapeHtml(demo.label)} on Facebook (opens in a new tab)">
        ${icon('play')}<span>${escapeHtml(demo.label)}</span>
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
          <section class="rw-time-study" id="floor-finish-time" aria-labelledby="rw-time-title">
            <header class="rw-time-study-heading">
              <span class="rw-section-kicker">Floor finish example</span>
              <h3 id="rw-time-title"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" stroke-linecap="round" stroke-linejoin="round"/></svg> How long would this floor take?</h3>
            </header>
            <figure class="rw-time-study-image">
              <img src="assets/images/room-wizard-floor-finish-example.png" width="1218" height="762" loading="lazy" alt="Floor finish plan with layered red and green borders around a large central inset">
            </figure>
            <div class="rw-time-cards" aria-describedby="rw-time-note">
              <div class="rw-time-card">
                <span class="rw-time-scope">Single Room</span>
                <h4>Manual Drawing in Revit</h4>
                <p class="rw-time-number">35–45 min</p>
                <p>Draw the borders and center pattern manually.</p>
              </div>
              <div class="rw-time-card rw-time-card--wizard">
                <span class="rw-time-scope">Single Room</span>
                <h4>Room Wizard</h4>
                <p class="rw-time-number">~2 min</p>
                <p>Polyline, Boundary Line, and Constrain Group.</p>
              </div>
              <div class="rw-time-card">
                <span class="rw-time-scope">Batch Comparison</span>
                <h4>5 Matching Rooms</h4>
                <dl class="rw-time-batch">
                  <div><dt>Revit · Redraw each room</dt><dd>175–225 min</dd></div>
                  <div><dt>Room Wizard · Match &amp; Apply</dt><dd>~2 min</dd></div>
                </dl>
              </div>
            </div>
            <p id="rw-time-note">Illustrative estimates for this design. The manual batch estimate multiplies the single-room time by five. Match &amp; Apply starts with a prepared design.</p>
          </section>
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
      </section>

      <nav class="tool-demo-actions rw-demo-shortcuts" aria-label="Room Wizard video shortcuts">${demoShortcuts}</nav>`;
  }

  return { renderToolLandingPage, structuredData, escapeHtml };
})();
