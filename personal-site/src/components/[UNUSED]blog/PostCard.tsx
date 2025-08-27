interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  readTime?: string;
}

export default function PostCard({ title, excerpt, date, slug, readTime }: PostCardProps) {
  return (
    <article class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <a href={`/write/${slug}`} class="block group">
        <h3 class="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p class="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <time>{date}</time>
          {readTime && <span class="bg-gray-100 px-2 py-1 rounded">{readTime}</span>}
        </div>
      </a>
    </article>
  );
}
