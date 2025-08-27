import { MDXProvider } from '@mdx-js/react';
import CalloutBox from '@/components/mdx/CalloutBox';

const components = {
  CalloutBox,
};

export function MDXLayoutRenderer({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
