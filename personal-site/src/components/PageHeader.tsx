import type { JSX } from 'preact';

interface PageHeaderProps {
  subtitle?: string;
  date?: string;
  children?: JSX.Element | string;
}

export default function PageHeader({ subtitle, date, children }: PageHeaderProps) {
  return (
    <header class="mb-8">
      <h1 class="mb-2 font-serif text-4xl">{children}</h1>
      {subtitle && <p class="text-muted-foreground mb-2 font-serif text-xl italic">{subtitle}</p>}
      {date && <time class="text-sm">{date}</time>}
    </header>
  );
}
