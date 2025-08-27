import { ComponentChildren, JSX } from 'preact';

export const List = ({ ordered, start, children }: { ordered: boolean; start?: number | string; children: ComponentChildren }) => {
  const ListTag = (ordered ? 'ol' : 'ul') as keyof JSX.IntrinsicElements;
  const baseClasses = ordered
    ? 'list-decimal list-outside mb-4 space-y-2 ml-6'
    : 'list-[var(--dash-bullet)] list-outside mb-4 space-y-2 ml-4';
  const startProps = ordered && start !== 1 && start !== '' ? { start: Number(start) } : {};

  return (
    <ListTag class={baseClasses} {...startProps}>
      {children}
    </ListTag>
  );
};

export const ListItem = ({ task, checked, children }: { task?: boolean; checked?: boolean; children: ComponentChildren }) => (
  <li class="text-gray-700" style={task ? { listStyleType: 'none' } : undefined}>
    {task && <input type="checkbox" disabled checked={checked} class="mr-2" />}
    {children}
  </li>
);
