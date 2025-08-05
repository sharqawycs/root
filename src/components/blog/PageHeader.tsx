interface PageHeaderProps {
    title: string;
    subtitle?: string;
    date?: string;
}

export function PageHeader({ title, subtitle, date }: PageHeaderProps) {
    return (
        <header class="page-header">
            <h1>{title}</h1>
            {subtitle && <p class="subtitle">{subtitle}</p>}
            {date && <time class="date">{date}</time>}
        </header>
    );
}
