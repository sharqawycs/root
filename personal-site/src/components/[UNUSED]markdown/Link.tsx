import type { JSX } from 'preact';
import Highlight from '@/components/ui/Highlight';

export const Link = ({ href, children }: { href: string; children: JSX.Element | string }) => (
  <Highlight href={href} before={{ bgColor: '#FF9800', bgOpacity: 0.3 }} after={{ bgColor: '#FF9800', bgOpacity: 0.5 }}>
    {children}
  </Highlight>
);

export default Link;
