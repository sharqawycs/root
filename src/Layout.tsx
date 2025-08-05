import { ComponentChildren } from 'preact';
import { Header } from '@/components/layout/Header.js';
import { Footer } from '@/components/layout/Footer.js';

interface LayoutProps {
    children: ComponentChildren;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div class="layout">
            <Header />
            <main class="main-content">{children}</main>
            <Footer />
        </div>
    );
}
