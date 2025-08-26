import PageHeader from '@/components/blog/PageHeader';
import Page from '@/components/layout/Page';
import { JournalInfo } from '@/types/journal';
import { getAllJournalsInfo } from '@/utils/services/JournalServices';
import Highlight from '@/components/ui/Highlight';

const PAGE_TITLE = 'Journal';
export default function Journal() {
  const journals = getAllJournalsInfo();

  return (
    <Page title={PAGE_TITLE} description="My thoughts, experiments and notes.">
      <PageHeader subtitle="Where I write dumb stuff and random thoughts">{PAGE_TITLE}</PageHeader>

      {journals.length === 0 ? <p>coming soon...</p> : <JournalsSection journals={journals} />}
    </Page>
  );
}

const JournalsSection = ({ journals }: { journals: JournalInfo[] }) => {
  return (
    <div className="flex flex-col gap-4 items-start">
      {journals.map(note => (
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
  );
};
