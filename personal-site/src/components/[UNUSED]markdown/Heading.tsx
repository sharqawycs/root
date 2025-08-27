import { slugify } from '@/utils/[UNUSED]formatters';
import type { JSX } from 'preact';

const sizes: Record<number, string> = {
  1: 'text-4xl mb-5',
  2: 'text-3xl mb-4',
  3: 'text-2xl mb-3',
  4: 'text-xl mb-3',
  5: 'text-lg mb-2',
  6: 'text-base mb-1',
};

export default function Heading({ depth, children }: { depth: number; children: string }) {
  const HeadingTag = `h${depth}` as keyof JSX.IntrinsicElements;
  const id = slugify(children);

  return (
    <HeadingTag id={id} class={`${sizes[depth]} font-playfair group flex items-center gap-2`}>
      {children}
      <a href={'#' + id} class="opacity-0 group-hover:opacity-100 transition-opacity select-none">
        <LinkIcon />
      </a>
    </HeadingTag>
  );
}

const LinkIcon = () => <img className={'mt-[5px]'} src="/icons/link-icon.png" alt="Link Icon" width="16" height="16" draggable={false} />;
