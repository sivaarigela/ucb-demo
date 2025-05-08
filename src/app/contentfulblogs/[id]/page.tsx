import { createClient, Asset } from 'contentful';
import { BlogPostSkeleton, BlogPostEntry } from '../../../types/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import Image from 'next/image';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

interface BlogPostPageProps {
  params: { id: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = params;

  try {
    const entry = await client.getEntry<BlogPostSkeleton>(id);

    const post = entry as BlogPostEntry;
    const { title, blogImage, blogDescription } = post.fields;

    const imageAsset = blogImage as unknown as Asset;
    const imageUrl = imageAsset?.fields?.file?.url;
    //const title = post.fields.title;
    const postdata = post.fields;
    console.log("post data fields", postdata);
    console.log("post data title", title);
    const descriptionDoc = blogDescription as any as Document;
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">{title as any}</h1>
        {documentToReactComponents(descriptionDoc)}
        {imageUrl && (
          <Image
            src={`https:${imageUrl}`}
            alt={(title as any)['en-US'] ?? 'Untitled Post'}
            width={800}
            height={400}
            className="rounded-lg mb-6"
          />
        )}
        <div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return (
      <div className="text-center mt-20 text-red-600">
        <p>Failed to load blog post. Please check the ID or try again later.</p>
      </div>
    );
  }
}
