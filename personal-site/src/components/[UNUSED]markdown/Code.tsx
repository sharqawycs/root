import Prism from 'prismjs';
import 'prismjs/themes/prism-coy.css';

export const CodeBlock = ({ text, lang }: { text: string; lang?: string }) => {
  const highlighted = lang ? Prism.highlight(text, Prism.languages[lang.toLowerCase()] || Prism.languages['javascript'], lang) : text;

  return (
    <div class="relative mb-6 bg-white border border-gray-300 rounded-lg overflow-x-auto">
      {lang && (
        <div class="absolute top-2 right-2 text-xs font-normal text-gray-700 bg-[#f2f2f2] px-2 py-0.5 rounded-md select-none">{lang}</div>
      )}
      <pre class="p-4 font-mono text-sm text-gray-800 whitespace-pre rounded-lg">
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </div>
  );
};
export const InlineCode = ({ text }: { text: string }) => (
  <code class="bg-[#ebebeb] text-gray-800 px-1.5 py-0.5 rounded-md font-mono text-sm">{text}</code>
);
