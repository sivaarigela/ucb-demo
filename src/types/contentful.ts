import { Entry, EntrySkeletonType } from 'contentful';

export interface BlogPostFields {
  title: string;
  blogDescription: Document;
  blogImage: {
    sys: {
      id: string;
      linkType: 'Asset';
      type: 'Link';
    };
  };
}

export type BlogPostSkeleton = EntrySkeletonType<BlogPostFields>;
export type BlogPostEntry = Entry<BlogPostSkeleton>;
