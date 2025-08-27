import type { JSX } from 'preact';

interface TextBlockProps {
  children: JSX.Element | string;
  size?: 'small' | 'normal' | 'large';
  variant?: 'p' | 'h1' | 'h2' | 'h3' | 'h4';
}

export default function TextBlock({ children, size = 'normal', variant = 'p' }: TextBlockProps) {
  const Tag = variant as any;

  const sizeClasses = {
    small: 'text-sm',
    normal: 'text-base',
    large: 'text-lg',
  };

  const variantClasses = {
    p: 'mb-4',
    h1: 'text-3xl font-bold mb-6',
    h2: 'text-2xl font-bold mb-4',
    h3: 'text-xl font-semibold mb-3',
    h4: 'text-lg font-semibold mb-2',
  };

  return <Tag class={`${sizeClasses[size]} ${variantClasses[variant]} text-gray-800`}>{children}</Tag>;
}
