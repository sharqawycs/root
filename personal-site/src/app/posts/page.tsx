import PageHeader from "@/components/PageHeader";
import Highlight from "@/components/ui/Highlight";
import Link from "next/link";

// In a real app, you'd get this from a database or CMS
const posts = [
  {
    slug: 'escape-infinite-scroll',
    title: 'How to Escape the Infinite Scroll Jail',
    date: new Date('2025-08-26'),
    description: 'Breaking free from mindless scrolling and reclaiming your time and focus'
  }
];

export default function PostsPage() {
  const sortedPosts = posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div>
      <PageHeader subtitle="Where I write dumb stuff and random thoughts">
        Journal
      </PageHeader>

      {sortedPosts.length === 0 ? (
        <p>coming soon...</p>
      ) : (
        <div className="flex flex-col gap-4 items-start">
          {sortedPosts.map(post => (
            <article key={post.slug} className="flex items-center gap-2">
              <Highlight
                href={`/posts/${post.slug}`}
                before={{ bgColor: '#FF9800', bgOpacity: 0.3 }}
                after={{ bgColor: '#FF9800', bgOpacity: 0.5 }}
              >
                {post.title}
              </Highlight>
              <span>-</span>
              <time dateTime={post.date.toISOString()} className="text-gray-500">
                {post.date.toLocaleDateString()}
              </time>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
