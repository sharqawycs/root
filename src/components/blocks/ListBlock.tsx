interface ListBlockProps {
    items: string[];
    type?: 'bullet' | 'numbered';
    indent?: number;
}

export default function ListBlock({ items, type = 'bullet', indent = 0 }: ListBlockProps) {
    const Tag = type === 'numbered' ? 'ol' : 'ul';

    return (
        <Tag class={`list-block list-${type}`} style={{ marginLeft: `${indent * 1.5}rem` }}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </Tag>
    );
}
