import { ComponentChildren } from 'preact';

interface PostContentProps {
    title: string;
    date: string;
    readTime?: string;
    children: ComponentChildren;
}

export function PostContent({
    title,
    date,
    readTime,
    children,
}: PostContentProps) {
    return (
        <article class="post-content">
            <header class="post-header">
                <h1>{title}</h1>
                <div class="post-meta">
                    <time>{date}</time>
                    {readTime && <span class="read-time">{readTime}</span>}
                </div>
            </header>
            <div class="post-body">{children}</div>
        </article>
    );
}
