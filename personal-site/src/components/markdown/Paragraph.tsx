import type { JSX } from 'preact';

export const Paragraph = ({ children }: { children: JSX.Element | string }) => <p class="mb-4 leading-relaxed text-gray-700">{children}</p>;

export default Paragraph;
