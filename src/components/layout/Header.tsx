import { useLocation } from 'preact-iso';
import { useState } from 'preact/hooks';
import Highlight from '@/components/blocks/Highlight';
import '@/styles/header.css';

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
            <header class="header">
                <div class="header-content">
                    <Highlight
                        href="/"
                        className={url === '/' ? 'font-medium' : ''}
                        before={url === '/' ? { bgColor: '#2196F3', bgOpacity: OPACITY } : {}}
                        after={{ bgColor: '#2196F3', bgOpacity: OPACITY }}>
                        Sharqawy
                    </Highlight>

                    {/* Desktop Navigation */}
                    <nav class="header-nav">
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
                    <button class="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                        <div class={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Overlay */}
            <div class={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu} />

            {/* Mobile Navigation */}
            <nav class={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                {navItems.slice(1).map(({ path, label, color }, index) => {
                    const isActive = url === path;
                    return (
                        <div key={path} class="mobile-nav-item" onClick={closeMobileMenu}>
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
