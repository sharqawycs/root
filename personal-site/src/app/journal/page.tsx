import PageHeader from '@/components/PageHeader';
import { Posts } from '@/components/Posts';
import { getPosts } from '@/posts';

export default async function JournalPage() {
  const posts = await getPosts();

  return (
    <div>
      <PageHeader subtitle="Where I write dumb stuff and random thoughts">Journal</PageHeader>
      <div className="mt-6">
        {posts.length > 0 ? <Posts posts={posts} /> : <p className="text-gray-500">No posts yet. Come back soon!</p>}
      </div>
    </div>
  );
}
