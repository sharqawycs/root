interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  inline?: boolean;
}

export default function CodeBlock({ code, language, title, inline = false }: CodeBlockProps) {
  if (inline) {
    return <code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">{code}</code>;
  }

  return (
    <div class="bg-gray-900 rounded-lg overflow-hidden mb-4">
      {title && <div class="bg-gray-800 px-4 py-2 text-sm text-gray-300 font-mono border-b border-gray-700">{title}</div>}
      <pre class={`p-4 overflow-x-auto text-sm ${language ? `language-${language}` : ''}`}>
        <code class="text-gray-100 font-mono">{code}</code>
      </pre>
    </div>
  );
}
