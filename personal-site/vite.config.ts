import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import notes from './src/data/journals';

const dynamicRoutes = notes.map(note => `/journal/${note.title.toLowerCase()}`);

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        minify: 'terser', // 🔁 from 'esbuild'
        terserOptions: {
            compress: {
                drop_console: true, // remove console.logs
                passes: 3, // try to compress harder
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
                additionalPrerenderRoutes: ['/404', ...dynamicRoutes],
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
