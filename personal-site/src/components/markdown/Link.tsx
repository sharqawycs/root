import { ComponentChildren } from 'preact';

export const Link = ({ href, title, children }: { href: string; title?: string | null; children: ComponentChildren }) => (
  <a href={href} title={title || undefined} class="text-blue-600 hover:text-blue-800 underline transition-colors">
    {children}
  </a>
);

export default Link;
