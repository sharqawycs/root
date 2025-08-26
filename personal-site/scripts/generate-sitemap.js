#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

// Configure this to your live domain or set VITE_SITE_URL in .env
const DOMAIN = process.env.VITE_SITE_URL || 'https://sharq.tech';

function slugFromFilename(name) {
  // expects something like "my-note110925.md" -> slug: my-note
  const withoutExt = name.replace(/\.md$/, '');
  if (withoutExt.length < 6) return null;
  const slug = withoutExt.slice(0, -6);
  return slug.replace(/ /g, '-');
}

function buildUrl(loc, changefreq = 'monthly', priority = '0.5') {
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
}

function main() {
  console.log('sitemap generation started...');

  const outDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const pages = [
    { loc: `${DOMAIN}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${DOMAIN}/journal`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/gallery`, changefreq: 'weekly', priority: '0.6' },
    { loc: `${DOMAIN}/content`, changefreq: 'weekly', priority: '0.6' },
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const p of pages) xml += buildUrl(p.loc, p.changefreq, p.priority);

  // read journals directory (filesystem-based)
  const journalsDir = path.resolve(process.cwd(), 'src', 'data', 'journals');
  if (fs.existsSync(journalsDir)) {
    const files = fs.readdirSync(journalsDir).filter(f => f.endsWith('.md'));
    for (const f of files) {
      const slug = slugFromFilename(f);
      if (!slug) continue;
      xml += buildUrl(`${DOMAIN}/journal/${slug}`, 'monthly', '0.5');
    }
  } else {
    console.warn('No journals directory found at', journalsDir, '- skipping journal entries');
  }

  xml += '</urlset>\n';
  const out = path.resolve(outDir, 'sitemap.xml');
  fs.writeFileSync(out, xml, 'utf8');
  console.log('Wrote sitemap to', out);
}

main();
