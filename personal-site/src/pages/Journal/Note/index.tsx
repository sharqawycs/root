import Page from '@/components/layout/Page';
import { markdownToHTML } from '@/utils/markdownToHTML';
import { useRoute } from 'preact-iso';
import data from '@/data/journals';
import _404 from '@/pages/_404';

export default function Note() {
    const { params } = useRoute();
    const { slug } = params;

    const note = data.find(item => slugify(item.title.toLowerCase()) === slug.toLowerCase());

    if (!note) return <_404 />;

    const html = markdownToHTML(note.note);
    return <Page>{html}</Page>;
}

function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/(^-|-$)+/g, '');
}
