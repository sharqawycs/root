interface LinkBlockProps {
    url: string;
    title: string;
    description?: string;
    favicon?: string;
    image?: string;
}

export function LinkBlock({
    url,
    title,
    description,
    favicon,
    image,
}: LinkBlockProps) {
    const domain = new URL(url).hostname;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            class="link-block">
            {image && (
                <div class="link-image">
                    <img src={image} alt={title} />
                </div>
            )}
            <div class="link-content">
                <h4 class="link-title">{title}</h4>
                {description && <p class="link-description">{description}</p>}
                <div class="link-meta">
                    {favicon && <img src={favicon} alt="" class="favicon" />}
                    <span class="domain">{domain}</span>
                </div>
            </div>
        </a>
    );
}
