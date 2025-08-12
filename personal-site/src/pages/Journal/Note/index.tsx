import Page from '@/components/layout/Page';
import { markdownToHTML } from '@/utils/markdownToHTML';
import { useRoute } from 'preact-iso';
import _404 from '@/pages/_404';
import { getAllJournals } from '@/utils/services/JournalServices';

const allJournals = getAllJournals();

export default function Note() {
    const { params } = useRoute();
    const { slug } = params;

    const note = allJournals.find(item => item.slug === slug);

    if (!note) return <_404 />;

    const html = markdownToHTML(note.content);
    return <Page>{html}</Page>; // The <Page> can handle the HTML content
}
