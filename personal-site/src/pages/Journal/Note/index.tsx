import Page from '@/components/layout/Page';
import { markdownToHTML } from '@/utils/markdownToHTML';
import { useRoute } from 'preact-iso';
import data from '@/data/journals';

export default function Note() {
    const { params } = useRoute();
    const { slug } = params;
    console.log(slug);

    const html = markdownToHTML(data[0]);
    return <Page>{html}</Page>;
}
