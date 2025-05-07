// app/contentfulblogs/page.tsx
import { createClient, Asset } from 'contentful';
import GalleryItem from '../blogs/GalleryItem';
import { BlogPostEntry, BlogPostSkeleton } from '../../types/contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export default async function Home() {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    include: 2,
  });
  
  

  const posts = res.items as BlogPostEntry[];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => {
          const title = post.fields.title;
          console.log("TITLE DATA", title);
          const imageAsset = post.fields.blogImage as unknown as Asset;
          const file = imageAsset?.fields?.file;
          const imageUrl = file?.url;

          if (!imageUrl) return null;

          return (
            <GalleryItem
              key={post.sys.id}
              id={post.sys.id}
              title={title}
              imageUrl={`https:${imageUrl}`}
            />
          );
        })}
      </div>
    </div>
  );
}
