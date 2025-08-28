import type { JSX } from 'preact';

interface PageHeaderProps {
  subtitle?: string;
  date?: string;
  children?: JSX.Element | string;
}

export default function PageHeader({ subtitle, date, children }: PageHeaderProps) {
  return (
    <header class="mb-8">
      <h1 class="font-heading mb-2 text-4xl">{children}</h1>
      {subtitle && <p class="font-heading mb-2 text-xl text-gray-600 italic">{subtitle}</p>}
      {date && <time class="text-sm text-gray-500">{date}</time>}
    </header>
  );
}
