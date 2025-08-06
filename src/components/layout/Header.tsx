import { useLocation } from 'preact-iso';
import Highlight from '@/components/blocks/Highlight';
import { isAbsolute } from 'path';

export default function Header() {
    const { url } = useLocation();

    const navItems = [
        { path: '/', label: 'Sharqawy', color: '#2196F3' },
        { path: '/write', label: 'Write', color: '#4CAF50' },
        { path: '/philosophy', label: 'Philosophy', color: '#FF9800' },
        { path: '/content', label: 'Content', color: '#9C27B0' },
        { path: '/socials', label: 'Socials', color: '#E91E63' },
    ];

    const OPACITY = 0.2;

    return (
        <header class="header">
            <div class="header-content">
                <div class="header-logo">
                    <Highlight
                        href="/"
                        className={url === '/' ? 'font-medium' : ''}
                        before={url === '/' ? { bgColor: '#2196F3', bgOpacity: OPACITY } : {}}
                        after={{ bgColor: '#2196F3', bgOpacity: OPACITY }}>
                        Sharqawy
                    </Highlight>
                </div>
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
            </div>
        </header>
    );
}
