import type { ReactNode } from 'react';

interface PageHeaderProps {
  subtitle?: string;
  date?: string;
  children?: ReactNode;
}

export default function PageHeader({ subtitle, date, children }: PageHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="font-playfair mb-2 text-4xl">{children}</h1>
      {subtitle && <p className="font-playfair mb-2 text-xl text-gray-600 italic">{subtitle}</p>}
      {date && <time className="text-sm text-gray-500">{date}</time>}
    </header>
  );
}
