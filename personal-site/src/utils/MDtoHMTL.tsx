import { marked, Tokens } from 'marked';
import { render } from 'preact-render-to-string';
import { Heading, Paragraph, Link, List, ListItem } from '@/components/markdown';
import Prism from 'prismjs';

import 'prismjs/themes/prism-coy.css';

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

// List
renderer.list = (token: Tokens.List) => {
    const { ordered, start, items } = token;
    const itemsHtml = items.map(item => renderer.listitem(item)).join('');

    return render(
        <List ordered={ordered} start={start}>
            <span dangerouslySetInnerHTML={{ __html: itemsHtml }} />
        </List>
    );
};

// List item
renderer.listitem = (item: Tokens.ListItem) => {
    const content = renderer.parser.parse(item.tokens, false);

    return render(
        <ListItem task={item.task} checked={item.checked}>
            <span dangerouslySetInnerHTML={{ __html: content }} />
        </ListItem>
    );
};

const MarkdownCodeBlock = ({ text, lang }: { text: string; lang?: string }) => {
    const highlighted = lang ? Prism.highlight(text, Prism.languages[lang.toLowerCase()] || Prism.languages['js'], lang) : text;

    return (
        <div class="mb-4">
            {lang && <div class="text-xs font-bold text-gray-500 mb-1">{lang}</div>}
            <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code class="font-mono text-sm" dangerouslySetInnerHTML={{ __html: highlighted }} />
            </pre>
        </div>
    );
};
const MarkdownInlineCode = ({ text }: { text: string }) => <code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{text}</code>;

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
