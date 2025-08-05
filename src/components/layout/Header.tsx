import { useLocation } from 'preact-iso';

export default function Header() {
    const { url } = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/write', label: 'Write' },
        { path: '/philosophy', label: 'Philosophy' },
        { path: '/content', label: 'Content' },
        { path: '/socials', label: 'Socials' },
    ];

    return (
        <header class="header">
            <div class="header-content">
                <div class="header-logo">
                    <h1>SharQawyCS</h1>
                </div>
                <nav class="header-nav">
                    {navItems.map(({ path, label }) => (
                        <a key={path} href={path} class={url === path ? 'active' : ''}>
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
