import {
    LocationProvider,
    Router,
    Route,
    hydrate,
    prerender as ssr,
} from 'preact-iso';

import { Layout } from './components/Layout.js';
import { Home } from './pages/Home/index.js';
import { Write } from './pages/Write/index.js';
import { Philosophy } from './pages/Philosophy/index.js';
import { Content } from './pages/Content/index.js';
import { Socials } from './pages/Socials/index.js';
import { NotFound } from './pages/_404.js';
import './styles/globals.css';

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
