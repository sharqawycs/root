interface LinkCardProps {
    title: string;
    description: string;
    url: string;
    domain?: string;
}

export default function LinkCard({ title, description, url, domain }: LinkCardProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            class="block border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
            <h4 class="font-semibold text-blue-600 mb-2">{title}</h4>
            <p class="text-gray-600 text-sm mb-2">{description}</p>
            {domain && <span class="text-xs text-gray-400 font-mono">{domain}</span>}
        </a>
    );
}
