import fs from 'fs';
import markdownToHTML from '@/utils/markdownToHTML';

export default function useMarkdownToHTML(filePath: string) {
    const markdown = fs.readFileSync(filePath, 'utf-8');
    const html = markdownToHTML(markdown);
    return html;
}
