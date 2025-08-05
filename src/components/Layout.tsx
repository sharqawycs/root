import { ComponentChildren } from 'preact';
import { Sidebar } from './Sidebar.js';

interface LayoutProps {
    children: ComponentChildren;
}

export function Layout({ children }: LayoutProps) {
    const currentYear = new Date().getFullYear();
    const email = 'sharqawy@diran.app';

    return (
        <div class="layout">
            <Sidebar />
            <main class="main-content">{children}</main>
            <footer class="footer">
                <p>
                    <a href={`mailto:${email}`}>{email}</a> • {currentYear}
                </p>
            </footer>
        </div>
    );
}
