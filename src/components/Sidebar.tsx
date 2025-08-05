import { useLocation } from 'preact-iso';

export function Sidebar() {
    const { url } = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/write', label: 'Write' },
        { path: '/philosophy', label: 'Philosophy' },
        { path: '/content', label: 'Content' },
        { path: '/socials', label: 'Socials' },
    ];

    return (
        <aside class="sidebar">
            <div class="sidebar-content">
                <div class="sidebar-header">
                    <h2>SharQawyCS</h2>
                </div>
                <nav class="sidebar-nav">
                    {navItems.map(({ path, label }) => (
                        <a
                            key={path}
                            href={path}
                            class={url === path ? 'active' : ''}>
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
