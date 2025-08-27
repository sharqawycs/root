import type { ReactNode } from 'react';

interface PageHeaderProps {
  subtitle?: string;
  date?: string;
  children?: ReactNode;
}

export default function PageHeader({ subtitle, date, children }: PageHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-playfair mb-2">{children}</h1>
      {subtitle && <p className="text-xl font-playfair italic text-gray-600 mb-2">{subtitle}</p>}
      {date && <time className="text-sm text-gray-500">{date}</time>}
    </header>
  );
}
