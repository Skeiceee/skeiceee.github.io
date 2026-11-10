<script>
  import { onMount } from 'svelte';
  import portrait from './assets/portrait.jpg';
  import {
    site,
    intro,
    contact,
    experience,
    education,
    featuredProject,
    otherProjects,
    stack,
    sections
  } from './lib/data.js';

  let theme = $state(
    typeof document !== 'undefined' &&
      document.documentElement.dataset.theme === 'light'
      ? 'light'
      : 'dark'
  );

  onMount(() => {
    updateThemeColor(theme);
  });

  function updateThemeColor(value) {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', value === 'dark' ? '#000000' : '#ffffff');
  }

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    theme = next;
    document.documentElement.dataset.theme = next;
    updateThemeColor(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* El tema sigue funcionando aunque el navegador bloquee el almacenamiento. */
    }
  }

  const year = new Date().getFullYear();
</script>

<div class="shell" id="top">
  <a class="skip" href="#contenido">Saltar al contenido</a>

  <header class="masthead">
    <div class="masthead-main">
      <a class="wordmark" href="#top" aria-label="Victor Nuñez, volver al inicio">
        Victor Nuñez<span aria-hidden="true">.</span>
      </a>

      <div class="masthead-tools">
        <span class="place">{site.location}</span>
        <button
          class="theme-toggle"
          class:is-light={theme === 'light'}
          type="button"
          onclick={toggleTheme}
          aria-label={theme === 'dark' ? 'Cambiar al modo claro' : 'Cambiar al modo oscuro'}
          title={theme === 'dark' ? 'Cambiar al modo claro' : 'Cambiar al modo oscuro'}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" />
            <path d="M8 1.5a6.5 6.5 0 0 1 0 13Z" fill="currentColor" />
          </svg>
          <span>{theme === 'dark' ? 'claro' : 'oscuro'}</span>
        </button>
      </div>
    </div>

    <nav class="index" aria-label="Índice de la página">
      {#each sections as section}
        <a href={`#${section.id}`}>
          <span aria-hidden="true">{section.number}</span>{section.label}
        </a>
      {/each}
    </nav>
  </header>

  <main id="contenido">
    <section class="intro" aria-labelledby="intro-title">
      <p class="kicker">
        <span>Portafolio</span>
        <span>{year}</span>
      </p>

      <h1 id="intro-title">
        {intro.title}<br />
        <em>{intro.accent}</em>
      </h1>

      <p class="lede">{intro.lede}</p>

      <p class="status">
        <span class="status-mark" aria-hidden="true"></span>
        {intro.status}
      </p>
    </section>

    <section class="section" id="experiencia" aria-labelledby="experiencia-title">
      <div class="section-head">
        <span class="section-num">01</span>
        <h2 id="experiencia-title">Experiencia</h2>
        <span class="section-note">2019—2024</span>
      </div>

      <ol class="jobs">
        {#each experience as job}
          <li class="job">
            <span class="job-period">{job.period}</span>
            <div class="job-body">
              <h3 class="job-role">{job.role}</h3>
              <p class="job-company">{job.company}</p>
              <p class="job-summary">{job.summary}</p>
            </div>
          </li>
        {/each}
      </ol>

      <p class="education">
        <span>Formación</span>
        <span>{education.title} · {education.school}</span>
      </p>
    </section>

    <section class="section" id="proyectos" aria-labelledby="proyectos-title">
      <div class="section-head">
        <span class="section-num">02</span>
        <h2 id="proyectos-title">Proyectos</h2>
        <span class="section-note">Selección</span>
      </div>

      <article class="feature">
        <div class="feature-copy">
          <p class="feature-label">Proyecto destacado</p>
          <h3 class="feature-name">{featuredProject.name}</h3>
          <p class="feature-tagline">{featuredProject.tagline}</p>
          <p class="feature-summary">{featuredProject.summary}</p>
          <p class="feature-meta">
            {featuredProject.stack.join(' · ')} · {featuredProject.license} · {featuredProject.year}
          </p>

          <div class="feature-links">
            {#each featuredProject.links as link}
              <a href={link.href} target="_blank" rel="noreferrer noopener">
                {link.label}<span aria-hidden="true">↗</span>
              </a>
            {/each}
          </div>
        </div>

        <figure class="feature-figure">
          <div class="reader" aria-hidden="true">
            <div class="reader-bar">
              <span class="reader-brand">Gutter</span>
              <span>024 / 180</span>
            </div>
            <div class="reader-page">
              <span class="panel panel-1"></span>
              <span class="panel panel-2"></span>
              <span class="panel panel-3"></span>
              <span class="panel panel-4"></span>
              <span class="panel panel-5"></span>
            </div>
            <div class="reader-bar reader-footer">
              <span>−</span>
              <span>65%</span>
              <span>+</span>
              <span class="reader-spacer"></span>
              <span>← →</span>
            </div>
          </div>
          <figcaption>Fig. 01 — Gutter</figcaption>
        </figure>
      </article>

      <ul class="project-list" aria-label="Otros proyectos">
        {#each otherProjects as project}
          <li>
            <a class="project-row" href={project.href} target="_blank" rel="noreferrer noopener">
              <span class="project-info">
                <span class="project-name">{project.name}</span>
                <span class="project-summary">{project.summary}</span>
              </span>
              <span class="project-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        {/each}
      </ul>
    </section>

    <section class="section" id="stack" aria-labelledby="stack-title">
      <div class="section-head">
        <span class="section-num">03</span>
        <h2 id="stack-title">Herramientas</h2>
        <span class="section-note">Uso diario</span>
      </div>

      <dl class="stack">
        {#each stack as item}
          <div class="stack-row">
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        {/each}
      </dl>
    </section>

    <section class="section" id="contacto" aria-labelledby="contacto-title">
      <div class="section-head">
        <span class="section-num">04</span>
        <h2 id="contacto-title">Contacto</h2>
        <span class="section-note">Sin formularios</span>
      </div>

      <div class="contact-grid">
        <div>
          <h3 class="contact-lead">{contact.lead}</h3>
          <p class="contact-text">{contact.text}</p>

          <div class="contact-links">
            <a href={site.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn<span aria-hidden="true">↗</span>
            </a>
            <a href={site.github} target="_blank" rel="noreferrer noopener">
              GitHub<span aria-hidden="true">↗</span>
            </a>
            {#if site.email}
              <a href={`mailto:${site.email}`}>Correo<span aria-hidden="true">↗</span></a>
            {/if}
          </div>
        </div>

        <figure class="portrait">
          <span class="portrait-frame">
            <img
              src={portrait}
              alt="Victor Nuñez"
              width="800"
              height="800"
              decoding="async"
            />
          </span>
          <figcaption>Victor, Valparaíso.</figcaption>
        </figure>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-top">
      <p class="footer-copy">
        <svg class="mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <rect x="3" y="4" width="10" height="6" fill="currentColor"></rect>
          <rect x="16" y="4" width="13" height="6" fill="currentColor"></rect>
          <rect x="3" y="13" width="7.5" height="7" fill="currentColor"></rect>
          <rect x="13.5" y="13" width="15.5" height="7" fill="var(--accent)"></rect>
          <rect x="3" y="23" width="26" height="6" fill="currentColor"></rect>
        </svg>
        © {year} {site.name}
      </p>
      <a href="#top">Volver arriba <span aria-hidden="true">↑</span></a>
    </div>

    <div class="footer-bottom">
      <p>Hecho con Svelte. Newsreader e IBM Plex Mono.<br />Sin cookies ni analytics.</p>
      <p class="footer-place">{site.location}<br />33°02′S 71°37′O</p>
    </div>
  </footer>
</div>

<style>
  .shell {
    position: relative;
    width: min(calc(100% - 40px), 680px);
    margin: 0 auto;
    padding: 44px 0 40px;
  }

  .skip {
    position: fixed;
    top: 12px;
    left: 50%;
    z-index: 50;
    padding: 8px 12px;
    transform: translate(-50%, -200%);
    background: var(--fg);
    color: var(--bg);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-decoration: none;
    text-transform: uppercase;
    opacity: 0;
    pointer-events: none;
  }

  .skip:focus {
    transform: translate(-50%, 0);
    opacity: 1;
    pointer-events: auto;
  }

  /* Masthead ---------------------------------------------------------- */

  .masthead {
    border-bottom: 1px solid var(--line-strong);
  }

  .masthead-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding-bottom: 18px;
  }

  .wordmark {
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.015em;
    text-decoration: none;
    white-space: nowrap;
  }

  .wordmark span {
    color: var(--faint);
  }

  .masthead-tools {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .place {
    color: var(--muted);
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .theme-toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 8px;
    border: 1px solid var(--line-strong);
    background: transparent;
    color: var(--fg);
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.08em;
    line-height: 1;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 0;
    transition:
      background-color 160ms ease,
      border-color 160ms ease,
      color 160ms ease;
  }

  .theme-toggle:hover {
    border-color: var(--fg);
    background: var(--fg);
    color: var(--bg);
  }

  .theme-toggle svg {
    width: 11px;
    height: 11px;
    transition: transform 240ms ease;
  }

  .theme-toggle.is-light svg {
    transform: rotate(180deg);
  }

  .index {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 20px;
    padding: 12px 0;
    border-top: 1px solid var(--line);
  }

  .index a {
    display: inline-flex;
    gap: 6px;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 160ms ease;
  }

  .index a span {
    color: var(--faint);
  }

  .index a:hover {
    color: var(--fg);
  }

  /* Intro ------------------------------------------------------------- */

  .intro {
    padding: 80px 0 74px;
  }

  .kicker {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--line);
    color: var(--muted);
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    margin-top: 32px;
    font-size: clamp(2.7rem, 8.5vw, 4.3rem);
    font-weight: 400;
    line-height: 0.98;
    letter-spacing: -0.035em;
  }

  h1 em {
    font-weight: 300;
  }

  .lede {
    max-width: 53ch;
    margin-top: 32px;
    font-size: 18px;
    line-height: 1.62;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 28px;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .status-mark {
    width: 6px;
    height: 6px;
    background: var(--accent);
  }

  /* Sections ---------------------------------------------------------- */

  .section {
    margin-top: 88px;
  }

  .section-head {
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr) auto;
    gap: 10px;
    align-items: baseline;
    padding-top: 30px;
    border-top: 1px solid var(--line-strong);
  }

  .section-num {
    color: var(--faint);
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.06em;
  }

  .section-head h2 {
    font-size: 23px;
    font-weight: 400;
    letter-spacing: -0.015em;
    line-height: 1;
  }

  .section-note {
    color: var(--muted);
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  /* Experience -------------------------------------------------------- */

  .jobs {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .job {
    display: grid;
    grid-template-columns: 150px minmax(0, 1fr);
    gap: 26px;
    padding: 28px 0;
    border-bottom: 1px solid var(--line);
  }

  .job:first-child {
    padding-top: 32px;
  }

  .job-period {
    padding-top: 6px;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .job-role {
    font-size: 20px;
    font-weight: 450;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  .job-company {
    margin-top: 3px;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .job-summary {
    max-width: 44ch;
    margin-top: 10px;
    color: var(--muted);
    font-size: 15.5px;
    line-height: 1.6;
  }

  .education {
    display: grid;
    grid-template-columns: 150px minmax(0, 1fr);
    gap: 26px;
    padding-top: 20px;
    color: var(--muted);
    font-size: 14.5px;
    line-height: 1.6;
  }

  .education span:first-child {
    color: var(--faint);
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* Projects ---------------------------------------------------------- */

  .feature {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 176px;
    gap: 38px;
    align-items: start;
    padding: 36px 0 40px;
    border-bottom: 1px solid var(--line);
  }

  .feature-label {
    color: var(--muted);
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .feature-name {
    margin-top: 10px;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: -0.025em;
    line-height: 1;
  }

  .feature-tagline {
    margin-top: 8px;
    color: var(--muted);
    font-size: 15px;
    font-style: italic;
  }

  .feature-summary {
    max-width: 44ch;
    margin-top: 16px;
    font-size: 16px;
    line-height: 1.62;
  }

  .feature-meta {
    margin-top: 16px;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.05em;
    line-height: 1.6;
    text-transform: uppercase;
  }

  .feature-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 18px;
    margin-top: 22px;
  }

  .feature-links a {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding-bottom: 3px;
    border-bottom: 1px solid var(--line-strong);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-decoration: none;
    text-transform: uppercase;
    transition: border-color 160ms ease;
  }

  .feature-links a span {
    transition: transform 160ms ease;
  }

  .feature-links a:hover {
    border-color: var(--fg);
  }

  .feature-links a:hover span {
    transform: translate(2px, -2px);
  }

  .feature-figure {
    margin: 0;
  }

  .reader {
    display: flex;
    flex-direction: column;
    gap: 6px;
    aspect-ratio: 4 / 5;
    padding: 7px;
    border: 1px solid #26394d;
    background: #0b1622;
    color: #c9d6e2;
    font-family: var(--mono);
    font-size: 7.5px;
    letter-spacing: 0.06em;
    line-height: 1;
    transform: rotate(1.25deg);
    transition: transform 240ms ease;
  }

  .feature-figure:hover .reader {
    transform: rotate(0);
  }

  .reader-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    min-height: 10px;
  }

  .reader-brand {
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .reader-page {
    display: grid;
    flex: 1;
    grid-template-columns: 1.2fr 0.8fr 0.7fr;
    grid-template-rows: 1fr 0.8fr 1.1fr;
    gap: 5px;
  }

  .panel {
    background-color: #f2efe6;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent 0 4px,
      rgba(11, 22, 34, 0.07) 4px 5px
    );
  }

  .panel-1 {
    grid-column: 1 / span 2;
  }

  .panel-2 {
    grid-column: 3;
  }

  .panel-3 {
    grid-column: 1;
    grid-row: 2 / span 2;
  }

  .panel-4 {
    grid-column: 2 / span 2;
    grid-row: 2;
    background-color: var(--accent);
    background-image: none;
  }

  .panel-5 {
    grid-column: 2 / span 2;
    grid-row: 3;
  }

  .reader-spacer {
    flex: 1;
  }

  .feature-figure figcaption {
    margin-top: 10px;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 8px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .project-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .project-list li {
    border-bottom: 1px solid var(--line);
  }

  .project-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 18px;
    align-items: start;
    padding: 22px 0;
    text-decoration: none;
  }

  .project-name {
    font-size: 19px;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  .project-summary {
    display: block;
    margin-top: 5px;
    color: var(--muted);
    font-size: 14.5px;
    line-height: 1.5;
  }

  .project-arrow {
    color: var(--faint);
    font-family: var(--mono);
    font-size: 14px;
    transition:
      color 160ms ease,
      transform 160ms ease;
  }

  .project-row:hover .project-name {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
  }

  .project-row:hover .project-arrow {
    color: var(--fg);
    transform: translate(2px, -2px);
  }

  /* Stack ------------------------------------------------------------- */

  .stack {
    margin: 24px 0 0;
  }

  .stack-row {
    display: grid;
    grid-template-columns: 132px minmax(0, 1fr);
    gap: 20px;
    padding: 16px 0;
    border-bottom: 1px solid var(--line);
  }

  .stack-row dt {
    padding-top: 3px;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .stack-row dd {
    font-size: 16px;
    line-height: 1.5;
  }

  /* Contact ----------------------------------------------------------- */

  .contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 104px;
    gap: 36px;
    align-items: start;
    padding-top: 34px;
  }

  .contact-lead {
    max-width: 16ch;
    font-size: clamp(1.55rem, 4.5vw, 2.15rem);
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.12;
  }

  .contact-text {
    max-width: 40ch;
    margin-top: 16px;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.62;
  }

  .contact-links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 22px;
    margin-top: 28px;
  }

  .contact-links a {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding-bottom: 3px;
    border-bottom: 1px solid var(--line-strong);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-decoration: none;
    text-transform: uppercase;
    transition: border-color 160ms ease;
  }

  .contact-links a:hover {
    border-color: var(--fg);
  }

  .portrait {
    margin: 6px 0 0;
  }

  .portrait-frame {
    display: block;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border: 1px solid var(--line-strong);
  }

  .portrait img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 22%;
    filter: grayscale(1) contrast(1.03);
  }

  .portrait figcaption {
    margin-top: 8px;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 8px;
    letter-spacing: 0.06em;
    line-height: 1.5;
    text-transform: uppercase;
  }

  /* Footer ------------------------------------------------------------ */

  .footer {
    margin-top: 92px;
    padding-top: 22px;
    border-top: 1px solid var(--line-strong);
  }

  .footer-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .footer-copy {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .mark {
    width: 14px;
    height: 14px;
  }

  .footer-top a {
    text-decoration: none;
    transition: color 160ms ease;
  }

  .footer-top a:hover {
    color: var(--fg);
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    margin-top: 18px;
    color: var(--faint);
    font-family: var(--mono);
    font-size: 8.5px;
    letter-spacing: 0.03em;
    line-height: 1.7;
  }

  .footer-place {
    text-align: right;
    white-space: nowrap;
  }

  /* Wide screens: the page keeps a visible gutter --------------------- */

  @media (min-width: 900px) {
    .shell::before,
    .shell::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 1px;
      background: var(--line);
      pointer-events: none;
    }

    .shell::before {
      left: calc(50% - 376px);
    }

    .shell::after {
      right: calc(50% - 376px);
    }
  }

  /* Small screens ----------------------------------------------------- */

  @media (max-width: 720px) {
    .shell {
      padding-top: 28px;
    }

    .place {
      display: none;
    }

    .intro {
      padding: 56px 0 56px;
    }

    h1 {
      font-size: clamp(2.6rem, 12vw, 3.6rem);
    }

    .lede {
      font-size: 17px;
    }

    .section {
      margin-top: 64px;
    }

    .section-head {
      padding-top: 24px;
    }

    .job {
      grid-template-columns: 1fr;
      gap: 8px;
      padding: 24px 0;
    }

    .job-period {
      padding-top: 0;
    }

    .education {
      grid-template-columns: 1fr;
      gap: 4px;
    }

    .feature {
      grid-template-columns: 1fr;
      gap: 30px;
      padding: 30px 0 34px;
    }

    .feature-figure {
      max-width: 190px;
    }

    .stack-row {
      grid-template-columns: 110px minmax(0, 1fr);
      gap: 14px;
    }

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .portrait {
      width: 96px;
    }

    .footer-bottom {
      flex-direction: column;
      gap: 10px;
    }

    .footer-place {
      text-align: left;
    }
  }

  @media (max-width: 420px) {
    .index {
      gap: 6px 8px;
    }

    .index a {
      gap: 4px;
      font-size: 8.5px;
    }

    .section-note {
      font-size: 8.5px;
    }

    .stack-row {
      grid-template-columns: 1fr;
      gap: 2px;
    }

    .stack-row dt {
      padding-top: 0;
    }
  }
</style>
