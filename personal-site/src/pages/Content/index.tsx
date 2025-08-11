import PageHeader from '@/components/blog/PageHeader';
import Page from '@/components/layout/Page';
import markdownToHTML from '@/utils/MDtoHMTL';

const sampleMarkdown = `
# Token Recursion Test

This tests proper token recursion in lists and other nested structures.

## Nested Lists with Formatting

1. **First level** with bold
   - Nested item with *italic text*
   - Another nested with [a link](https://example.com)
   - Item with inline \`code\`
2. **Second level** item
   1. Deep nesting level 1
   2. Deep nesting with **bold** and *italic*
      - Even deeper with [link](https://google.com)
      - And some \`inline code\`
   3. Back to level 1
3. **Third level** with mixed content

## Task Lists with Formatting

- [x] Completed task with **[link](https://google.com)**
- [ ] Incomplete task with [# Token Recursion Test](https://example.com)
- [x] Another completed with \`code   \` and *italic*
- [ ] Task with **bold**, *italic*, and [link](https://github.com)

## Complex Nesting

1. Level 1 with **formatting**
   - Bullet point with *italic*
     1. Nested ordered list
     2. With \`code\` and [links](https://test.com)
        - Even deeper bullets
        - With **bold** and *italic* text
   - Back to bullet level
2. Level 1 continued

This should properly parse all tokens recursively!
`;

export default function Content() {
    const htmlContent = markdownToHTML(sampleMarkdown);

    return (
        <Page>
            <PageHeader subtitle="Testing proper token recursion in lists">Markdown Renderer Test</PageHeader>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </Page>
    );
}
