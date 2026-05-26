// SITE.url is the site ORIGIN only (no path). The base path is configured in
// astro.config.mjs and applied at use time via link()/absoluteUrl() in
// src/lib/path.ts. Keep this in sync with the SITE_URL in astro.config.mjs.
export const SITE = {
  url: import.meta.env.SITE ?? 'https://victomteng1997.github.io',
  title: 'Crypto Exchange Review',
  tagline:
    'Crypto exchanges compared for security, fees, custody, and user experience. / Exchanges de criptomonedas comparados por seguridad, comisiones, custodia y experiencia de uso.',
  description:
    'Independent crypto exchange reviews for spot traders, long-term holders, and active Web3 users. También publicamos guías en español para lectores de América Latina y España que comparan comisiones, seguridad, custodia y disponibilidad regional.',
  author: {
    name: 'Gelei',
    aboutPath: '/about',
    email: 'gelei@quantstamp.com',
    sameAs: [] as string[],
  },
  locale: 'es_ES',
  defaultOgImage: '/og-default.png',
  cloudflareAnalyticsToken: '',
  navLinks: [
    { label: 'Reviews / Reseñas', href: '/reviews' },
    { label: 'About / Acerca', href: '/about' },
    { label: 'RSS', href: '/rss.xml' },
  ] as const,
} as const;
