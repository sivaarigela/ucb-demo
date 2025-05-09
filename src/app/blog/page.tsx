import { fetchAllBlogPosts } from '../../lib/contentful';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export const revalidate = 60;

export default async function BlogPage() {
  const posts = await fetchAllBlogPosts(true); // preview mode

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.sys.id} className="border p-4 rounded-lg shadow-sm">
            <Link href={`/blog/${post.sys.id}`}>
              <h2 className="text-2xl font-semibold hover:underline">{post.fields.title as any}</h2>
              {documentToReactComponents(post.fields.description as any)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}