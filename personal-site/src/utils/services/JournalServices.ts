import { slugify, titleize, dateify } from '@/utils/formatters';

const files = import.meta.glob<{ default: string }>('@/data/journals/*.md', { query: '?raw', eager: true });

/* TYPES */
interface JournalInfo {
    title: string;
    slug: string;
    date: string;
}

interface Journal extends JournalInfo {
    content: string;
}

/* HELPERS */
// Sorts from new to old and expect date like ddmmyy
const sortJournalsByDate = (arr: Journal[]): Journal[] => {
    // New to Old
    return arr.sort((b, a) => {
        const ay = parseInt(a.date.slice(4, 6), 10) + 2000;
        const by = parseInt(b.date.slice(4, 6), 10) + 2000;
        if (ay !== by) return ay - by;

        const am = parseInt(a.date.slice(2, 4), 10);
        const bm = parseInt(b.date.slice(2, 4), 10);
        if (am !== bm) return am - bm;

        const ad = parseInt(a.date.slice(0, 2), 10);
        const bd = parseInt(b.date.slice(0, 2), 10);

        return ad - bd;
    });
};

// The journals full array from data files
const journals: Journal[] = Object.entries(files).map(([path, mod]) => {
    const content = mod.default;
    const fileName = path.split('/').pop()!; // "File name110925.md"
    const withoutExt = fileName.replace(/\.md$/, '');

    // Validate that the file name has at least 6 characters for the date
    if (withoutExt.length < 6) {
        throw new Error(`Invalid journal file name format: ${fileName}. Expected format: <name><ddmmyy>.md`);
    }

    const [slug, date] = [slugify(withoutExt.slice(0, -6)), withoutExt.slice(-6)];

    // Validate date format
    if (!/^\d{6}$/.test(date)) {
        throw new Error(`Invalid date format in file name: ${fileName}. Expected 6 digits (ddmmyy)`);
    }

    const title = titleize(slug);

    return { title, slug, date, content };
});

const sortedJournals: Journal[] = sortJournalsByDate(journals);
const datefiedJournals: Journal[] = sortedJournals.map(journal => ({
    ...journal,
    date: dateify(journal.date),
}));

const getAllJournals = (): Journal[] => datefiedJournals;

const getJournalBySlug = (slug: string): Journal | undefined => getAllJournals().find(journal => journal.slug === slug);

const getAllJournalsInfo = (): JournalInfo[] =>
    getAllJournals().map(journal => ({ title: journal.title, slug: journal.slug, date: journal.date }));

export { getJournalBySlug, getAllJournalsInfo };
