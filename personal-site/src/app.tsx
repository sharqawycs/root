import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import Layout from '@/Layout.js';
import Home from '@/pages/Home';
import Journal from '@/pages/Journal';
import Note from '@/pages/Journal/Note';
import Gallery from '@/pages/Gallery';
import Content from '@/pages/Content';
import NotFound from '@/pages/_404.js';

import '@/styles/globals.css';

export default function App() {
    return (
        <LocationProvider>
            <Layout>
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/journal" component={Journal} />
                    <Route path="/journal/:slug" component={Note} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/content" component={Content} />
                    <Route default component={NotFound} />
                </Router>
            </Layout>
        </LocationProvider>
    );
}

if (typeof window !== 'undefined') {
    const app = document.getElementById('app');
    if (app) {
        hydrate(<App />, app);
    }
}

export async function prerender(data: any) {
    return await ssr(<App {...data} />);
}
