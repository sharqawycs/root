import { ComponentChildren } from 'preact';

interface TextBlockProps {
    children: ComponentChildren;
    size?: 'small' | 'normal' | 'large';
    variant?: 'p' | 'h1' | 'h2' | 'h3' | 'h4';
}

export default function TextBlock({
    children,
    size = 'normal',
    variant = 'p',
}: TextBlockProps) {
    const Tag = variant as any;

    return <Tag class={`text-block text-${size}`}>{children}</Tag>;
}
