import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import fg from 'fast-glob';

/** HELPERS */

// "Hi I lOVe u" => "hi-i-love-u"
const slugify = (text: string): string =>
    text
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/(^-|-$)+/g, '');

// Generate routes for journals for SSG
const mdFiles = fg.sync('./src/data/journals/*.md');
const JournalsRoutes = mdFiles.map(path => {
    const fileName = path.split('/').pop()!;
    const slug = fileName.replace(/\.md$/, '');
    return `/journal/${slugify(slug)}`;
});

export default defineConfig({
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                passes: 3,
            },
            format: {
                comments: false,
            },
        },
    },
    plugins: [
        preact({
            prerender: {
                enabled: true,
                renderTarget: '#app',
                additionalPrerenderRoutes: ['/404', ...JournalsRoutes],
                previewMiddlewareEnabled: true,
                previewMiddlewareFallback: '/404',
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
