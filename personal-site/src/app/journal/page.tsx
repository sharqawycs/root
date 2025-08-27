import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function JournalPage() {
  const journalDir = path.join(process.cwd(), 'content', 'journal');
  const files = fs.readdirSync(journalDir).filter(f => f.endsWith('.mdx'));

  return (
    <div>
      <PageHeader subtitle="Where I write dumb stuff and random thoughts">Journal</PageHeader>
      <ul className="mt-4 space-y-2">
        {files.map(file => {
          const slug = file.replace(/\.mdx?$/, '');
          return (
            <li key={slug}>
              <Link href={`/journal/${slug}`} className="text-blue-500 hover:underline">
                {slug.replace(/-/g, ' ')}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
