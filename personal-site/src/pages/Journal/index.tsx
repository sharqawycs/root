import PageHeader from '@/components/blog/PageHeader';
import Page from '@/components/layout/Page';
import { getAllTitles } from '@/utils/services/JournalServices';
import Highlight from '@/components/ui/Highlight';

export default function Journal() {
    const titles = getAllTitles();

    return (
        <Page>
            <PageHeader subtitle="Where I write dumb stuff and random thoughts">Journal</PageHeader>

            <div className="flex flex-col gap-4 items-start">
                {titles.map(note => (
                    <Highlight
                        className=""
                        key={note.slug}
                        href={`/journal/${note.slug}`}
                        before={{ bgColor: '#FF9800', bgOpacity: 0.3 }}
                        after={{ bgColor: '#FF9800', bgOpacity: 0.5 }}>
                        {note.title}
                    </Highlight>
                ))}
            </div>
        </Page>
    );
}
