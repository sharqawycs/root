interface CodeBlockProps {
    code: string;
    language?: string;
    title?: string;
    inline?: boolean;
}

export default function CodeBlock({
    code,
    language,
    title,
    inline = false,
}: CodeBlockProps) {
    if (inline) {
        return <code class="code-inline">{code}</code>;
    }

    return (
        <div class="code-block">
            {title && <div class="code-title">{title}</div>}
            <pre class={`code-pre ${language ? `language-${language}` : ''}`}>
                <code>{code}</code>
            </pre>
        </div>
    );
}
