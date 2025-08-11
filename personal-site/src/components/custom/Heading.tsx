import { ComponentChildren, JSX } from 'preact';

const sizes: Record<number, string> = {
    1: 'text-4xl mb-5',
    2: 'text-3xl mb-4',
    3: 'text-2xl mb-4',
    4: 'text-xl mb-3',
    5: 'text-lg mb-2',
    6: 'text-base mb-1',
};
export default function Heading({ depth, children }: { depth: number; children: ComponentChildren }) {
    const HeadingTag = `h${depth}` as keyof JSX.IntrinsicElements;
    return <HeadingTag class={`${sizes[depth]} font-playfair`}>{children}</HeadingTag>;
}
