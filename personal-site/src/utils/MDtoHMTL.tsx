import { marked, Tokens } from 'marked';
import { render } from 'preact-render-to-string';
import { Heading, Paragraph, Link, List, ListItem, CodeBlock, InlineCode } from '@/components/markdown';

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

// Code block renderer using custom component
renderer.code = ({ text, lang }: Tokens.Code) => {
    return render(<CodeBlock text={text} lang={lang} />);
};

// Inline code renderer using custom component
renderer.codespan = ({ text }: Tokens.Codespan) => {
    return render(<InlineCode text={text} />);
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

// Function to convert Markdown to HTML with our renderer preferences
export function markdownToHTML(markdown: string): string {
    const htmlString = marked.parse(markdown, { renderer }) as string;
    return htmlString;
}

export default markdownToHTML;
