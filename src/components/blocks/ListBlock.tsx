interface ListBlockProps {
    items: string[];
    type?: 'bullet' | 'numbered';
    indent?: number;
}

export default function ListBlock({ items, type = 'bullet', indent = 0 }: ListBlockProps) {
    const Tag = type === 'numbered' ? 'ol' : 'ul';
    const listClass = type === 'numbered' ? 'list-decimal' : 'list-disc';

    return (
        <Tag class={`${listClass} list-inside space-y-2 mb-4`} style={{ marginLeft: `${indent * 1.5}rem` }}>
            {items.map((item, index) => (
                <li key={index} class="text-gray-800">
                    {item}
                </li>
            ))}
        </Tag>
    );
}
