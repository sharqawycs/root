import {
    LocationProvider,
    Router,
    Route,
    hydrate,
    prerender as ssr,
} from 'preact-iso';

import { Layout } from './Layout.js';
import { Home } from './pages/Home';
import { Write } from './pages/Write';
import { Philosophy } from './pages/Philosophy';
import { Content } from './pages/Content';
import { Socials } from './pages/Socials';
import { NotFound } from './pages/_404.js';
import './styles/globals.css';
import './styles/components.css';
import './styles/blocks.css';
import './styles/highlight.css';

export function App() {
    return (
        <LocationProvider>
            <Layout>
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/write" component={Write} />
                    <Route path="/philosophy" component={Philosophy} />
                    <Route path="/content" component={Content} />
                    <Route path="/socials" component={Socials} />
                    <Route default component={NotFound} />
                </Router>
            </Layout>
        </LocationProvider>
    );
}

if (typeof window !== 'undefined') {
    hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
    return await ssr(<App {...data} />);
}
