import PageHeader from '@/components/blog/PageHeader';
import Page from '@/components/layout/Page';
import { getAllTitles } from '@/utils/services/JournalServices';

export default function Journal() {
    const titles = getAllTitles();

    return (
        <Page>
            <PageHeader subtitle="Where I write dumb stuff and random thoughts">Journal</PageHeader>

            {titles.map(note => (
                <div key={note.slug}>
                    <h2>
                        {note.title + ' -> '}
                        <a href={`/journal/${note.slug}`} class="text-blue-500 hover:underline">
                            Read more
                        </a>
                    </h2>
                </div>
            ))}

            <p>heyy :)</p>
        </Page>
    );
}
