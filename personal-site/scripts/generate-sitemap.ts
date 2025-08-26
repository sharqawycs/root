import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { getAllJournalsInfo } from '../src/utils/services/JournalServices';

const DOMAIN = 'https://sharq.tech';

function buildUrl(loc: string, changefreq = 'monthly', priority = '0.5') {
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
}

function main() {
  const pages = [
    { loc: `${DOMAIN}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${DOMAIN}/journal`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/gallery`, changefreq: 'monthly', priority: '0.6' },
    { loc: `${DOMAIN}/content`, changefreq: 'monthly', priority: '0.6' },
  ];

  // Attempt to read journals (may be empty if none exist)
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const p of pages) {
    xml += buildUrl(p.loc, p.changefreq, p.priority);
  }

  try {
    const journals = getAllJournalsInfo();
    for (const j of journals) {
      xml += buildUrl(`${DOMAIN}/journal/${j.slug}`, 'monthly', '0.5');
    }
  } catch (e) {
    // If journals can't be read at script time, just skip
    console.warn('Could not read journals to generate sitemap:', (e as Error).message);
  }

  xml += '</urlset>\n';

  const out = resolve(process.cwd(), 'public', 'sitemap.xml');
  writeFileSync(out, xml, 'utf8');
  console.log('Wrote sitemap to', out);
}

if (require.main === module) main();
