import { cn } from '@/lib/utils'; // or 'classnames' package
import type { JSX } from 'preact';

interface HighlightProps {
  children: JSX.Element | string;
  href: string;
  target?: string;
  className?: string;
}

export default function Highlight({ children, href, target, className = '' }: HighlightProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      class={cn(
        'not-prose inline-block rounded-lg px-2 py-1 whitespace-nowrap transition-opacity duration-200 ease-out hover:opacity-80',
        className
      )}>
      {children}
    </a>
  );
}
