import type { JSX } from 'preact';
import { default as Seo, SeoProps } from '@/components/Seo';

interface PageProps extends SeoProps {
  children: JSX.Element | string;
  className?: string;
}

// TODO: some code reduce, DRY
export default function Page({ children, className = '', ...seoProps }: PageProps) {
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
        <Seo title={seoProps.title} description={seoProps.description} url={seoProps.url} />
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
        <Seo title={seoProps.title} description={seoProps.description} url={seoProps.url} />
        {children}
      </div>
    </>
  );
}
