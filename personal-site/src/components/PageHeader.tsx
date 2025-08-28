import type { JSX } from 'preact';

interface PageHeaderProps {
  subtitle?: string;
  date?: string;
  children?: JSX.Element | string;
}

export default function PageHeader({ subtitle, date, children }: PageHeaderProps) {
  return (
    <header class="not-prose mb-8">
      <h1 class="text-foreground mb-2 font-serif text-4xl font-semibold">{children}</h1>
      {subtitle && <p class="text-muted-foreground mb-2 font-serif text-xl italic">{subtitle}</p>}
      {date && <time class="text-muted-foreground text-sm">{date}</time>}
    </header>
  );
}
