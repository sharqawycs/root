import { useLocation } from 'preact-iso';
import { useState } from 'preact/hooks';
import Highlight from '@/components/ui/Highlight';

export default function Header() {
    const { url } = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        // { path: '/', label: 'Sharqawy', color: '#2196F3' },
        { path: '/journal', label: 'Journal', color: '#4CAF50' },
        { path: '/gallery', label: 'Gallery', color: '#FF9800' },
        { path: '/content', label: 'Content', color: '#9C27B0' },
    ];

    const OPACITY = 0.3;

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header class="py-2 px-4 border-b border-gray-200 relative">
                <div class="flex justify-between items-center relative">
                    <Highlight
                        href="/"
                        before={url === '/' ? { bgColor: '#2196F3', bgOpacity: OPACITY } : {}}
                        after={{ bgColor: '#2196F3', bgOpacity: OPACITY }}>
                        Sharqawy
                    </Highlight>

                    {/* Desktop Navigation */}
                    <nav class="hidden sm:flex gap-8 items-center">
                        {navItems.map(({ path, label, color }) => {
                            const isActive = url === path;
                            return (
                                <Highlight
                                    key={path}
                                    href={path}
                                    before={isActive ? { bgColor: color, bgOpacity: OPACITY } : {}}
                                    after={{ bgColor: color, bgOpacity: OPACITY }}>
                                    {label}
                                </Highlight>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button class="sm:hidden relative" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                        <div class="w-6 h-5 relative z-50">
                            <span
                                class={`block absolute h-0.5 w-full bg-gray-800 rounded-sm transition-all duration-300 ease-in-out ${
                                    mobileMenuOpen ? 'top-2.5 rotate-45' : 'top-1 rotate-0'
                                }`}></span>
                            <span
                                class={`block absolute h-0.5 w-full bg-gray-800 rounded-sm transition-all duration-300 ease-in-out top-2.5 ${
                                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}></span>
                            <span
                                class={`block absolute h-0.5 w-full bg-gray-800 rounded-sm transition-all duration-300 ease-in-out ${
                                    mobileMenuOpen ? 'top-2.5 -rotate-45' : 'top-4 rotate-0'
                                }`}></span>
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Overlay */}
            <div
                class={`fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={closeMobileMenu}
            />

            {/* Mobile Navigation */}
            <nav
                class={`fixed top-0 right-0 w-72 h-screen bg-white/95 backdrop-blur-xl border-l border-gray-200 pt-20 px-4 pb-8 z-40 transition-transform duration-300 flex flex-col gap-4 ${
                    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {navItems.map(({ path, label, color }) => {
                    const isActive = url === path;
                    return (
                        <div
                            key={path}
                            class={`py-4 border-b border-gray-100 ${
                                mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                            }`}
                            onClick={closeMobileMenu}>
                            <Highlight
                                href={path}
                                before={isActive ? { bgColor: color, bgOpacity: OPACITY } : {}}
                                after={{ bgColor: color, bgOpacity: OPACITY }}>
                                {label}
                            </Highlight>
                        </div>
                    );
                })}
            </nav>
        </>
    );
}
