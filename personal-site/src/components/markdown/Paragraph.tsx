import { ComponentChildren } from 'preact';

export const Paragraph = ({ children }: { children: ComponentChildren }) => <p class="mb-4 leading-relaxed text-gray-700">{children}</p>;

export default Paragraph;
