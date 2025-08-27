export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose max-w-none">
      {children}
    </article>
  );
}
