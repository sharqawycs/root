import { ComponentChildren } from 'preact';

interface StyleVariant {
    bgColor?: string;
    textColor?: string;
    bgOpacity?: number;
    textOpacity?: number;
}

interface HighlightProps {
    children: ComponentChildren;
    href?: string;
    target?: string;
    className?: string;

    // Before hover styles
    before: StyleVariant;

    // After hover styles
    after: StyleVariant;

    // Animation style
    animation?:
        | 'slide-right'
        | 'slide-left'
        | 'fade'
        | 'expand'
        | 'underline'
        | 'scale';
}

export default function Highlight({
    children,
    href,
    target,
    className = '',
    before,
    after,
    animation = 'fade',
}: HighlightProps) {
    // Generate CSS custom properties
    const style = {
        // Before styles
        '--before-bg': before.bgColor || 'transparent',
        '--before-text': before.textColor || 'inherit',
        '--before-bg-opacity': (before.bgOpacity || 0).toString(),
        '--before-text-opacity': (before.textOpacity || 1).toString(),

        // After styles
        '--after-bg': after.bgColor || before.bgColor || 'transparent',
        '--after-text': after.textColor || before.textColor || 'inherit',
        '--after-bg-opacity': (after.bgOpacity !== undefined
            ? after.bgOpacity
            : before.bgOpacity || 1
        ).toString(),
        '--after-text-opacity': (after.textOpacity !== undefined
            ? after.textOpacity
            : before.textOpacity || 1
        ).toString(),
    } as any;

    const classes = ['highlight-v2', `highlight-v2--${animation}`, className]
        .filter(Boolean)
        .join(' ');

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                class={classes}
                style={style}>
                {children}
            </a>
        );
    }

    return (
        <span class={classes} style={style}>
            {children}
        </span>
    );
}
