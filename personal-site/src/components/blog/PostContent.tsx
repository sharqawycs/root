import type { JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { markdownToHTML } from '../../utils/markdownToHTML';

interface PostContentProps {
  title: string;
  date: string;
  readTime?: string;
  markdownContent?: string;
  children?: JSX.Element | string;
}

export default function PostContent({ title, date, readTime, markdownContent, children }: PostContentProps) {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    if (markdownContent) {
      const html = markdownToHTML(markdownContent);
      setHtmlContent(html);
    }
  }, [markdownContent]);

  return (
    <article class="max-w-3xl mx-auto">
      <header class="mb-8 pb-4 border-b border-gray-200">
        <h1 class="text-3xl font-bold mb-4">{title}</h1>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <time>{date}</time>
          {readTime && <span class="bg-gray-100 px-2 py-1 rounded">{readTime}</span>}
        </div>
      </header>
      <div class="prose prose-lg max-w-none">
        {markdownContent ? (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        ) : (
          children
        )}
      </div>
    </article>
  );
}
