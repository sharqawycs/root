import PageHeader from '@/components/blog/PageHeader';
import Page from '@/components/layout/Page';
import { getAllJournalsInfo } from '@/utils/services/JournalServices';
import Highlight from '@/components/ui/Highlight';

export default function Journal() {
  return (
    <Page>
      <PageHeader subtitle="Where I write dumb stuff and random thoughts">Journal</PageHeader>

      <div className="flex flex-col gap-4 items-start">
        {getAllJournalsInfo().map(note => (
          <article key={note.slug} className="flex items-center gap-2">
            <Highlight
              href={`/journal/${note.slug}`}
              before={{ bgColor: '#FF9800', bgOpacity: 0.3 }}
              after={{ bgColor: '#FF9800', bgOpacity: 0.5 }}>
              {note.title}
            </Highlight>
            <span>-</span>
            <time dateTime={note.date} className="text-gray-500">
              {note.date}
            </time>
          </article>
        ))}
      </div>
    </Page>
  );
}
