import { ComponentChildren } from 'preact';
import '@/styles/highlight.css';

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
    animation?: 'none' | 'slide-right' | 'slide-left' | 'fade' | 'expand' | 'underline' | 'scale';
}

export default function Highlight({ children, href, target, className = '', before, after, animation = 'none' }: HighlightProps) {
    // Helper function to convert hex to rgba
    const hexToRgba = (hex: string, opacity: number) => {
        if (!hex || hex === 'transparent') return 'transparent';
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    // Generate CSS custom properties with proper rgba values
    const style = {
        // Before styles
        '--before-bg': before.bgColor ? hexToRgba(before.bgColor, before.bgOpacity || 0) : 'transparent',
        '--before-text': before.textColor ? hexToRgba(before.textColor, before.textOpacity || 1) : 'inherit',

        // '--after-bg': after.bgColor ? hexToRgba(after.bgColor, after.bgOpacity || 0) : 'transparent',
        // '--after-text': after.textColor ? hexToRgba(after.textColor, after.textOpacity || 1) : 'inherit',

        // After styles
        '--after-bg': after.bgColor
            ? hexToRgba(after.bgColor, after.bgOpacity !== undefined ? after.bgOpacity : 1)
            : before.bgColor
              ? hexToRgba(before.bgColor, after.bgOpacity !== undefined ? after.bgOpacity : 1)
              : 'transparent',
        '--after-text': after.textColor
            ? hexToRgba(after.textColor, after.textOpacity !== undefined ? after.textOpacity : 1)
            : before.textColor
              ? hexToRgba(before.textColor, after.textOpacity !== undefined ? after.textOpacity : 1)
              : 'inherit',
    } as any;

    const classes = ['highlight', `highlight--${animation}`, className].filter(Boolean).join(' ');

    if (href) {
        return (
            <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} class={classes} style={style}>
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
