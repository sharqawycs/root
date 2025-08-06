import { ComponentChildren } from 'preact';
import Header from '@/components/layout/Header.js';
import Footer from '@/components/layout/Footer.js';

interface LayoutProps {
    children: ComponentChildren;
}

export default function MainLayout({ children }: LayoutProps) {
    return (
        <div class="max-w-2xl mx-auto min-h-screen flex flex-col font-inter">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
