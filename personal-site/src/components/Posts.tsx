import { type Post } from '@/posts';
import Link from 'next/link';

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-6">
      {posts.map(({ slug, title, publishDate, description }) => (
        <article key={slug} className="border-b border-gray-200 pb-6 last:border-b-0">
          <h2 className="mb-2 text-xl font-medium">
            <Link href={`/${slug}`} className="text-gray-900 transition-colors hover:text-blue-600">
              {title}
            </Link>
          </h2>
          <p className="mb-2 text-sm text-gray-500">
            {new Date(publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          {description && <p className="text-sm leading-relaxed text-gray-600">{description}</p>}
        </article>
      ))}
    </div>
  );
}
