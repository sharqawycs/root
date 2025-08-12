export const slugify = (text: string): string =>
    text
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/(^-|-$)+/g, '');

export const slugifyPath = (path: string): string => {
    return path
        .split('/') // break into segments
        .map(slugify)
        .join('/'); // put the slashes back
};

export const titleize = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/-/g, ' ')
        .replace(/(?:^|\s)\w/g, match => match.toUpperCase());
};

export const dateify = (date: string): string => {
    if (!/^\d{6}$/.test(date)) throw new Error('Invalid date format');

    const day = date.slice(0, 2);
    const month = parseInt(date.slice(2, 4), 10) - 1; // months are 0-based
    const year = parseInt(date.slice(4, 6), 10) + 2000; // 20xx

    const datefied = new Date(year, month, parseInt(day, 10));
    return datefied.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};
