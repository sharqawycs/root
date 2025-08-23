import { ComponentChildren } from 'preact';

interface PageProps {
  children: ComponentChildren | string;
  className?: string;
}

export default function Page({ children, className = '' }: PageProps) {
  const pageStyle = {
    animation: 'blur-in 0.2s linear',
  };

  // If children is raw HTML object, render dangerouslySetInnerHTML
  if (typeof children === 'string') {
    return (
      <>
        <style>{`
          @keyframes blur-in {
            from {
              opacity: 0;
              filter: blur(2px);
            }
            to {
              opacity: 1;
              filter: blur(0);
            }
          }
        `}</style>
        <div class={'p-4 ml-1 flex-1 ' + className} style={pageStyle} dangerouslySetInnerHTML={{ __html: children as string }} />
      </>
    );
  }

  // Otherwise render normally
  return (
    <>
      <style>{`
          @keyframes blur-in {
            from {
              opacity: 0;
              filter: blur(2px);
            }
            to {
              opacity: 1;
              filter: blur(0);
            }
          }
      `}</style>
      <div class={'p-4 ml-1 flex-1 ' + className} style={pageStyle}>
        {children}
      </div>
    </>
  );
}
