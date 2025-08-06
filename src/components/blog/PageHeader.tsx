interface PageHeaderProps {
    title: string;
    subtitle?: string;
    date?: string;
}

export default function PageHeader({ title, subtitle, date }: PageHeaderProps) {
    return (
        <header class="mb-8">
            <h1 class="text-4xl font-normal mb-2 font-playfair">{title}</h1>
            {subtitle && <p class="text-lg text-gray-600 mb-2 font-playfair italic">{subtitle}</p>}
            {date && <time class="text-sm text-gray-500">{date}</time>}
        </header>
    );
}
