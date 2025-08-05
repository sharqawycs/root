import { ComponentChildren } from 'preact';

interface ColorLinkProps {
    href: string;
    children: ComponentChildren;
    color: string;
    bgBehavior?: 'always' | 'hover' | 'none';
    animation?: 'slide-right' | 'slide-left' | 'slide-up' | 'slide-down' | 'expand' | 'circle' | 'fade' | 'scale' | 'underline' | 'glow';
    variant?: 'pill' | 'square' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    opacity?: number; // 0-1 for background opacity
    target?: string;
    className?: string;
}

export function ColorLink({ 
    href, 
    children, 
    color,
    bgBehavior = 'none',
    animation = 'fade',
    variant = 'square',
    size = 'md',
    opacity = 1,
    target,
    className = ''
}: ColorLinkProps) {
    
    // Generate CSS custom properties for the color with opacity
    const colorWithOpacity = opacity < 1 ? 
        `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}` : 
        color;
    
    const classes = [
        'color-link',
        `color-link--${variant}`,
        `color-link--${size}`,
        `color-link--${bgBehavior}`,
        `color-link--${animation}`,
        className
    ].filter(Boolean).join(' ');

    const style = {
        '--link-color': color,
        '--link-bg': colorWithOpacity,
        '--link-opacity': opacity.toString()
    } as any;

    return (
        <a 
            href={href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            class={classes}
            style={style}
        >
            <span class="color-link__content">{children}</span>
        </a>
    );
}
