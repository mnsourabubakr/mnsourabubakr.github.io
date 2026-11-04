(function () {
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
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    repeat: '<path d="m17 1 4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="m7 23-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
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
      <article class="rw-feature-card${isPrimary} rw-reveal">
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

  function installStructuredData(tool, pageUrl, imageUrl, siteBase) {
    document.getElementById('room-wizard-schema')?.remove();
    const schema = document.createElement('script');
    schema.id = 'room-wizard-schema';
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({
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
    });
    document.head.appendChild(schema);
  }

  function prepareRevealAnimations(root) {
    const elements = [...root.querySelectorAll('.rw-reveal')];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }

    document.body.classList.add('rw-animations-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    elements.forEach(element => observer.observe(element));
  }

  function prepareConversionHooks(root) {
    root.addEventListener('click', event => {
      const action = event.target.closest('[data-conversion]');
      if (!action) return;
      const detail = {
        event: 'room_wizard_conversion_click',
        action: action.dataset.conversion,
        destination: action.getAttribute('href') || ''
      };
      if (Array.isArray(window.dataLayer)) window.dataLayer.push(detail);
      window.dispatchEvent(new CustomEvent('bimsprint:conversion', { detail }));
    });
  }

  function prepareDemoRail(root) {
    const demoSection = root.querySelector('#room-wizard-demos');
    if (!demoSection || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      const isVisible = entries.some(entry => entry.isIntersecting);
      document.body.classList.toggle('rw-demos-in-view', isVisible);
    }, { threshold: 0.18 });
    observer.observe(demoSection);
  }

  window.renderToolLandingPage = function renderToolLandingPage({ root, tool, toolId, siteBase }) {
    if (!root || !tool?.landing) return false;

    const landing = tool.landing;
    const pageUrl = `${siteBase}tool.html?id=${encodeURIComponent(toolId)}`;
    const imageUrl = new URL(tool.image, siteBase).href;
    const whatsappUrl = buildWhatsappUrl();
    const demoLinks = (tool.demoLinks || []).filter(demo => demo?.label && demo?.url);

    const painIcons = ['search', 'repeat', 'check'];
    const pains = (landing.pains || []).map((pain, index) => `
      <article class="rw-pain-card rw-reveal">
        <span class="rw-pain-number">0${index + 1}</span>
        <div class="rw-pain-icon">${icon(painIcons[index])}</div>
        <h3>${escapeHtml(pain.title)}</h3>
        <p>${escapeHtml(pain.text)}</p>
      </article>`).join('');

    const features = (tool.features || []).map(renderFeature).join('');

    const workflow = (landing.workflow || []).map((step, index) => `
      <article class="rw-workflow-step rw-reveal">
        <span class="rw-step-number">${String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.text)}</p>
        </div>
      </article>`).join('');

    const demos = demoLinks.map((demo, index) => `
      <article class="rw-demo-card rw-reveal">
        <div class="rw-demo-visual" aria-hidden="true">
          <span class="rw-demo-index">0${index + 1}</span>
          <span class="rw-demo-pulse">${icon('play')}</span>
          <span class="rw-demo-line"></span>
        </div>
        <div class="rw-demo-copy">
          <span class="rw-demo-kicker">Product demonstration</span>
          <h3>${escapeHtml(demo.description || demo.label)}</h3>
          <p>See the Room Wizard workflow in action and follow the tool directly inside Revit.</p>
          <a class="rw-button rw-button--light" href="${escapeHtml(demo.url)}" target="_blank" rel="noopener noreferrer" data-conversion="watch_demo_${index + 1}">
            ${icon('play')}<span>${escapeHtml(demo.label)}</span>
          </a>
        </div>
      </article>`).join('');

    const comparisonRows = (tool.rows || []).map(row => `
      <tr>
        <th scope="row">${escapeHtml(row[0])}</th>
        <td><span class="rw-manual-mark">Manual</span>${escapeHtml(row[1])}</td>
        <td><span class="rw-product-mark">Room Wizard</span>${escapeHtml(row[2])}</td>
      </tr>`).join('');

    const proofPoints = (landing.proofPoints || []).map(point => `
      <li>${icon('check')}<span>${escapeHtml(point)}</span></li>`).join('');

    root.className = 'rw-page';
    root.innerHTML = `
      <section class="rw-hero" aria-labelledby="room-wizard-title">
        <div class="rw-hero-grid"></div>
        <div class="rw-orb rw-orb--one"></div>
        <div class="rw-orb rw-orb--two"></div>
        <div class="rw-container rw-hero-layout">
          <div class="rw-hero-copy">
            <a class="rw-back" href="tools.html">${icon('arrow')}<span>Back to all tools</span></a>
            <span class="rw-eyebrow">${escapeHtml(landing.eyebrow)}</span>
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
            <ul class="rw-proof-list">${proofPoints}</ul>
          </div>
          <div class="rw-hero-product" aria-label="Room Wizard interface preview">
            <div class="rw-product-window">
              <div class="rw-window-bar">
                <span></span><span></span><span></span>
                <strong>Room Wizard · Revit Workspace</strong>
              </div>
              <img src="${escapeHtml(tool.image)}" alt="Room Wizard interface for designing and applying room floor finishes in Revit" fetchpriority="high"/>
            </div>
            <div class="rw-floating-chip rw-floating-chip--top">${icon('layers')}<span>Custom floor design</span></div>
            <div class="rw-floating-chip rw-floating-chip--bottom">${icon('batch')}<span>Batch apply</span></div>
          </div>
        </div>
      </section>

      <section class="rw-section rw-pain-section" aria-labelledby="room-wizard-challenge">
        <div class="rw-container">
          <div class="rw-section-heading rw-reveal">
            <span class="rw-section-kicker">The coordination challenge</span>
            <h2 id="room-wizard-challenge">Floor-finish decisions are simple. <span>The workflow around them is not.</span></h2>
            <p>Traditional room-finish work spreads information, setup, review, and creation across repeated Revit steps.</p>
          </div>
          <div class="rw-pain-grid">${pains}</div>
        </div>
      </section>

      <section class="rw-value-band" aria-labelledby="room-wizard-value">
        <div class="rw-container rw-value-layout">
          <div class="rw-value-icon rw-reveal">${icon('arrow')}</div>
          <div class="rw-reveal">
            <span class="rw-section-kicker">The Room Wizard approach</span>
            <h2 id="room-wizard-value">${escapeHtml(landing.valueTitle)}</h2>
          </div>
          <p class="rw-reveal">${escapeHtml(landing.valueText)}</p>
        </div>
      </section>

      <section class="rw-section rw-features-section" aria-labelledby="room-wizard-features">
        <div class="rw-container">
          <div class="rw-section-heading rw-section-heading--split rw-reveal">
            <div>
              <span class="rw-section-kicker">Capabilities that stay connected</span>
              <h2 id="room-wizard-features">From custom design to final apply.</h2>
            </div>
            <p>Every capability supports the same controlled room-finish workflow—without turning the page into a list of disconnected commands.</p>
          </div>
          <div class="rw-features-grid">${features}</div>
        </div>
      </section>

      <section class="rw-product-focus" aria-label="Room Wizard product interface">
        <div class="rw-container rw-product-focus-grid">
          <div class="rw-product-focus-copy rw-reveal">
            <span class="rw-section-kicker">The workspace</span>
            <h2>See the room, its current finish, and the proposed design together.</h2>
            <p>The central table keeps room data and finish decisions visible while design, preview, match, and apply actions stay close to the work.</p>
            <ul>
              <li>${icon('check')}Search and sort room data</li>
              <li>${icon('check')}Review current and proposed finishes</li>
              <li>${icon('check')}Keep individual configurations during batch work</li>
            </ul>
          </div>
          <figure class="rw-interface-figure rw-reveal">
            <img src="${escapeHtml(tool.image)}" alt="Room Wizard central room-finishes table and design controls" loading="lazy"/>
            <figcaption>Room Wizard workspace inside Revit</figcaption>
          </figure>
        </div>
      </section>

      <section class="rw-section rw-workflow-section" aria-labelledby="room-wizard-workflow">
        <div class="rw-container">
          <div class="rw-section-heading rw-reveal">
            <span class="rw-section-kicker">A clear Revit workflow</span>
            <h2 id="room-wizard-workflow">Review → Design → Preview → Match → Apply</h2>
            <p>Move through the work in a visible sequence while keeping control of each room's finish configuration.</p>
          </div>
          <div class="rw-workflow-list">${workflow}</div>
        </div>
      </section>

      <section class="rw-demo-section" id="room-wizard-demos" aria-labelledby="room-wizard-demo-title">
        <div class="rw-container">
          <div class="rw-section-heading rw-section-heading--light rw-reveal">
            <span class="rw-section-kicker">Video demonstrations</span>
            <h2 id="room-wizard-demo-title">Watch Room Wizard work inside Revit.</h2>
            <p>Open either demonstration on Facebook to see the current workflows in action.</p>
          </div>
          <div class="rw-demo-grid">${demos}</div>
        </div>
      </section>

      <section class="rw-section rw-comparison-section" aria-labelledby="room-wizard-comparison">
        <div class="rw-container">
          <div class="rw-section-heading rw-section-heading--split rw-reveal">
            <div>
              <span class="rw-section-kicker">Workflow comparison</span>
              <h2 id="room-wizard-comparison">Fewer disconnected steps. More visible control.</h2>
            </div>
            <p>No invented percentages—just a direct comparison between the manual workflow and the Room Wizard workflow.</p>
          </div>
          <div class="rw-comparison-wrap rw-reveal">
            <table class="rw-comparison-table">
              <thead><tr><th>Task</th><th>Manual Revit workflow</th><th>With Room Wizard</th></tr></thead>
              <tbody>${comparisonRows}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="rw-closing-section" aria-labelledby="room-wizard-cta">
        <div class="rw-container rw-closing-card rw-reveal">
          <div class="rw-closing-glow"></div>
          <div>
            <span class="rw-section-kicker">Bring the workflow into your Revit process</span>
            <h2 id="room-wizard-cta">Ready to see Room Wizard on a real floor-finish workflow?</h2>
            <p>Contact BIM Sprint on WhatsApp to request a demonstration or discuss purchasing the add-in.</p>
          </div>
          <div class="rw-closing-actions">
            <a class="rw-button rw-button--accent" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" data-conversion="request_demo_final">
              ${icon('whatsapp')}<span>Request a Demo</span>
            </a>
            <a class="rw-text-link" href="tools.html">Explore all add-ins ${icon('arrow')}</a>
          </div>
        </div>
      </section>`;

    document.body.classList.add('room-wizard-page-active');
    installStructuredData(tool, pageUrl, imageUrl, siteBase);
    prepareConversionHooks(root);
    prepareRevealAnimations(root);
    prepareDemoRail(root);
    return true;
  };
})();
