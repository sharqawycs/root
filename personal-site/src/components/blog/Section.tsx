import { ComponentChildren } from 'preact';

interface SectionProps {
    title?: string;
    children: ComponentChildren;
    className?: string;
}

export default function Section({ title, children, className }: SectionProps) {
    return (
        <section class={`mb-8 ${className || ''}`}>
            {title && <h2 class="text-2xl font-bold mb-4">{title}</h2>}
            <div class="space-y-4">{children}</div>
        </section>
    );
}
