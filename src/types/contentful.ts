import { Entry, EntrySkeletonType } from 'contentful';

export interface BlogPostFieldsData {
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

export type BlogPostSkeleton = EntrySkeletonType<BlogPostFieldsData>;
export type BlogPostEntry = Entry<BlogPostSkeleton>;


import { Document } from '@contentful/rich-text-types';

export interface BlogPostFields {
  title: string;
  description: Document; // if it's rich text
  slug: string;
  blogImage: {
    sys: {
      id: string;
      linkType: 'Asset';
      type: 'Link';
    };
  };
}


export interface BlogPost {
  sys: {
    id: string;
  };
  fields: BlogPostFields;
}