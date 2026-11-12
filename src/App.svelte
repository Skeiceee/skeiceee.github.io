<script>
  import {
    site,
    intro,
    contact,
    experience,
    education,
    featuredProject,
    otherProjects,
    stack,
    skills,
    sections
  } from './lib/data.js';

  const year = new Date().getFullYear();
</script>

<a class="skip" href="#contenido">Saltar al contenido</a>

<div class="wrap" id="top">
  <header class="masthead">
    <p class="session" aria-hidden="true">
      <span class="prompt">victor@valparaiso</span><span class="sep">:</span><span class="path">~</span><span class="sep">$</span>
      <span class="command">whoami</span>
      <span class="cursor"></span>
    </p>

    <h1>{site.name}</h1>

    <p class="tagline">{intro.title} <em>{intro.accent}</em></p>
    <p class="lede">{intro.lede}</p>

    <p class="status">
      <span class="dot" aria-hidden="true"></span>{intro.status}
    </p>

    <nav class="nav" aria-label="Secciones del sitio">
      {#each sections as section}
        <a href={`#${section.id}`}><span aria-hidden="true">./</span>{section.id}</a>
      {/each}
    </nav>
  </header>

  <main id="contenido">
    <section class="section" id="proyectos" aria-labelledby="proyectos-title">
      <div class="section-head">
        <span class="section-num" aria-hidden="true">01</span>
        <h2 id="proyectos-title">
          <span class="chev" aria-hidden="true">&gt;</span>Proyectos
        </h2>
        <span class="section-path" aria-hidden="true">~/proyectos</span>
      </div>

      <article class="featured">
        <p class="featured-label">
          <span class="marker" aria-hidden="true">*</span>destacado
        </p>
        <h3 class="featured-name">{featuredProject.name}</h3>
        <p class="featured-tagline">{featuredProject.tagline}</p>
        <p class="featured-summary">{featuredProject.summary}</p>
        <p class="meta">
          {featuredProject.stack.join(' · ')} · {featuredProject.license} · {featuredProject.year}
        </p>

        <div class="link-row">
          {#each featuredProject.links as link}
            <a href={link.href} target="_blank" rel="noreferrer noopener">
              {link.label}<span aria-hidden="true"> ↗</span>
            </a>
          {/each}
        </div>
      </article>

      <ul class="project-list" aria-label="Otros proyectos">
        {#each otherProjects as project}
          <li>
            <a href={project.href} target="_blank" rel="noreferrer noopener">
              <span class="project-name">{project.name}</span>
              <span class="project-summary">{project.summary}</span>
              <span class="project-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        {/each}
      </ul>
    </section>

    <section class="section" id="experiencia" aria-labelledby="experiencia-title">
      <div class="section-head">
        <span class="section-num" aria-hidden="true">02</span>
        <h2 id="experiencia-title">
          <span class="chev" aria-hidden="true">&gt;</span>Experiencia
        </h2>
        <span class="section-path" aria-hidden="true">~/experiencia</span>
      </div>

      <ol class="timeline">
        {#each experience as job}
          <li>
            <p class="period">{job.period}</p>
            <div>
              <h3 class="role">
                {job.role} <span class="company">@ {job.company}</span>
              </h3>
              <p class="summary">{job.summary}</p>
            </div>
          </li>
        {/each}
      </ol>

      <p class="education">
        <span class="education-label">formación</span>
        {education.title} · {education.school}
      </p>
    </section>

    <section class="section" id="herramientas" aria-labelledby="herramientas-title">
      <div class="section-head">
        <span class="section-num" aria-hidden="true">03</span>
        <h2 id="herramientas-title">
          <span class="chev" aria-hidden="true">&gt;</span>Herramientas
        </h2>
        <span class="section-path" aria-hidden="true">~/herramientas</span>
      </div>

      <dl class="stack">
        {#each stack as item}
          <div class="stack-row">
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        {/each}
      </dl>

      <h3 class="skills-title">Habilidades</h3>
      <ul class="skills">
        {#each skills as skill}
          <li>{skill}</li>
        {/each}
      </ul>
    </section>

    <section class="section" id="contacto" aria-labelledby="contacto-title">
      <div class="section-head">
        <span class="section-num" aria-hidden="true">04</span>
        <h2 id="contacto-title">
          <span class="chev" aria-hidden="true">&gt;</span>Contacto
        </h2>
        <span class="section-path" aria-hidden="true">~/contacto</span>
      </div>

      <div class="contact">
        <div>
          <h3 class="contact-lead">{contact.lead}</h3>
          <p class="contact-text">{contact.text}</p>
        </div>

        <ul class="contact-links">
          <li>
            <a href={site.linkedin} target="_blank" rel="noreferrer noopener">
              linkedin<span aria-hidden="true"> ↗</span>
            </a>
          </li>
          <li>
            <a href={site.github} target="_blank" rel="noreferrer noopener">
              github<span aria-hidden="true"> ↗</span>
            </a>
          </li>
          {#if site.email}
            <li>
              <a href={`mailto:${site.email}`}>correo<span aria-hidden="true"> ↗</span></a>
            </li>
          {/if}
        </ul>
      </div>

      <p class="contact-meta">{site.location} · 33°02′S 71°37′O</p>
    </section>
  </main>

  <footer class="footer">
    <p class="exit"><span class="prompt" aria-hidden="true">$</span> exit</p>
    <p>© {year} {site.name}</p>
    <p>Hecho con Svelte · sin cookies ni analytics</p>
    <a href="#top">volver al inicio <span aria-hidden="true">↑</span></a>
  </footer>
</div>

<style>
  .wrap {
    width: min(calc(100% - 48px), 800px);
    margin: 0 auto;
    padding: 64px 0 48px;
  }

  .skip {
    position: fixed;
    top: 10px;
    left: 50%;
    z-index: 20;
    padding: 8px 12px;
    border: 1px solid var(--accent);
    transform: translate(-50%, -220%);
    background: var(--bg);
    color: var(--accent);
    font-size: 12px;
    text-decoration: none;
  }

  .skip:focus {
    transform: translate(-50%, 0);
  }

  /* Cabecera --------------------------------------------------------- */

  .masthead {
    padding-bottom: 42px;
    border-bottom: 1px solid var(--line-strong);
  }

  .session {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.5;
  }

  .prompt {
    color: var(--accent);
  }

  .sep {
    color: var(--faint);
  }

  .path {
    color: var(--muted);
  }

  .command {
    margin-left: 8px;
    color: var(--fg);
  }

  .cursor {
    width: 8px;
    height: 14px;
    margin-left: 6px;
    background: var(--accent);
    animation: blink 1.1s steps(1, end) infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  h1 {
    margin-top: 22px;
    font-size: clamp(2.6rem, 8vw, 4.1rem);
    font-weight: 500;
    letter-spacing: -0.045em;
    line-height: 0.96;
  }

  .tagline {
    margin-top: 14px;
    color: var(--muted);
    font-size: clamp(1.05rem, 2.5vw, 1.3rem);
    line-height: 1.4;
  }

  .tagline em {
    color: var(--accent);
    font-style: normal;
  }

  .lede {
    max-width: 62ch;
    margin-top: 24px;
    color: var(--fg);
    font-size: 15px;
    line-height: 1.8;
    text-wrap: pretty;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 24px;
    color: var(--muted);
    font-size: 12px;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 3px rgba(126, 231, 135, 0.12);
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 18px;
    margin-top: 32px;
    padding-top: 16px;
    border-top: 1px solid var(--line);
  }

  .nav a {
    color: var(--muted);
    font-size: 12px;
    text-decoration: none;
    transition: color 160ms ease;
  }

  .nav a:hover {
    color: var(--accent);
  }

  /* Secciones -------------------------------------------------------- */

  .section {
    padding-top: 84px;
  }

  .section-head {
    display: grid;
    grid-template-columns: 26px minmax(0, 1fr) auto;
    gap: 12px;
    align-items: baseline;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--line-strong);
  }

  .section-num {
    color: var(--faint);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
  }

  .section-head h2 {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  .chev {
    margin-right: 10px;
    color: var(--accent);
    font-weight: 400;
  }

  .section-path {
    color: var(--faint);
    font-size: 11px;
    white-space: nowrap;
  }

  /* Proyectos -------------------------------------------------------- */

  .featured {
    padding: 28px 0 32px;
    border-bottom: 1px solid var(--line);
  }

  .featured-label {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--muted);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .marker {
    color: var(--accent);
  }

  .featured-name {
    margin-top: 14px;
    font-size: clamp(2rem, 5vw, 2.8rem);
    font-weight: 500;
    letter-spacing: -0.035em;
    line-height: 1;
  }

  .featured-tagline {
    margin-top: 8px;
    color: var(--muted);
    font-size: 14px;
    font-style: italic;
  }

  .featured-summary {
    max-width: 60ch;
    margin-top: 18px;
    color: var(--fg);
    font-size: 15px;
    line-height: 1.75;
    text-wrap: pretty;
  }

  .meta {
    margin-top: 16px;
    color: var(--faint);
    font-size: 11px;
    letter-spacing: 0.02em;
  }

  .link-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 18px;
    margin-top: 22px;
  }

  .link-row a {
    color: var(--accent);
    font-size: 12px;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 160ms ease;
  }

  .link-row a:hover {
    border-color: var(--accent);
  }

  .link-row span {
    color: var(--muted);
  }

  .project-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .project-list li {
    border-bottom: 1px solid var(--line);
  }

  .project-list a {
    display: grid;
    grid-template-columns: 190px minmax(0, 1fr) 16px;
    gap: 6px 20px;
    align-items: start;
    padding: 18px 0;
    text-decoration: none;
  }

  .project-name {
    color: var(--fg);
    font-size: 14px;
    line-height: 1.5;
    transition: color 160ms ease;
  }

  .project-summary {
    color: var(--muted);
    font-size: 13px;
    line-height: 1.6;
  }

  .project-arrow {
    justify-self: end;
    color: var(--faint);
    font-size: 12px;
    transition:
      color 160ms ease,
      transform 160ms ease;
  }

  .project-list a:hover .project-name,
  .project-list a:hover .project-arrow {
    color: var(--accent);
  }

  .project-list a:hover .project-arrow {
    transform: translate(2px, -2px);
  }

  /* Experiencia ------------------------------------------------------ */

  .timeline {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .timeline li {
    display: grid;
    grid-template-columns: 180px minmax(0, 1fr);
    gap: 24px;
    padding: 20px 0;
    border-bottom: 1px solid var(--line);
  }

  .period {
    padding-top: 2px;
    color: var(--muted);
    font-size: 11.5px;
    white-space: nowrap;
  }

  .role {
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 1.4;
  }

  .company {
    color: var(--muted);
    font-weight: 400;
  }

  .summary {
    max-width: 58ch;
    margin-top: 6px;
    color: var(--muted);
    font-size: 13.5px;
    line-height: 1.65;
    text-wrap: pretty;
  }

  .education {
    margin-top: 18px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.7;
  }

  .education-label {
    margin-right: 8px;
    color: var(--faint);
  }

  /* Herramientas ----------------------------------------------------- */

  .stack {
    margin: 8px 0 0;
  }

  .stack-row {
    display: grid;
    grid-template-columns: 130px minmax(0, 1fr);
    gap: 20px;
    padding: 12px 0;
    border-bottom: 1px solid var(--line);
  }

  .stack-row dt {
    padding-top: 2px;
    color: var(--faint);
    font-size: 11px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .stack-row dd {
    color: var(--fg);
    font-size: 14px;
    line-height: 1.6;
  }

  .skills-title {
    margin-top: 36px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0 0;
    padding: 0;
    list-style: none;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.9;
  }

  .skills li::after {
    content: '·';
    margin: 0 9px;
    color: var(--line-strong);
  }

  .skills li:last-child::after {
    content: '';
    margin: 0;
  }

  /* Contacto --------------------------------------------------------- */

  .contact {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 32px;
    align-items: end;
    padding: 28px 0 24px;
    border-bottom: 1px solid var(--line);
  }

  .contact-lead {
    max-width: 24ch;
    font-size: clamp(1.4rem, 4vw, 2rem);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.15;
    text-wrap: pretty;
  }

  .contact-text {
    max-width: 48ch;
    margin-top: 14px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.7;
  }

  .contact-links {
    display: grid;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .contact-links a {
    display: inline-flex;
    color: var(--accent);
    font-size: 12px;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 160ms ease;
  }

  .contact-links a:hover {
    border-color: var(--accent);
  }

  .contact-links span {
    color: var(--muted);
  }

  .contact-meta {
    margin-top: 14px;
    color: var(--faint);
    font-size: 11px;
  }

  /* Pie -------------------------------------------------------------- */

  .footer {
    display: grid;
    gap: 4px;
    margin-top: 90px;
    padding-top: 18px;
    border-top: 1px solid var(--line-strong);
    color: var(--faint);
    font-size: 11px;
    line-height: 1.7;
  }

  .exit {
    color: var(--muted);
    font-size: 12px;
  }

  .exit .prompt {
    margin-right: 6px;
  }

  .footer a {
    justify-self: start;
    color: var(--muted);
    text-decoration: none;
    transition: color 160ms ease;
  }

  .footer a:hover {
    color: var(--accent);
  }

  /* Responsive ------------------------------------------------------- */

  @media (max-width: 640px) {
    .wrap {
      width: calc(100% - 32px);
      padding: 40px 0 36px;
    }

    .masthead {
      padding-bottom: 32px;
    }

    .section {
      padding-top: 64px;
    }

    .section-head {
      grid-template-columns: 22px minmax(0, 1fr);
      gap: 8px;
    }

    .section-path {
      display: none;
    }

    .featured-name {
      font-size: 2.1rem;
    }

    .project-list a {
      grid-template-columns: minmax(0, 1fr) 16px;
      gap: 2px 12px;
    }

    .project-name {
      grid-column: 1;
    }

    .project-summary {
      grid-column: 1 / -1;
    }

    .project-arrow {
      grid-column: 2;
      grid-row: 1;
    }

    .timeline li {
      grid-template-columns: 1fr;
      gap: 5px;
      padding: 18px 0;
    }

    .period {
      padding-top: 0;
    }

    .stack-row {
      grid-template-columns: 1fr;
      gap: 2px;
    }

    .stack-row dt {
      padding-top: 0;
    }

    .contact {
      grid-template-columns: 1fr;
      gap: 24px;
      align-items: start;
    }
  }

  @media (max-width: 380px) {
    .nav {
      gap: 4px 14px;
    }

    h1 {
      font-size: 2.4rem;
    }

    .skills li::after {
      margin: 0 7px;
    }
  }
</style>
