import PageHeader from '@/components/blog/PageHeader';
import Page from '@/components/layout/Page';
import markdownToHTML from '@/utils/MDtoHMTL';

const sampleMarkdown = `
# Welcome to My Content Page

This is a **test** of the markdown converter. Here's what it can do:

## Features

- Convert *markdown* to HTML
- Add **Tailwind classes** automatically
- Support for [links](https://example.com)
- Code snippets like \`console.log('hello')\`

### Lists work too:

1. First item
2. Second item  
3. Third item

> This is a blockquote with some important information.

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

Pretty cool, right?
`;

export default function Content() {
    const htmlContent = markdownToHTML(sampleMarkdown);

    return (
        <Page>
            <PageHeader subtitle="Stuff I actually think is worth your time">Content Worth Consuming</PageHeader>
            <div class="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
        </Page>
    );
}
