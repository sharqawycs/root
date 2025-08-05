import { ComponentChildren } from 'preact';

interface QuoteBlockProps {
    children: ComponentChildren;
    author?: string;
    source?: string;
}

export function QuoteBlock({ children, author, source }: QuoteBlockProps) {
    return (
        <blockquote class="quote-block">
            <div class="quote-content">{children}</div>
            {(author || source) && (
                <footer class="quote-attribution">
                    {author && <cite class="author">{author}</cite>}
                    {source && <span class="source">{source}</span>}
                </footer>
            )}
        </blockquote>
    );
}
