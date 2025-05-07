// app/page.tsx or pages/index.tsx
import { createClient, Entry, EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import GalleryItem from '../blogs/GalleryItem'; // adjust if path is incorrect

interface BlogPostFields {
  title: string;
  blogDescription: Document;
  blogImage: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
}

type BlogPostSkeleton = EntrySkeletonType<BlogPostFields>;
type BlogPost = Entry<BlogPostSkeleton>;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export default async function Home() {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    locale: 'en-US',
  });

  const posts: BlogPost[] = res.items;

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Blogs</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {posts.map((post) => (
          <GalleryItem
            key={post.sys.id}
            id={post.sys.id}
            title={post.fields.title}
            imageUrl={`https:${post.fields.blogImage?.fields?.file?.url}`}
          />
        ))}
      </div>
    </div>
  );
}
