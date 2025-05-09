'use client'; // ✅ Must be a client component

import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ContentfulLivePreviewProvider locale="en-US">
      {children}
    </ContentfulLivePreviewProvider>
  );
}
