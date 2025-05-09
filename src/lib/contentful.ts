import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID!;
const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master';

const getClient = (preview = false) =>
  createClient({
    space,
    environment,
    accessToken: preview
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!
      : process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!,
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com',
  });

export async function fetchAllBlogPosts(preview = false) {
  const client = getClient(preview);
  const entries = await client.getEntries({ content_type: 'blogPost' });
  return entries.items;
}

export async function fetchBlogPostById(id: string, preview = false) {
  const client = getClient(preview);
  const entry = await client.getEntry(id);
  return entry;
}