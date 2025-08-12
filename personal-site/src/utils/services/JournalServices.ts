import { slugify } from '@/utils/slugify';

const files = import.meta.glob<{ default: string }>('@/data/journals/*.md', { query: '?raw', eager: true });

interface Journal {
    slug: string;
    content: string;
}

const journals: Journal[] = Object.entries(files).map(([path, mod]) => {
    const content = mod.default;
    const fileName = path.split('/').pop()!;
    const slug = slugify(fileName.replace(/\.md$/, ''));

    return { slug, content };
});

// return all journals object
export const getAllJournals = (): Journal[] => journals;
