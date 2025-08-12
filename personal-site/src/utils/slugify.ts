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
