interface PostCardProps {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    readTime?: string;
}

export function PostCard({
    title,
    excerpt,
    date,
    slug,
    readTime,
}: PostCardProps) {
    return (
        <article class="post-card">
            <a href={`/write/${slug}`} class="post-link">
                <h3>{title}</h3>
                <p class="excerpt">{excerpt}</p>
                <div class="post-meta">
                    <time>{date}</time>
                    {readTime && <span class="read-time">{readTime}</span>}
                </div>
            </a>
        </article>
    );
}
