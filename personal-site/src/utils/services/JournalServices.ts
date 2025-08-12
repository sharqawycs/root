import { slugify, titleize } from '@/utils/slugify';

const files = import.meta.glob<{ default: string }>('@/data/journals/*.md', { query: '?raw', eager: true });

interface Journal {
    title: string;
    slug: string;
}

interface JournalWithContent extends Journal {
    content: string;
}

const journals: JournalWithContent[] = Object.entries(files).map(([path, mod]) => {
    const content = mod.default;
    const fileName = path.split('/').pop()!;
    const slug = slugify(fileName.replace(/\.md$/, ''));
    const title = titleize(slug);

    return { title, slug, content };
});

export const getAllJournals = (): JournalWithContent[] => journals;

export const getJournalBySlug = (slug: string): JournalWithContent | undefined => getAllJournals().find(journal => journal.slug === slug);

export const getAllTitles = (): Journal[] => getAllJournals().map(journal => ({ title: journal.title, slug: journal.slug }));
