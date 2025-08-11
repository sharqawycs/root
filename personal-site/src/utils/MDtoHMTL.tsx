import { marked, Tokens } from 'marked';
import { render } from 'preact-render-to-string';
import { Heading, Paragraph, Link } from '@/components/markdown';
import { JSX } from 'preact';

const renderer = new marked.Renderer();

// Headings, eg. h1, h2, h4; MD: #, ##, ####
renderer.heading = ({ text, depth }: Tokens.Heading) => {
    return render(<Heading depth={depth}>{text}</Heading>); // idc about nesting
};

// Normal Paragraph
renderer.paragraph = ({ tokens }: Tokens.Paragraph) => {
    const text = renderer.parser.parseInline(tokens, renderer);
    return render(
        <Paragraph>
            <span dangerouslySetInnerHTML={{ __html: text }} />
        </Paragraph>
    );
};

const MarkdownList = ({ ordered, start, children }: { ordered: boolean; start?: number | string; children: any }) => {
    const ListTag = (ordered ? 'ol' : 'ul') as keyof JSX.IntrinsicElements;
    const baseClasses = ordered ? 'list-decimal list-inside mb-4 space-y-2' : 'list-disc list-inside mb-4 space-y-2';
    const startProps = ordered && start !== 1 && start !== '' ? { start: Number(start) } : {};

    return (
        <ListTag class={baseClasses} {...startProps}>
            {children}
        </ListTag>
    );
};

const MarkdownListItem = ({ task, checked, children }: { task?: boolean; checked?: boolean; children: any }) => (
    <li class="text-gray-700">
        {task && <input type="checkbox" disabled checked={checked} class="mr-2" />}
        {children}
    </li>
);

const MarkdownCodeBlock = ({ text, lang }: { text: string; lang?: string }) => {
    const langClass = lang ? ` language-${lang}` : '';
    return (
        <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code class={`font-mono text-sm${langClass}`}>{text}</code>
        </pre>
    );
};

const MarkdownInlineCode = ({ text }: { text: string }) => <code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{text}</code>;

// List renderer using custom component
renderer.list = (token: Tokens.List) => {
    const { ordered, start, items } = token;
    const itemsHtml = items.map(item => renderer.listitem(item)).join('');

    return render(
        <MarkdownList ordered={ordered} start={start}>
            <span dangerouslySetInnerHTML={{ __html: itemsHtml }} />
        </MarkdownList>
    );
};

// List item renderer using custom component
renderer.listitem = (item: Tokens.ListItem) => {
    const content = renderer.parser.parse(item.tokens, false);

    return render(
        <MarkdownListItem task={item.task} checked={item.checked}>
            <span dangerouslySetInnerHTML={{ __html: content }} />
        </MarkdownListItem>
    );
};

// Link renderer using custom component
renderer.link = ({ href, title, tokens }: Tokens.Link) => {
    const text = renderer.parser.parseInline(tokens, renderer);
    return render(
        <Link href={href} title={title}>
            <span dangerouslySetInnerHTML={{ __html: text }} />
        </Link>
    );
};

// Code block renderer using custom component
renderer.code = ({ text, lang }: Tokens.Code) => {
    return render(<MarkdownCodeBlock text={text} lang={lang} />);
};

// Inline code renderer using custom component
renderer.codespan = ({ text }: Tokens.Codespan) => {
    return render(<MarkdownInlineCode text={text} />);
};

// Function to convert Markdown to HTML with our renderer preferences
export function markdownToHTML(markdown: string): string {
    const htmlString = marked.parse(markdown, { renderer }) as string;
    return htmlString;
}

export default markdownToHTML;
