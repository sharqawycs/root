interface LinkCardProps {
    title: string;
    description: string;
    url: string;
    domain?: string;
}

export function LinkCard({ title, description, url, domain }: LinkCardProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            class="link-card">
            <h4>{title}</h4>
            <p>{description}</p>
            {domain && <span class="domain">{domain}</span>}
        </a>
    );
}
