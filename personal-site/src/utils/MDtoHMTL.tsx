import { marked } from 'marked';
import render from 'preact-render-to-string';
import Heading from '@/components/custom/Heading';

const renderer = new marked.Renderer();

// Try first to replace heading
renderer.heading = ({ text, depth }) => {
    return render(<Heading depth={depth}>{text}</Heading>);
};

// Function to convert Markdown to HTML string with Tailwind styling
export function markdownToHTML(markdown: string): string {
    // Simple approach - convert markdown and add classes via CSS
    const htmlString = marked.parse(markdown, { renderer }) as string;

    // Post-process to add Tailwind classes
    return htmlString;
}

export default markdownToHTML;
