import { useEffect } from 'preact/hooks';

const globalTitle = 'Sharqawy';
const globalDescription = 'Sharqawy — personal site of a CS student and builder.';
export interface SeoProps {
  title?: string;
  description?: string;
  url?: string; // optional canonical/url override
}

// Seo computes canonical URL with priority: prop.url > VITE_SITE_URL (+path) > window origin+path
export default function Seo({ title, description, url }: SeoProps) {
  const fullTitle = title ? `${title} - ${globalTitle}` : globalTitle;

  // Determine detectedUrl synchronously so server render also gets the value
  const detectedUrl = (() => {
    if (url) return url;

    // try Vite env var: import.meta.env.VITE_SITE_URL
    // cast to any to avoid TS errors if env is unavailable
    try {
      const env: any = (typeof import.meta !== 'undefined' ? (import.meta as any).env : undefined) || {};
      if (env && env.VITE_SITE_URL) {
        // remove trailing slash
        const base = String(env.VITE_SITE_URL).replace(/\/$/, '');
        if (typeof window !== 'undefined' && window.location && window.location.pathname) return `${base}${window.location.pathname}`;
        return base;
      }
    } catch (e) {
      // ignore
    }

    if (typeof window !== 'undefined' && window.location) {
      return `${window.location.origin}${window.location.pathname}`;
    }

    return undefined;
  })();

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = fullTitle;

    const setMeta = (attr: 'name' | 'property', key: string, content?: string) => {
      if (!content) return;
      const selector = `${attr}='${key}'`;
      let el = document.head.querySelector(`meta[${selector}]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description || globalDescription);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description || globalDescription);
    if (detectedUrl) setMeta('property', 'og:url', detectedUrl);

    // canonical link
    if (detectedUrl) {
      let link = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = detectedUrl;
    }
  }, [title, description, url]);

  return (
    <>
      <meta property="og:title" content={fullTitle} />
      <meta name="description" content={description || globalDescription} />
      <meta property="og:description" content={description || globalDescription} />
      {detectedUrl && <meta property="og:url" content={detectedUrl} />}
      {detectedUrl && <link rel="canonical" href={detectedUrl} />}
    </>
  );
}
