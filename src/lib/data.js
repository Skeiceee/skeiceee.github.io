export const site = {
  name: 'Victor Nuñez',
  location: 'Valparaíso, Chile',
  github: 'https://github.com/Skeiceee',
  linkedin: 'https://www.linkedin.com/in/victor-alejandro-nunez-tobar/',
  email: ''
};

export const intro = {
  title: 'Software que',
  accent: 'no da la lata.',
  lede: 'Trabajo en backend desde 2019. PHP y Laravel para el día a día; Go cuando quiero construir algo mío. Me gustan los sistemas claros, que se entienden rápido y no piden atención.',
  status: 'Disponible para nuevos proyectos'
};

export const contact = {
  lead: '¿Un proyecto, una vacante o una charla sobre cómics?',
  text: 'Escríbeme por LinkedIn. El código y los experimentos están en GitHub.'
};

export const experience = [
  {
    role: 'Desarrollador Full Stack',
    company: 'GO Partners',
    period: 'oct 2022 — mar 2024',
    summary:
      'Corrección de errores en MásConectados (Banco de Chile) y APIs REST para equipos de análisis.'
  },
  {
    role: 'Desarrollador Web',
    company: 'apanio.com',
    period: 'ago 2021 — jun 2022',
    summary: 'Medios de pago, nuevas funcionalidades y limpieza de estilos.'
  },
  {
    role: 'Analista de Desarrollo',
    company: 'Activa Research',
    period: 'feb 2021 — abr 2021',
    summary: 'Procesamiento de encuestas con Excel y bases de datos.'
  },
  {
    role: 'Programador',
    company: 'VozDigital',
    period: 'mar 2019 — nov 2020',
    summary:
      'Facturación, llamadas e informes: unos quince módulos construidos desde cero.'
  }
];

export const education = {
  title: 'Técnico Universitario en Informática',
  school: 'Universidad Técnica Federico Santa María'
};

export const featuredProject = {
  name: 'Gutter',
  tagline: 'Lector de cómics para escritorio',
  summary:
    'Abre .cbr y .cbz sin extraerlos completos: indexa el archivo, carga solo la página visible y recuerda dónde quedaste. Con OCR y traducción de bocadillos.',
  stack: ['Go', 'Fyne'],
  license: 'MIT',
  year: '2026',
  links: [
    { label: 'Repositorio', href: 'https://github.com/Skeiceee/gutter' },
    {
      label: 'Descargar',
      href: 'https://github.com/Skeiceee/gutter/releases/latest'
    },
    { label: 'Sitio', href: 'https://skeiceee.github.io/gutter/' }
  ]
};

export const otherProjects = [
  {
    name: 'Genericlothing',
    summary: 'E-commerce de ropa para mi tesis. PHP, MySQL y Bootstrap.',
    href: 'https://github.com/Skeiceee/Genericlothing'
  },
  {
    name: 'SII · Situación Tributaria',
    summary: 'Consulta de situación tributaria de terceros. Laravel y Python.',
    href: 'https://github.com/Skeiceee/sii-situacion-tributaria-laravel'
  }
];

export const skills = [
  'PHP',
  'Laravel',
  'Go',
  'Python',
  'JavaScript',
  'Svelte',
  'Vue',
  'React',
  'Tailwind',
  'Bootstrap',
  'CSS',
  'MySQL',
  'PostgreSQL',
  'Git',
  'Linux',
  'VS Code'
];

export const stack = [
  { label: 'Backend', value: 'PHP · Laravel · Go · Python' },
  {
    label: 'Frontend',
    value: 'JavaScript · jQuery · Svelte · Vue · React'
  },
  { label: 'Estilos', value: 'Tailwind · Bootstrap · CSS' },
  { label: 'Datos', value: 'MySQL · PostgreSQL' },
  { label: 'Herramientas', value: 'Git · Linux · VS Code' }
];

export const sections = [
  { id: 'proyectos', number: '01', label: 'Proyectos' },
  { id: 'experiencia', number: '02', label: 'Experiencia' },
  { id: 'herramientas', number: '03', label: 'Herramientas' },
  { id: 'contacto', number: '04', label: 'Contacto' }
];
