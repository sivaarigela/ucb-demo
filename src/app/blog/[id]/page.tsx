import { fetchBlogPostById } from '../../../lib/contentful';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import { Asset } from 'contentful';

type Props = {
  params: { id: string };
};

export const revalidate = 0; // disable ISR to always fetch latest for preview

export default async function BlogDetailPage({ params }: Props) {
  const post = await fetchBlogPostById(params.id, true); // true = preview mode
  const descriptionDoc = post.fields.blogDescription;
  const imageAsset = post.fields.blogImage as Asset;
  const imageUrl = imageAsset?.fields?.file?.url;


  if (!post?.fields) return notFound();

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.fields.title as any}</h1>
      {documentToReactComponents(descriptionDoc as any)}

      {imageUrl && (
              <Image
                src={`https:${imageUrl}`}
                alt={post.fields.title as any}
                width={800}
                height={400}
                className="rounded-lg mb-6"
              />
            )}
    </main>
  );
}