import { readdir } from 'fs/promises';

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  description?: string;
}

export const postsPerPage = 5 as const;

export async function getPosts(): Promise<Post[]> {
  try {
    // Retrieve slugs from post routes
    const slugs = (await readdir('./src/app/(posts)', { withFileTypes: true })).filter(dirent => dirent.isDirectory());

    // Retrieve metadata from MDX files
    const posts = await Promise.all(
      slugs.map(async ({ name }) => {
        try {
          const { metadata } = await import(`./app/(posts)/${name}/page.mdx`);
          return { slug: name, ...metadata };
        } catch (error) {
          console.warn(`Failed to load metadata for post: ${name}`, error);
          // Return a fallback post object
          return {
            slug: name,
            title: name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            publishDate: new Date().toISOString(),
            description: 'No description available',
          };
        }
      })
    );

    // Sort posts from newest to oldest
    posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

    return posts;
  } catch {
    console.warn('Posts directory not found, returning empty array');
    return [];
  }
}

export async function getPaginatedPosts({ page, limit }: { page: number; limit: number }): Promise<{ posts: Post[]; total: number }> {
  const allPosts = await getPosts();

  // Get a subset of posts based on page and limit
  const paginatedPosts = allPosts.slice((page - 1) * limit, page * limit);

  return {
    posts: paginatedPosts,
    total: allPosts.length,
  };
}
