import { ComponentChildren } from 'preact';

interface QuoteBlockProps {
    children: ComponentChildren;
    author?: string;
    source?: string;
}

export default function QuoteBlock({ children, author, source }: QuoteBlockProps) {
    return (
        <blockquote class="border-l-4 border-blue-500 pl-6 py-4 my-6 bg-blue-50">
            <div class="text-lg italic text-gray-700 mb-3">{children}</div>
            {(author || source) && (
                <footer class="text-sm text-gray-600">
                    {author && <cite class="font-semibold not-italic">— {author}</cite>}
                    {source && <span class="ml-2 text-gray-500">({source})</span>}
                </footer>
            )}
        </blockquote>
    );
}
