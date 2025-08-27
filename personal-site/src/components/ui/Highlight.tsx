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

  // Generate before styles
  const beforeBg = before.bgColor ? hexToRgba(before.bgColor, before.bgOpacity || 0) : 'transparent';
  const beforeText = before.textColor ? hexToRgba(before.textColor, before.textOpacity || 1) : 'inherit';

  // Generate after styles
  const afterBg = after.bgColor
    ? hexToRgba(after.bgColor, after.bgOpacity !== undefined ? after.bgOpacity : 0.3)
    : before.bgColor
      ? hexToRgba(before.bgColor, after.bgOpacity !== undefined ? after.bgOpacity : 0.3)
      : 'transparent';
  const afterText = after.textColor
    ? hexToRgba(after.textColor, after.textOpacity !== undefined ? after.textOpacity : 0.3)
    : before.textColor
      ? hexToRgba(before.textColor, after.textOpacity !== undefined ? after.textOpacity : 0.3)
      : 'inherit';

  // Base Tailwind classes
  const baseClasses = 'relative inline px-1 py-0.5 cursor-pointer transition-all duration-200 ease-out rounded-sm';

  // Simple hover classes for basic animations
  let animationClasses = '';
  switch (animation) {
    case 'none':
    case 'fade':
      animationClasses = 'hover:transition-colors';
      break;
    case 'scale':
      animationClasses = 'hover:scale-105 transform-gpu';
      break;
    default:
      animationClasses = 'overflow-hidden';
  }

  const classes = [baseClasses, animationClasses, className].filter(Boolean).join(' ');

  // Create styles for the component
  const componentStyle = {
    backgroundColor: beforeBg,
    color: beforeText,
  };

  // Generate unique ID for this component instance
  const uniqueId = `highlight-${Math.random().toString(36).substr(2, 9)}`;

  // Create CSS for pseudo-element animations
  const pseudoElementCSS = `
        .${uniqueId} {
            background-color: ${beforeBg} !important;
            color: ${beforeText} !important;
        }
        
        .${uniqueId}:hover {
            background-color: ${animation === 'underline' ? beforeBg : afterBg} !important;
            color: ${afterText} !important;
        }

        ${
          animation !== 'none' && animation !== 'scale'
            ? `
        .${uniqueId}::before {
            content: '';
            position: absolute;
            background-color: ${afterBg};
            transition: all 0.2s ease-out;
            border-radius: 2px;
            z-index: -1;
            pointer-events: none;
        }
        `
            : ''
        }

        ${
          animation === 'slide-right'
            ? `
        .${uniqueId}::before {
            top: 0;
            left: 0;
            bottom: 0;
            width: 0%;
        }
        .${uniqueId}:hover::before {
            width: 100%;
        }
        .${uniqueId}:hover {
            background-color: transparent !important;
        }
        `
            : ''
        }

        ${
          animation === 'slide-left'
            ? `
        .${uniqueId}::before {
            top: 0;
            right: 0;
            bottom: 0;
            width: 0%;
        }
        .${uniqueId}:hover::before {
            width: 100%;
        }
        .${uniqueId}:hover {
            background-color: transparent !important;
        }
        `
            : ''
        }

        ${
          animation === 'expand'
            ? `
        .${uniqueId}::before {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transform: scaleX(0);
            transform-origin: center;
        }
        .${uniqueId}:hover::before {
            transform: scaleX(1);
        }
        .${uniqueId}:hover {
            background-color: transparent !important;
        }
        `
            : ''
        }

        ${
          animation === 'underline'
            ? `
        .${uniqueId}::before {
            left: 0;
            right: 0;
            bottom: 0;
            height: 2px;
            transform: scaleX(0);
            transform-origin: left;
        }
        .${uniqueId}:hover::before {
            transform: scaleX(1);
        }
        `
            : ''
        }

        ${
          animation === 'fade'
            ? `
        .${uniqueId}::before {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
        }
        .${uniqueId}:hover::before {
            opacity: 1;
        }
        .${uniqueId}:hover {
            background-color: transparent !important;
        }
        `
            : ''
        }
    `;

  if (href) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: pseudoElementCSS }} />
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          class={`${classes} ${uniqueId} no-underline`}
          style={componentStyle}>
          {children}
        </a>
      </>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pseudoElementCSS }} />
      <span class={`${classes} ${uniqueId}`} style={componentStyle}>
        {children}
      </span>
    </>
  );
}
