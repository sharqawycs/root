import { useEffect } from 'preact/hooks';

const globalTitle = 'Sharqawy',
  globalDescription = 'Sharqawy — personal site of a CS student and builder.';
interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
}

// Minimal SEO helper that updates document head during client hydration and
// renders meta tags server-side when prerendering (Preact/JSX output will be
// injected).
export default function Seo({ title, description, url }: SeoProps) {
  const fullTitle = title ? `${title} - ${globalTitle}` : globalTitle;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = fullTitle;

      const setMeta = (name: string, content: string | undefined, prop = false) => {
        if (!content) return;
        const selector = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
        let el = document.head.querySelector(selector) as HTMLMetaElement | null;
        if (!el) {
          el = document.createElement('meta');
          if (prop) el.setAttribute('property', name);
          else el.setAttribute('name', name);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };

      setMeta('description', description);
      setMeta('og:title', fullTitle, true);
      setMeta('og:description', description, true);
      if (url) setMeta('og:url', url, true);
      // global image already in index.html
    }
  }, [title, description, url]);

  // Server-side/meta-in-HTML for prerender: render meta tags directly.
  return (
    <>
      <meta name="description" content={description || globalDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || ''} />
      {url && <meta property="og:url" content={url} />}
    </>
  );
}
