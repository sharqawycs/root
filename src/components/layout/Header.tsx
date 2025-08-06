import { useLocation } from 'preact-iso';
import { useState } from 'preact/hooks';
import Highlight from '@/components/ui/Highlight';

export default function Header() {
    const { url } = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Sharqawy', color: '#2196F3' },
        { path: '/write', label: 'Write', color: '#4CAF50' },
        { path: '/philosophy', label: 'Philosophy', color: '#FF9800' },
        { path: '/content', label: 'Content', color: '#9C27B0' },
        { path: '/socials', label: 'Socials', color: '#E91E63' },
    ];

    const OPACITY = 0.2;

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header class="py-8 pb-4 border-b border-gray-200 relative">
                <div class="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        class="w-full h-full"
                        viewBox="0 0 1515 678"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M-209 244L1181 0L0 676H1515V678H0V0H-209V244Z" class="text-gray-200 dark:text-gray-800" />
                    </svg>
                </div>
                <div class="px-4 flex justify-between items-center relative z-10">
                    <div>
                        <Highlight
                            href="/"
                            className={url === '/' ? 'font-medium' : ''}
                            before={url === '/' ? { bgColor: '#2196F3', bgOpacity: OPACITY } : {}}
                            after={{ bgColor: '#2196F3', bgOpacity: OPACITY }}>
                            Sharqawy
                        </Highlight>
                    </div>

                    {/* Desktop Navigation */}
                    <nav class="hidden sm:flex gap-8 items-center">
                        {navItems.slice(1).map(({ path, label, color }) => {
                            const isActive = url === path;
                            return (
                                <Highlight
                                    key={path}
                                    href={path}
                                    className={isActive ? 'font-medium' : ''}
                                    before={isActive ? { bgColor: color, bgOpacity: OPACITY } : {}}
                                    after={{ bgColor: color, bgOpacity: OPACITY }}>
                                    {label}
                                </Highlight>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button class="sm:hidden p-2 z-50 relative" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                        <div class="w-6 h-5 relative">
                            <span
                                class={`block absolute h-0.5 w-full bg-gray-800 rounded-sm transition-all duration-300 ease-in-out ${
                                    mobileMenuOpen ? 'top-2 rotate-45' : 'top-0 rotate-0'
                                }`}></span>
                            <span
                                class={`block absolute h-0.5 w-full bg-gray-800 rounded-sm transition-all duration-300 ease-in-out ${
                                    mobileMenuOpen ? 'opacity-0 left-6' : 'top-2 opacity-100 left-0'
                                }`}></span>
                            <span
                                class={`block absolute h-0.5 w-full bg-gray-800 rounded-sm transition-all duration-300 ease-in-out ${
                                    mobileMenuOpen ? 'top-2 -rotate-45' : 'top-4 rotate-0'
                                }`}></span>
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Overlay */}
            <div
                class={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={closeMobileMenu}
            />

            {/* Mobile Navigation */}
            <nav
                class={`fixed top-0 right-0 w-72 h-screen bg-white/95 backdrop-blur-xl border-l border-gray-200 pt-20 px-4 pb-8 z-50 transition-transform duration-300 flex flex-col gap-4 ${
                    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {navItems.slice(1).map(({ path, label, color }, index) => {
                    const isActive = url === path;
                    return (
                        <div
                            key={path}
                            class={`py-4 border-b border-gray-100 transition-all duration-300 ${
                                mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                            }`}
                            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                            onClick={closeMobileMenu}>
                            <Highlight
                                href={path}
                                className={isActive ? 'font-medium' : ''}
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
