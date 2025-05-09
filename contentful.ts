import { createClient } from 'contentful';

export function getContentfulClient(isPreview: boolean) {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: isPreview
      ? process.env.CONTENTFUL_PREVIEW_API_TOKEN!
      : process.env.CONTENTFUL_DELIVERY_API_TOKEN!,
    host: isPreview ? 'preview.contentful.com' : 'cdn.contentful.com',
  });
}
