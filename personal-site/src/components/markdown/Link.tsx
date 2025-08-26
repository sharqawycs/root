import { ComponentChildren } from 'preact';
import Highlight from '../ui/Highlight';

export const Link = ({ href, children }: { href: string; children: ComponentChildren }) => (
  <Highlight href={href} before={{ bgColor: '#FF9800', bgOpacity: 0.3 }} after={{ bgColor: '#FF9800', bgOpacity: 0.5 }}>
    {children}
  </Highlight>
);

export default Link;
