import { ComponentChildren } from 'preact';

interface SectionProps {
    title?: string;
    children: ComponentChildren;
    className?: string;
}

export default function Section({ title, children, className }: SectionProps) {
    return (
        <section class={`section ${className || ''}`}>
            {title && <h2>{title}</h2>}
            <div class="section-content">{children}</div>
        </section>
    );
}
